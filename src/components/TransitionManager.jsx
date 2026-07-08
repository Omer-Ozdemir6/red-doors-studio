import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "../core/RouterContext";

function TransitionManager() {
  const { isTransitioning, setIsTransitioning, completeNavigation } = useRouter();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isTransitioning) return undefined;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth / 2); // lower res for horror performance
    let height = (canvas.height = window.innerHeight / 2);

    const handleResize = () => {
      width = canvas.width = window.innerWidth / 2;
      height = canvas.height = window.innerHeight / 2;
    };
    window.addEventListener("resize", handleResize);

    // Canvas Static Noise Loop
    const drawNoise = () => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const length = data.length;

      for (let i = 0; i < length; i += 4) {
        const val = Math.random() > 0.5 ? 255 : 0;
        const colorFilter = Math.random() > 0.98; // occasional red glitch
        data[i] = colorFilter ? 200 : val; // R
        data[i + 1] = colorFilter ? 0 : val; // G
        data[i + 2] = colorFilter ? 0 : val; // B
        data[i + 3] = 255; // A
      }

      ctx.putImageData(imageData, 0, 0);

      // Draw random glitch bars
      if (Math.random() > 0.7) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
        ctx.fillRect(0, Math.random() * height, width, Math.random() * 15);
      }
      if (Math.random() > 0.8) {
        ctx.fillStyle = "rgba(0, 255, 255, 0.3)";
        ctx.fillRect(Math.random() * width, 0, Math.random() * 20, height);
      }

      animationRef.current = requestAnimationFrame(drawNoise);
    };

    drawNoise();

    // GSAP Transition Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    tl.set(container, { display: "block", autoAlpha: 0 })
      // Phase 1: Static fades in
      .to(container, {
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          // Switch route mid-transition when static covers screen
          completeNavigation();
          window.scrollTo(0, 0);
        },
      })
      // Phase 2: Static lingers slightly
      .to(container, {}, { duration: 0.15 })
      // Phase 3: Static fades out
      .to(container, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(container, { display: "none" });
        }
      });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      tl.kill();
    };
  }, [isTransitioning, completeNavigation, setIsTransitioning]);

  return (
    <div
      ref={containerRef}
      style={{ display: "none" }}
      className="pointer-events-none fixed inset-0 z-[9999] bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-red-950/20" />
      <div className="absolute inset-0 scanlines opacity-35" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-xs font-black uppercase tracking-[0.45em] text-red-600 animate-pulse">
          SIGNAL LOST
        </span>
      </div>
    </div>
  );
}

export default TransitionManager;
