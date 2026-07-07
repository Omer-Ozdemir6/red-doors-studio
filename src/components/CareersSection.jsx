import SectionReveal from "./SectionReveal";
import echoBg from "../assets/images/project-echo-bg.png";

function CareersSection() {
  return (
    <section
      id="careers"
      data-scroll
      data-scroll-call="careers"
      data-scroll-repeat="true"
      data-scroll-progress
      className="progress-section relative overflow-hidden bg-black px-5 py-24 md:px-10 md:py-32"
    >
      <img
        data-parallax-media
        data-scroll-speed="-1.4"
        data-scroll-target="#careers"
        data-parallax-speed="14"
        src={echoBg}
        alt=""
        className="absolute -inset-y-[14%] h-[128%] w-full object-cover opacity-22"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.64),rgba(0,0,0,0.96))]" />

      <SectionReveal className="relative mx-auto max-w-[1600px]">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
          Careers
        </p>
        <h2 className="mb-8 max-w-5xl text-5xl font-black uppercase leading-none md:text-8xl">
          Looking for new nightmares? Join us.
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          Red Doors Studio atmosfer, hikaye, ses ve oyun hissini aynı masada
          düşünen yaratıcı ekip arkadaşları arıyor.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            data-glitch
            href="mailto:contact@reddoors.studio"
            className="glitch-link border border-red-700 bg-red-700 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.28em] transition hover:bg-red-800"
          >
            Apply Now
          </a>
          <a
            data-glitch
            href="#about"
            className="glitch-link border border-white/20 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.28em] text-zinc-300 transition hover:border-white/50 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

export default CareersSection;
