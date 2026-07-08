const games = ["Sinir-1", "Project Echo", "Red Doors Archive"];
const studioLinks = ["About", "Careers"];
const supportLinks = ["News", "Support", "Store ->", "Contact"];
const socials = ["FB", "X", "IG", "DC", "IN", "YT"];

const delay = (index) => (index * 0.06).toFixed(2);

function Footer() {
  return (
    <footer
      id="contact"
      data-footer
      data-scroll
      data-scroll-call="site-footer"
      data-scroll-repeat="false"
      className="site-footer relative overflow-hidden bg-black px-5 py-16 text-white md:px-10 md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
      <div className="relative mx-auto grid max-w-[1680px] gap-12 md:min-h-[38vh] md:grid-cols-[0.34fr_0.34fr_0.16fr_0.16fr]">
        <div data-footer-group className="flex flex-col justify-end gap-6">
          <p data-footer-item data-footer-delay="0" className="text-base font-black text-zinc-300">
            The signal is louder in the dark.
          </p>
          <div className="flex items-center gap-5 text-sm font-black text-white">
            {socials.map((item, index) => (
              <a
                data-footer-item
                data-footer-delay={delay(index + 1)}
                data-glitch
                className="glitch-link grid h-9 w-9 place-items-center border border-white/15 text-xs"
                href="#contact"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div data-footer-group>
          <nav className="grid gap-4 text-xl font-black leading-none text-zinc-200">
            {games.map((item, index) => (
              <a
                data-footer-item
                data-footer-delay={delay(index)}
                data-glitch
                href="#games"
                className="glitch-link footer-link"
                key={item}
              >
                {item}
                {index === 0 && <span className="ml-2 align-top text-xs text-red-600">NEW</span>}
              </a>
            ))}
          </nav>
        </div>

        <div data-footer-group>
          <nav className="grid gap-4 text-sm font-black text-zinc-300">
            {studioLinks.map((item, index) => (
              <a
                data-footer-item
                data-footer-delay={delay(index + 2)}
                data-glitch
                href="#about"
                className="glitch-link footer-link"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            data-footer-item
            data-footer-delay="0.42"
            data-glitch
            href="#contact"
            className="glitch-link footer-link mt-32 inline-block font-mono text-sm text-zinc-400"
          >
            Credits
          </a>
        </div>

        <div data-footer-group>
          <nav className="grid gap-4 text-sm font-black text-zinc-300">
            {supportLinks.map((item, index) => (
              <a
                data-footer-item
                data-footer-delay={delay(index + 3)}
                data-glitch
                href="#contact"
                className="glitch-link footer-link"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          <p data-footer-item data-footer-delay="0.48" className="mt-32 font-mono text-sm text-zinc-400">
            [En] Tr
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
