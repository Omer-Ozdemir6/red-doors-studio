import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DIRECTION_DOWN_CLASSNAME = "--js-scroll-down";
const DIRECTION_UP_CLASSNAME = "--js-scroll-up";
const SCROLL_MINIMUM_CLASSNAME = "--js-scroll-min";
const LOGO_MINIMUM_CLASSNAME = "--js-logo-min";

class ScrollManager {
  constructor() {
    this.lenis = null;
    this.direction = "up";
    this.previous = 0;
    this.scroll = 0;
    this._tick = this._tick.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._onAnchorClick = this._onAnchorClick.bind(this);
  }

  init() {
    this.lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    });

    this.lenis.on("scroll", this._onScroll);
    gsap.ticker.add(this._tick);
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", this._onAnchorClick);
    this._onScroll({ scroll: window.scrollY || 0 });
  }

  destroy() {
    document.removeEventListener("click", this._onAnchorClick);
    gsap.ticker.remove(this._tick);
    this.lenis?.destroy();
    this.lenis = null;
    document.body.classList.remove(
      DIRECTION_DOWN_CLASSNAME,
      DIRECTION_UP_CLASSNAME,
      SCROLL_MINIMUM_CLASSNAME,
      LOGO_MINIMUM_CLASSNAME,
    );
  }

  stop() {
    this.lenis?.stop();
  }

  start() {
    this.lenis?.start();
  }

  _tick(time) {
    this.lenis?.raf(time * 1000);
    ScrollTrigger.update();
  }

  _onScroll(event) {
    const current = event.scroll || 0;
    const direction = current > this.previous ? "down" : "up";

    this.scroll = current;
    this.direction = direction;
    this.previous = current;

    document.body.classList.toggle(DIRECTION_DOWN_CLASSNAME, direction === "down");
    document.body.classList.toggle(DIRECTION_UP_CLASSNAME, direction === "up");
    document.body.classList.toggle(SCROLL_MINIMUM_CLASSNAME, current > 200);
    document.body.classList.toggle(LOGO_MINIMUM_CLASSNAME, current > 500);

    window.dispatchEvent(
      new CustomEvent("redDoors:scroll", {
        detail: {
          y: current,
          direction,
          min: current > 200,
          logoMin: current > 500,
        },
      }),
    );
  }

  _onAnchorClick(event) {
    const anchor = event.target.closest('a[href^="#"], a[href^="/#"]');
    if (!anchor || !this.lenis) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#" || href === "/#") return;

    const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    this.lenis.scrollTo(target, {
      duration: 1.2,
      offset: 0,
    });
  }
}

export default ScrollManager;
