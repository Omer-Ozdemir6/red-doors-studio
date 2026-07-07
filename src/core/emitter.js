class Emitter {
  constructor() {
    this.target = new EventTarget();
  }

  on(type, callback) {
    this.target.addEventListener(type, callback);
  }

  off(type, callback) {
    this.target.removeEventListener(type, callback);
  }

  emit(type, detail = {}) {
    this.target.dispatchEvent(new CustomEvent(type, { detail }));
    window.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

export default new Emitter();
