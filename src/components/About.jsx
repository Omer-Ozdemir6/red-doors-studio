import SectionReveal from "./SectionReveal";

function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-32"
    >
      <SectionReveal>
        <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-red-600">
          About Red Doors
        </p>

        <h2 className="text-5xl font-black uppercase leading-none md:text-8xl xl:text-9xl">
          Blood-Cold Stories
        </h2>
      </SectionReveal>

      <SectionReveal
        delay={0.15}
        className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-400"
      >
        <p>
          Red Doors Studio, atmosferik hikaye anlatımı, psikolojik gerilim ve
          sinematik oyun deneyimleri üzerine çalışan bağımsız bir oyun
          stüdyosudur.
        </p>

        <p>
          Her kapının arkasında hatırlanacak bir dünya, çözülmemiş bir sır ve
          oyuncunun zihninde kalacak bir yüzleşme bırakmak istiyoruz.
        </p>

        <div className="grid gap-4 pt-6 sm:grid-cols-3">
          {[
            "Cinematic horror",
            "Psychological tension",
            "World-first storytelling",
          ].map((item) => (
            <div
              key={item}
              data-scroll-progress
              className="progress-line border-t border-white/15 pt-4 text-xs font-black uppercase tracking-[0.22em] text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default About;
