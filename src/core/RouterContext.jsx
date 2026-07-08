import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const targetPathRef = useRef("");

  const navigate = useCallback((path) => {
    if (path === window.location.pathname) return;
    targetPathRef.current = path;
    setIsTransitioning(true);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      targetPathRef.current = window.location.pathname;
      setIsTransitioning(true);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const completeNavigation = useCallback(() => {
    const target = targetPathRef.current;
    if (target) {
      window.history.pushState(null, "", target);
      setCurrentPath(target);
      targetPathRef.current = "";
    }
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        isTransitioning,
        setIsTransitioning,
        navigate,
        completeNavigation,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
