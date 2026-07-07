import gsap from "gsap";

class HeroManager {
  constructor() {
    this.heroes = [];
    this._onMove = this._onMove.bind(this);
  }

  init() {
    this.heroes = gsap.utils.toArray("[data-hero]").map((el) => {
      const media = el.querySelector("[data-hero-media]");
      const title = el.querySelector("[data-hero-title]");
      const ghost = el.querySelector("[data-hero-ghost]");
      const cta = el.querySelector("[data-hero-cta]");
      const scrollLabel = el.querySelector("[data-hero-scroll-label]");
      const quickX = media ? gsap.quickTo(media, "x", { duration: 0.85, ease: "power3.out" }) : null;
      const quickY = media ? gsap.quickTo(media, "y", { duration: 0.85, ease: "power3.out" }) : null;

      if (media) {
        gsap.fromTo(
          media,
          { autoAlpha: 0, scale: 1.18, filter: "blur(14px)" },
          { autoAlpha: 0.76, scale: 1.12, filter: "blur(0px)", duration: 1.55, ease: "power3.out" },
        );

        gsap.to(media, {
          scale: 1,
          autoAlpha: 0.38,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (title) {
        gsap.fromTo(
          title,
          { xPercent: 0, clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.95,
            delay: 0.12,
            ease: "expo.out",
          },
        );

        gsap.to(title, {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (ghost) {
        gsap.fromTo(ghost, { autoAlpha: 0 }, { autoAlpha: 0.22, duration: 0.8, delay: 0.65 });
        gsap.to(ghost, {
          xPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        [cta, scrollLabel].filter(Boolean),
        { autoAlpha: 0, y: 120 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.16, delay: 1.05, ease: "power3.out" },
      );

      return { el, media, quickX, quickY };
    });

    document.addEventListener("pointermove", this._onMove);
  }

  destroy() {
    document.removeEventListener("pointermove", this._onMove);
    this.heroes = [];
  }

  _onMove(event) {
    this.heroes.forEach(({ el, quickX, quickY }) => {
      if (!quickX || !quickY) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      quickX(px * -28);
      quickY(py * -18);
    });
  }
}

export default HeroManager;
