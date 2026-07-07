import gsap from "gsap";

class GamePanelsManager {
  init() {
    gsap.utils.toArray("[data-game-panel]").forEach((panel) => {
      const bg = panel.querySelector("[data-game-bg]");
      const shade = panel.querySelector("[data-game-bg-shade]");
      const media = panel.querySelector("[data-game-media]");
      const poster = panel.querySelector("[data-game-poster]");
      const copy = panel.querySelector("[data-game-copy]");
      const copyItems = gsap.utils.toArray(
        "[data-game-heading], [data-game-description], [data-game-link]",
        panel,
      );
      const typeItems = gsap.utils.toArray("[data-game-eyebrow]", panel);

      if (bg) {
        const from = { autoAlpha: 0.25, filter: "blur(8px)" };
        const to = {
          autoAlpha: 0.72,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        };

        if (!bg.hasAttribute("data-scroll-speed")) {
          from.yPercent = 18;
          to.yPercent = -18;
        }

        gsap.fromTo(bg, from, to);
      }

      if (media) {
        gsap.fromTo(
          media,
          { clipPath: "inset(0 16% 0 16%)", y: 110, autoAlpha: 0.45 },
          {
            clipPath: "inset(0 0% 0 0%)",
            y: -34,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%",
              end: "bottom 24%",
              scrub: true,
            },
          },
        );
      }

      if (poster) {
        gsap.fromTo(
          poster,
          { scale: 1.14, yPercent: -8, filter: "blur(10px)" },
          {
            scale: 1.02,
            yPercent: 8,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      }

      if (shade) {
        gsap.fromTo(
          shade,
          { autoAlpha: 0.82 },
          {
            autoAlpha: 0.28,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          },
        );

        gsap.to(shade, {
          autoAlpha: 0.78,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "70% center",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (copy) {
        gsap.fromTo(
          copy,
          { y: 105 },
          {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 92%",
              end: "bottom 26%",
              scrub: 1.35,
            },
          },
        );
      }

      if (copyItems.length) {
        gsap.fromTo(
          copyItems,
          { autoAlpha: 0, y: 92, filter: "blur(16px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 2.25,
            stagger: 0.34,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 48%",
              once: true,
            },
          },
        );
      }

      if (typeItems.length) {
        gsap.fromTo(
          typeItems,
          { "--type-progress": 0, autoAlpha: 1, filter: "blur(1px)" },
          {
            "--type-progress": 1,
            filter: "blur(0px)",
            duration: 3.15,
            ease: "steps(32)",
            scrollTrigger: {
              trigger: panel,
              start: "top 52%",
              once: true,
            },
          },
        );
      }
    });
  }
}

export default GamePanelsManager;
