import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionReveal from "./SectionReveal";
import heroBg from "../assets/images/hero-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const archiveFiles = [
  {
    code: "DOC-01",
    title: "Sinyala Crossing Incident",
    date: "OCT 12, 1959",
    summary: "Decrypted transcript from the radio station at the border checkpoint.",
  },
  {
    code: "DOC-02",
    title: "Project Echo Signal Analysis",
    date: "APR 18, 1964",
    summary: "Spectral anomaly report detailing non-human speech patterns in the loop.",
  },
  {
    code: "DOC-03",
    title: "Reagent Intake Interview #408",
    date: "AUG 30, 1972",
    summary: "Psychological profiling of subject showing extreme aversion to red doors.",
  },
  {
    code: "DOC-04",
    title: "Station Echo Logbook",
    date: "JAN 05, 1981",
    summary: "Final handwritten log entries before the signal research lab was abandoned.",
  },
];

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
        className="absolute -inset-y-[12%] h-[124%] w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.78)_58%,rgba(0,0,0,0.95))]" />
      <div className="absolute inset-0 scanlines opacity-25" />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
        {/* Left Side Info */}
        <SectionReveal style="row" className="flex flex-col justify-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
              Lore Files
            </p>
            <h2 className="mb-8 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              The Door Archives
            </h2>
          </div>

          <div className="space-y-6 text-sm font-medium leading-relaxed text-zinc-400">
            <p>
              Red Doors evrenindeki gizli dosyalar, sinir kayıtları, kayıp sinyaller ve
              laboratuvar notları oyunların dışındaki karanlık hikayeyi genişletiyor.
            </p>
            <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
              [CLASSIFIED INFORMATION - SECURITY CLEARANCE REQ]
            </p>
          </div>
        </SectionReveal>

        {/* Right Side Swiper Slider */}
        <div className="w-full overflow-hidden" data-reveal data-reveal-style="row">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 25 },
            }}
            className="lore-swiper w-full !overflow-visible"
          >
            {archiveFiles.map((file) => (
              <SwiperSlide key={file.code}>
                <article className="group relative flex flex-col justify-between aspect-[3/4] border border-white/10 bg-zinc-950/70 p-6 md:p-8 backdrop-blur transition duration-300 hover:border-red-800 hover:bg-black/80">
                  <div className="absolute inset-0 noise-flicker opacity-[0.03] pointer-events-none" />
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-red-600 font-black tracking-widest">{file.code}</span>
                    <span className="text-zinc-600">{file.date}</span>
                  </div>

                  {/* Card Content */}
                  <div className="my-8">
                    <h3 className="mb-4 font-mono text-xl font-black uppercase tracking-wider text-white transition group-hover:text-red-500">
                      {file.title}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed text-zinc-500">
                      {file.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-white/5 pt-4">
                    <a
                      data-glitch
                      href="#contact"
                      className="glitch-link font-mono text-[10px] font-black uppercase tracking-[0.25em] text-red-600 transition group-hover:text-white"
                    >
                      [ OPEN DECLASSIFIED FILE ]
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LoreSection;
