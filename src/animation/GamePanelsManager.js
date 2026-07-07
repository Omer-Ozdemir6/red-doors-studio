import gsap from "gsap";

class GamePanelsManager {
  init() {
    gsap.utils.toArray("[data-game-panel]").forEach((panel) => {
      const bg = panel.querySelector("[data-game-bg]");
      const media = panel.querySelector("[data-game-media]");
      const poster = panel.querySelector("[data-game-poster]");

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
          { clipPath: "inset(0 22% 0 22%)" },
          {
            clipPath: "inset(0 0% 0 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "center center",
              scrub: true,
            },
          },
        );
      }

      if (poster) {
        gsap.fromTo(
          poster,
          { scale: 1.2, filter: "blur(15px)" },
          {
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              once: true,
            },
          },
        );
      }
    });
  }
}

export default GamePanelsManager;
