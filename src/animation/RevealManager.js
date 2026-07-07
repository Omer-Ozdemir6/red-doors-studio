import gsap from "gsap";

class RevealManager {
  init() {
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      const delay = Number.parseFloat(el.dataset.revealDelay || "0");
      const style = el.dataset.revealStyle || "lift";
      const from = {
        autoAlpha: 0,
        y: 120,
        filter: "blur(7px)",
        clipPath: "inset(0 0 18% 0)",
      };
      const to = {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        clipPath: "inset(0 0 0% 0)",
        duration: 1,
        delay,
        ease: "power3.out",
      };

      if (style === "type") {
        Object.assign(from, {
          y: 0,
          filter: "blur(2px)",
          clipPath: "inset(0 100% 0 0)",
        });
        Object.assign(to, {
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0)",
          duration: 1.7,
          ease: "power2.out",
        });
      }

      if (style === "row") {
        Object.assign(from, {
          x: -44,
          y: 0,
          filter: "blur(10px)",
          clipPath: "inset(0 100% 0 0)",
        });
        Object.assign(to, {
          x: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0)",
          duration: 1.45,
          ease: "power3.out",
        });
      }

      if (style === "form") {
        Object.assign(from, {
          x: 70,
          y: 0,
          filter: "blur(12px)",
          clipPath: "inset(0 0 0 24%)",
        });
        Object.assign(to, {
          x: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0 0%)",
          duration: 1.6,
          ease: "power3.out",
        });
      }

      gsap.fromTo(
        el,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true,
          },
        },
      );
    });
  }
}

export default RevealManager;
