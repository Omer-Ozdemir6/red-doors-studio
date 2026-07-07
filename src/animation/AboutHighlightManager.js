import gsap from "gsap";

class AboutHighlightManager {
  init() {
    gsap.utils.toArray("[data-highlight-fill]").forEach((item) => {
      gsap.fromTo(
        item,
        { "--highlight-progress": 0 },
        {
          "--highlight-progress": 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item.closest("#about") || item,
            start: "top 70%",
            once: true,
          },
        },
      );
    });
  }
}

export default AboutHighlightManager;
