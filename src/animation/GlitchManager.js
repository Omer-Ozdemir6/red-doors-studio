class GlitchManager {
  constructor() {
    this.items = [];
  }

  init() {
    this.items = [...document.querySelectorAll("[data-glitch]")].map((el) => {
      const onEnter = () => this._run(el);
      el.addEventListener("mouseenter", onEnter);
      return { el, onEnter };
    });
  }

  destroy() {
    this.items.forEach(({ el, onEnter }) => {
      el.removeEventListener("mouseenter", onEnter);
      el.querySelectorAll(".--glitching").forEach((char) => char.classList.remove("--glitching"));
    });
    this.items = [];
  }

  _run(el) {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const chars = [...el.querySelectorAll(".split-char")];
    if (!chars.length) {
      el.classList.add("--glitching");
      window.setTimeout(() => el.classList.remove("--glitching"), 260);
      return;
    }

    const shuffled = chars.sort(() => Math.random() - 0.5).slice(0, 7);
    shuffled.forEach((char, index) => {
      window.setTimeout(() => char.classList.add("--glitching"), index * 55);
      window.setTimeout(() => char.classList.remove("--glitching"), index * 55 + 180);
    });
  }
}

export default GlitchManager;
