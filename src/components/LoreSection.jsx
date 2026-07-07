import SectionReveal from "./SectionReveal";
import heroBg from "../assets/images/hero-bg.png";

function LoreSection() {
  return (
    <section
      id="lore"
      data-scroll
      data-scroll-call="lore"
      data-scroll-repeat="false"
      data-scroll-progress
      className="progress-section relative overflow-hidden bg-[#060606] px-5 py-24 md:px-10 md:py-32"
    >
      <img
        data-parallax-media
        data-scroll-speed="-1.2"
        data-scroll-target="#lore"
        data-parallax-speed="12"
        src={heroBg}
        alt=""
        className="absolute -inset-y-[12%] h-[124%] w-full object-cover opacity-24"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.78)_58%,rgba(0,0,0,0.95))]" />
      <div className="absolute inset-0 scanlines opacity-25" />

      <SectionReveal
        style="row"
        className="relative mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[0.35fr_0.65fr] md:items-start"
      >
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
            Lore Files
          </p>
          <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
            The Door Archives
          </h2>
        </div>

        <div className="max-w-4xl space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            Red Doors evrenindeki dosyalar, sinir kayitlari, kayip sinyaller ve
            laboratuvar notlari oyunlarin disinda da hikayeyi buyutur.
          </p>
          <p>
            Her proje kendi arsivini acar: bazi kapilar taniklik ister,
            bazilari sadece dinlenmek ister.
          </p>
          <a
            data-glitch
            href="#news"
            className="glitch-link inline-flex border border-red-700 px-6 py-4 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:bg-red-700"
          >
            Read Now
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

export default LoreSection;
