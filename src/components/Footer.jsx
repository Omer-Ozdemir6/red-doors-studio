import { useMemo, useState } from "react";
import heroBg from "../assets/images/hero-bg.png";
import echoBg from "../assets/images/project-echo-bg.png";
import sinirBg from "../assets/images/sinir-1-bg.png";

function Footer() {
  const [newsletterExpanded, setNewsletterExpanded] = useState(false);
  const links = [
    ["Games", "#games"],
    ["About", "#about"],
    ["Lore", "#lore"],
    ["News", "#news"],
    ["Careers", "mailto:contact@reddoors.studio"],
    ["Contact", "#contact"],
  ];
  const socials = ["YouTube", "Instagram", "Discord", "X", "LinkedIn"];
  const image = useMemo(() => [heroBg, sinirBg, echoBg][new Date().getDate() % 3], []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-black px-5 py-12 md:px-10">
      <div className="absolute inset-0 scanlines opacity-15" />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div data-reveal>
            <h2 className="mb-4 text-5xl font-black uppercase leading-none md:text-8xl">
              Red Doors
            </h2>
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              Atmospheric games. Dark stories. Worlds behind closed doors.
            </p>
          </div>

          <div data-reveal data-reveal-delay="0.12" className="relative min-h-[320px] overflow-hidden border border-white/10">
            <div className={`footer-image-panel absolute inset-0 ${newsletterExpanded ? "is-hidden" : ""}`}>
              <img src={image} alt="" className="h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-black/35" />
            </div>
            <form
              className={`footer-form-panel absolute inset-0 grid content-center gap-4 bg-black/90 p-6 ${
                newsletterExpanded ? "is-open" : ""
              }`}
            >
              <input
                type="text"
                placeholder="First name"
                className="min-h-12 border border-white/10 bg-black px-4 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-600 focus:border-red-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="min-h-12 border border-white/10 bg-black px-4 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-600 focus:border-red-700"
              />
              <button
                data-glitch
                type="button"
                className="glitch-link min-h-12 border border-red-700 bg-red-700 px-5 text-xs font-black uppercase tracking-[0.28em] text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_0.5fr_0.5fr]">
          <div data-reveal>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-red-600">
              The kind of email that knocks after midnight.
            </p>
            <button
              data-glitch
              type="button"
              onClick={() => setNewsletterExpanded((value) => !value)}
              aria-expanded={newsletterExpanded}
              className="glitch-link border-b border-red-700 pb-2 text-xs font-black uppercase tracking-[0.3em] text-white"
            >
              {newsletterExpanded ? "Close" : "Subscribe"}
            </button>
          </div>

          <div data-reveal data-reveal-delay="0.08">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-red-600">
              Studio
            </p>
            <div className="grid gap-3 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
              {links.map(([label, href]) => (
                <a data-glitch key={label} href={href} className="glitch-link hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.16">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-red-600">
              Follow
            </p>
            <div className="grid gap-3 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
              {socials.map((link) => (
                <a data-glitch key={link} href="#contact" className="glitch-link hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-[0.22em] text-zinc-700 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Red Doors Studio. All rights reserved.</p>
          <p>Privacy Policy | Terms</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
