import gsap from "gsap";
import EMITTER from "../core/emitter";
import PowerMode from "../core/powerMode";

const OUTVIEW_CLASSNAME = "is-outview";
const INVIEW_CLASSNAME = "is-inview";
const INVIEW_ENTER = "enter";
const INVIEW_EXIT = "exit";

const parseOffset = (el, fallbackStart, fallbackEnd) => {
  const raw = el.dataset.scrollOffset || "";
  if (!raw) return [fallbackStart, fallbackEnd];

  const parts = raw.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length === 1) return [parts[0], fallbackEnd];
  if (parts.length >= 2) return [parts[0], parts[1]];
  return [fallbackStart, fallbackEnd];
};

const getTrigger = (el) => {
  const selector = el.dataset.scrollTarget;
  if (!selector) return el;
  return document.querySelector(selector) || el;
};

const getPositionStart = (el) => {
  const position = el.dataset.scrollPosition;
  if (position === "top") return "top bottom";
  if (position === "center") return "center bottom";
  if (position === "bottom") return "bottom bottom";
  return "top 84%";
};

class Mill3CompatManager {
  constructor() {
    this.triggers = [];
  }

  init() {
    this._setupScrollElements();
    this._setupSpeedElements();
  }

  destroy() {
    this.triggers = [];
  }

  _setupScrollElements() {
    gsap.utils.toArray("[data-scroll]").forEach((el) => {
      const repeat = el.dataset.scrollRepeat !== "false";
      const call = el.dataset.scrollCall;
      const trigger = getTrigger(el);
      const [start, end] = parseOffset(el, getPositionStart(el), "bottom top");

      el.classList.add(OUTVIEW_CLASSNAME);

      const emit = (direction) => {
        if (call) {
          document.body.classList.toggle(`--js-${call}-inview`, direction === INVIEW_ENTER);
        }

        const payload = {
          el,
          trigger,
          call,
          direction,
          inView: direction === INVIEW_ENTER,
        };

        if (call) {
          EMITTER.emit(`SiteScroll.${call}`, payload);
          window.dispatchEvent(new CustomEvent("redDoors:scroll-call", { detail: payload }));
        }
      };

      const enter = () => {
        el.classList.add(INVIEW_CLASSNAME);
        el.classList.remove(OUTVIEW_CLASSNAME);
        emit(INVIEW_ENTER);
      };

      const exit = () => {
        if (!repeat && el.classList.contains(INVIEW_CLASSNAME)) return;
        el.classList.remove(INVIEW_CLASSNAME);
        el.classList.add(OUTVIEW_CLASSNAME);
        emit(INVIEW_EXIT);
      };

      this.triggers.push(
        gsap.to(el, {
          "--scroll-progress": 1,
          paused: true,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub: el.hasAttribute("data-scroll-progress") ? Number.parseFloat(el.dataset.scrollDelay || "0.2") : false,
            once: !repeat,
            onEnter: enter,
            onEnterBack: enter,
            onLeave: exit,
            onLeaveBack: exit,
            onUpdate: (self) => {
              if (el.hasAttribute("data-scroll-progress")) {
                el.style.setProperty("--scroll-progress", self.progress.toFixed(4));
              }
            },
          },
        }),
      );
    });
  }

  _setupSpeedElements() {
    if (PowerMode.low) return;

    gsap.utils.toArray("[data-scroll-speed]").forEach((el) => {
      const speed = Number.parseFloat(el.dataset.scrollSpeed || "0");
      if (!speed) return;

      const trigger = getTrigger(el);
      const delay = Number.parseFloat(el.dataset.scrollDelay || "0.35");
      const [start, end] = parseOffset(el, "top bottom", "bottom top");

      this.triggers.push(
        gsap.fromTo(
          el,
          { yPercent: speed * 8 },
          {
            yPercent: speed * -8,
            ease: "none",
            scrollTrigger: {
              trigger,
              start,
              end,
              scrub: delay,
            },
          },
        ),
      );
    });
  }
}

export default Mill3CompatManager;
