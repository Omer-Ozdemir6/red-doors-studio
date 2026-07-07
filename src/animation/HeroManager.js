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
      const words = gsap.utils.toArray("[data-hero-word]", el);
      const cta = el.querySelector("[data-hero-cta]");
      const scrollLabel = el.querySelector("[data-hero-scroll-label]");
      const cinema = el.querySelector("[data-hero-cinema]");
      const sweep = el.querySelector("[data-hero-sweep]");
      const distortion = el.querySelector("[data-hero-distortion]");
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

      if (cinema) {
        gsap.fromTo(cinema, { autoAlpha: 0 }, { autoAlpha: 0.72, duration: 1.2, delay: 0.3, ease: "linear" });
        gsap.to(cinema, {
          backgroundPosition: "72% 42%, 18% 70%, 50% 50%",
          duration: 9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(cinema, {
          autoAlpha: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (sweep) {
        gsap.fromTo(sweep, { autoAlpha: 0, xPercent: -80 }, { autoAlpha: 0.55, xPercent: 80, duration: 2.8, delay: 0.6, ease: "expo.inOut" });
        gsap.to(sweep, {
          xPercent: 120,
          autoAlpha: 0.18,
          duration: 7,
          repeat: -1,
          repeatDelay: 2.5,
          ease: "sine.inOut",
        });
      }

      if (distortion) {
        gsap.fromTo(distortion, { autoAlpha: 0 }, { autoAlpha: 0.34, duration: 0.7, delay: 0.45 });
        gsap.to(distortion, {
          x: 18,
          duration: 0.12,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }

      if (title && words.length) {
        gsap.fromTo(
          words,
          { autoAlpha: 0, y: 44, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            delay: 0.18,
            stagger: 0.08,
            ease: "expo.out",
          },
        );

        const mergeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=1350",
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
          },
        });

        mergeTimeline
          .to(words, {
            xPercent: (index) => [8, 3, 0, -3, -8][index] || 0,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.98)",
            ease: "none",
            duration: 0.58,
          })
          .to(
            cta,
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
              duration: 0.28,
            },
            0.18,
          )
          .to(
            media,
            {
              scale: 1.04,
              autoAlpha: 0.52,
              filter: "blur(1px)",
              ease: "none",
              duration: 0.58,
            },
            0,
          )
          .to(
            title,
            {
              autoAlpha: 0.42,
              scale: 0.94,
              ease: "none",
              duration: 0.22,
            },
            0.72,
          );
      }

      gsap.fromTo(
        [scrollLabel].filter(Boolean),
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
