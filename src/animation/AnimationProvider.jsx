import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollManager from "./ScrollManager";
import HeroManager from "./HeroManager";
import RevealManager from "./RevealManager";
import GamePanelsManager from "./GamePanelsManager";
import GlitchManager from "./GlitchManager";
import ScrollProgressManager from "./ScrollProgressManager";
import VideoManager from "./VideoManager";
import Mill3CompatManager from "./Mill3CompatManager";

gsap.registerPlugin(ScrollTrigger);

function AnimationProvider({ children }) {
  useEffect(() => {
    const scroll = new ScrollManager();
    const managers = [
      scroll,
      new Mill3CompatManager(),
      new HeroManager(),
      new RevealManager(),
      new ScrollProgressManager(),
      new GamePanelsManager(),
      new VideoManager(),
      new GlitchManager(),
    ];

    const context = gsap.context(() => {
      managers.forEach((manager) => manager.init?.());
      ScrollTrigger.refresh();
    });

    window.redDoorsAnimation = { scroll };

    return () => {
      context.revert();
      managers
        .slice()
        .reverse()
        .forEach((manager) => manager.destroy?.());
      delete window.redDoorsAnimation;
    };
  }, []);

  return children;
}

export default AnimationProvider;
