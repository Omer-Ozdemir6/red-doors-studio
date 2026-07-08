const GLITCH_SYMBOLS = ["@", "#", "$", "%", "&", "X", "0", "Ø", "§", "?", "*", "!", "+", "="];

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
      el.querySelectorAll(".--glitching").forEach((char) => {
        char.classList.remove("--glitching");
        if (char.dataset.origChar) {
          char.textContent = char.dataset.origChar;
        }
      });
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

    // Glitch a subset of characters
    const count = Math.min(chars.length, 6);
    const shuffled = chars.sort(() => Math.random() - 0.5).slice(0, count);

    shuffled.forEach((char, index) => {
      const origText = char.textContent;
      char.dataset.origChar = origText;

      const delay = index * 45;
      const duration = 150 + Math.random() * 150;

      // Start glitch
      window.setTimeout(() => {
        char.classList.add("--glitching");
        
        // Rapidly shuffle characters during glitch duration
        let intervalCount = 0;
        const interval = window.setInterval(() => {
          char.textContent = GLITCH_SYMBOLS[Math.floor(Math.random() * GLITCH_SYMBOLS.length)];
          intervalCount++;
          if (intervalCount > 4) {
            window.clearInterval(interval);
          }
        }, 30);

        // Stop glitch and restore original character
        window.setTimeout(() => {
          window.clearInterval(interval);
          char.classList.remove("--glitching");
          char.textContent = origText;
        }, duration);

      }, delay);
    });
  }
}

export default GlitchManager;
