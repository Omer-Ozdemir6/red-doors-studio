const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;

const PowerMode = {
  get low() {
    return reducedMotion() || coarsePointer();
  },
};

export default PowerMode;
