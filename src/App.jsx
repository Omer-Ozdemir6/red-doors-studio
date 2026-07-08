import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GamesSection from "./components/GamesSection";
import LoreSection from "./components/LoreSection";
import CareersSection from "./components/CareersSection";
import NewsSection from "./components/NewsSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AnimationProvider from "./animation/AnimationProvider";
import BootIntro from "./components/BootIntro";
import GamePage from "./components/GamePage";
import AboutPage from "./components/AboutPage";
import { useRouter } from "./core/RouterContext.jsx";
import TransitionManager from "./components/TransitionManager";

function App() {
  const { currentPath, navigate } = useRouter();
  const [entered, setEntered] = useState(() => localStorage.getItem("ageGate") === "1");
  const [booting, setBooting] = useState(false);

  const enterSite = () => {
    localStorage.setItem("ageGate", "1");
    setEntered(true);
    setBooting(true);
  };

  useEffect(() => {
    const handleLinkClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isHashOnHome = href.startsWith("/#") || href.startsWith("#");

      // If on subpage and user clicks a home page hash link (e.g. /#games)
      if (currentPath !== "/") {
        if (isHashOnHome) {
          event.preventDefault();
          const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
          if (hash) {
            window.redDoorsTargetHash = hash;
          }
          navigate("/");
          return;
        }
      }

      // Intercept local relative routes, exclude external/hash/downloads/newtab
      if (
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !anchor.hasAttribute("download") &&
        anchor.target !== "_blank"
      ) {
        event.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, [currentPath, navigate]);

  // Hook to handle scrolling to section when coming back from subpages
  useEffect(() => {
    if (currentPath === "/" && window.redDoorsTargetHash) {
      const hash = window.redDoorsTargetHash;
      window.redDoorsTargetHash = null;

      // Small delay to ensure ScrollManager has initialized lenis after unmount/mount cycle
      const timeout = window.setTimeout(() => {
        const scrollInstance = window.redDoorsAnimation?.scroll;
        const targetElement = document.querySelector(hash);
        if (scrollInstance?.lenis && targetElement) {
          scrollInstance.lenis.scrollTo(targetElement, {
            duration: 1.2,
            offset: 0,
          });
        }
      }, 150);

      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [currentPath]);

  if (!entered) {
    return (
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,0,0,0.34),transparent_38%),linear-gradient(115deg,rgba(255,255,255,0.06),transparent_28%,rgba(90,0,0,0.18)_72%)]" />
        <div className="absolute inset-0 noise-flicker opacity-35" />
        <section className="relative z-10 grid w-full max-w-5xl gap-10 text-center">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.45em] text-red-600">
              Giriş Protokolü
            </p>
            <h1 className="mb-8 text-6xl font-black uppercase leading-[0.82] md:text-9xl">
              Red Doors
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-2xl font-black uppercase leading-tight md:text-4xl">
              Korkuyu sonuna kadar yaşamaya hazır mısınız?
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              data-glitch
              type="button"
              onClick={enterSite}
              className="glitch-link min-h-14 w-full border border-red-700 bg-red-700 px-8 text-xs font-black uppercase tracking-[0.32em] text-white transition hover:bg-red-800 sm:w-1/2"
            >
              Evet
            </button>
            <button
              data-glitch
              type="button"
              className="glitch-link min-h-14 w-full border border-white/15 px-8 text-xs font-black uppercase tracking-[0.32em] text-zinc-400 transition hover:border-white/40 hover:text-white sm:w-1/2"
            >
              Hayır
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (currentPath.startsWith("/games/")) {
    return (
      <AnimationProvider>
        <GamePage />
        <TransitionManager />
      </AnimationProvider>
    );
  }

  if (currentPath === "/about" || currentPath === "/about/") {
    return (
      <AnimationProvider>
        <AboutPage />
        <TransitionManager />
      </AnimationProvider>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-700 selection:text-white">
      {booting && <BootIntro onComplete={() => setBooting(false)} />}
      {!booting && (
        <AnimationProvider>
          <Navbar />
          <Hero />
          <About />
          <GamesSection />
          <LoreSection />
          <CareersSection />
          <NewsSection />
          <Newsletter />
          <Footer />
          <TransitionManager />
        </AnimationProvider>
      )}
    </main>
  );
}

export default App;
