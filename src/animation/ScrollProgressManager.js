import gsap from "gsap";

class ScrollProgressManager {
  init() {
    gsap.utils.toArray("[data-scroll-progress]").forEach((el) => {
      if (el.hasAttribute("data-scroll")) return;

      gsap.fromTo(
        el,
        { "--scroll-progress": 0 },
        {
          "--scroll-progress": 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: el.dataset.scrollStart || "top bottom",
            end: el.dataset.scrollEnd || "bottom top",
            scrub: true,
          },
        },
      );
    });

    gsap.utils.toArray("[data-parallax-media]").forEach((el) => {
      if (el.hasAttribute("data-scroll-speed")) return;

      const speed = Number.parseFloat(el.dataset.parallaxSpeed || "18");
      gsap.fromTo(
        el,
        { yPercent: speed },
        {
          yPercent: -speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  }
}

export default ScrollProgressManager;
