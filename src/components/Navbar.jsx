import { useEffect, useState } from "react";
import SplitText from "./SplitText";

const menuLinks = [
  ["About", "#about"],
  ["News", "#news"],
  ["Careers", "#careers"],
  ["Lore", "#lore"],
  ["Store", "#games"],
  ["Contact", "#contact"],
];

function Navbar({ soundEnabled, setSoundEnabled }) {
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState({
    direction: "up",
    min: false,
    logoMin: false,
  });

  useEffect(() => {
    const onScroll = (event) => setScrollState(event.detail);
    window.addEventListener("redDoors:scroll", onScroll);
    return () => window.removeEventListener("redDoors:scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("--js-site-nav-opened", open);
    window.redDoorsAnimation?.scroll?.[open ? "stop" : "start"]?.();

    const onKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("--js-site-nav-opened");
      window.redDoorsAnimation?.scroll?.start?.();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const hiddenByScroll = scrollState.min && scrollState.direction === "down" && !open;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-5 text-white transition duration-500 md:px-10 ${
          scrollState.min ? "py-3 backdrop-blur" : "py-5"
        } ${hiddenByScroll ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <a
            data-glitch
            href="#"
            className={`glitch-link font-black uppercase tracking-[0.36em] transition-all duration-500 ${
              scrollState.logoMin ? "text-xs md:text-sm" : "text-sm md:text-base"
            }`}
          >
            Red Doors
          </a>

          <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.22em] text-zinc-300 lg:flex">
            <button
              data-glitch
              type="button"
              onClick={() => setSoundEnabled((value) => !value)}
              className="glitch-link transition hover:text-white"
            >
              Sound {soundEnabled ? "On" : "Off"}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-white">En</span>
              <span className="text-zinc-600">/</span>
              <span>Tr</span>
            </div>
            <a data-glitch href="#games" className="glitch-link transition hover:text-white">
              Games
            </a>
            <a data-glitch href="#games" className="glitch-link transition hover:text-white">
              Store -&gt;
            </a>
          </div>

          <button
            data-glitch
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-zinc-200"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="grid h-10 w-10 place-items-center border border-white/20 transition group-hover:border-red-700">
              {open ? "x" : "+"}
            </span>
          </button>
        </div>
      </header>

      <aside
        id="site-nav"
        aria-hidden={!open}
        className={`site-nav-panel fixed inset-0 z-40 bg-black/95 px-5 pb-10 pt-28 text-white md:px-10 ${
          open ? "is-open" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(150,0,0,0.28),transparent_35%)]" />
        <div className="absolute inset-0 scanlines opacity-25" />
        <div className="relative mx-auto grid h-full max-w-[1600px] gap-10 md:grid-cols-[1fr_0.45fr]">
          <nav className="flex flex-col justify-center">
            {menuLinks.map(([label, href], index) => (
              <a
                data-glitch
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="site-nav-link border-b border-white/10 py-4 text-5xl font-black uppercase leading-none transition hover:text-red-600 md:text-8xl"
                style={{ "--nav-index": index }}
              >
                <SplitText text={label} delay={index * 50} />
              </a>
            ))}
          </nav>

          <div className="flex flex-col justify-end gap-8 text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
            <a data-glitch href="#games" onClick={() => setOpen(false)} className="glitch-link hover:text-white">
              Games
            </a>
            <a data-glitch href="#contact" onClick={() => setOpen(false)} className="glitch-link hover:text-white">
              Support
            </a>
            <div className="grid grid-cols-2 gap-3">
              {["Facebook", "X", "Instagram", "Discord", "LinkedIn", "YouTube"].map((item) => (
                <a data-glitch key={item} href="#contact" className="glitch-link hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
