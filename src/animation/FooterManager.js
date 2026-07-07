import gsap from "gsap";

class FooterManager {
  init() {
    gsap.utils.toArray("[data-footer-item]").forEach((item) => {
      gsap.fromTo(
        item,
        {
          clipPath: "inset(0 100% 0 0)",
          autoAlpha: 0.001,
          x: -18,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          delay: Number.parseFloat(item.dataset.footerDelay || "0"),
          ease: "expo.out",
          scrollTrigger: {
            trigger: item.closest("[data-footer]") || item,
            start: "top 76%",
            once: true,
          },
        },
      );
    });
  }
}

export default FooterManager;
