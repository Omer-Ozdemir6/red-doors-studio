import SectionReveal from "./SectionReveal";

function About() {
  return (
    <section
      id="about"
      data-scroll
      data-scroll-call="about"
      data-scroll-repeat="false"
      className="relative grid min-h-[72vh] items-center overflow-hidden bg-black px-5 py-24 md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1),rgba(0,0,0,0.88)_46%,rgba(0,0,0,1))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-red-700/50" />

      <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 md:grid-cols-[0.32fr_0.68fr] md:items-center">
        <SectionReveal>
          <p className="inline-flex items-center gap-3 font-mono text-sm font-black text-white md:text-base">
            <span className="text-red-600">[</span>
            About Red Doors
            <span className="text-red-600">]</span>
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15} className="md:justify-self-center">
          <p className="about-terminal-copy max-w-[760px] text-center font-mono text-base font-black leading-[1.2] text-white md:text-lg xl:text-xl">
            <span className="about-highlight" data-underline-fill>Red Doors</span> is an independent studio
            building cinematic horror experiences. Our mission is to create
            unforgettable worlds that leave the player&apos;s{" "}
            <span className="about-highlight" data-underline-fill>blood running cold.</span>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

export default About;
