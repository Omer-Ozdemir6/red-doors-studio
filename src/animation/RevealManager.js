import gsap from "gsap";

class RevealManager {
  init() {
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      const delay = Number.parseFloat(el.dataset.revealDelay || "0");
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 120,
          filter: "blur(7px)",
          clipPath: "inset(0 0 18% 0)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          delay,
          ease: "power3.out",
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
