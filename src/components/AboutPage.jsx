import Navbar from "./Navbar";
import Footer from "./Footer";
import Manifesto from "./Manifesto";
import SectionReveal from "./SectionReveal";
import heroBg from "../assets/images/hero-bg.png";
import { useRouter } from "../core/RouterContext";

function AboutPage() {
  const { navigate } = useRouter();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-700 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-end justify-center overflow-hidden bg-black pb-16 pt-28">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.85)_70%,#000)]" />
        <div className="absolute inset-0 scanlines opacity-25" />
        
        <div className="relative z-10 text-center">
          <p data-reveal data-reveal-style="type" className="mb-4 text-xs font-black uppercase tracking-[0.45em] text-red-600">
            Hakkımızda
          </p>
          <h1 data-reveal data-reveal-style="row" className="text-5xl font-black uppercase tracking-wider md:text-8xl">
            Biz Kimiz?
          </h1>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          
          <div data-reveal data-reveal-style="row" className="space-y-6 text-zinc-400">
            <h2 className="font-mono text-xs font-black uppercase tracking-widest text-red-600">
              [ STÜDYO BİLGİSİ ]
            </h2>
            <p className="font-mono text-sm leading-relaxed text-zinc-300">
              Red Doors Studio, 2026 yılında kurulan, oyuncuların zihinlerindeki en derin korkuları harekete geçirmeyi hedefleyen bağımsız bir oyun geliştirme stüdyosudur.
            </p>
            <p className="font-mono text-sm leading-relaxed text-zinc-300">
              Korku türünü sadece anlık irkilmelerden (jumpscare) ibaret görmüyor; atmosferik gerilim, ses basıncı ve derin psikolojik temalarla oyuncunun kanını donduracak hikayeler inşa ediyoruz.
            </p>
          </div>

          <div data-reveal data-reveal-style="row" className="space-y-6 text-zinc-400">
            <h2 className="font-mono text-xs font-black uppercase tracking-widest text-red-600">
              [ TASARIM FELSEFEMİZ ]
            </h2>
            <p className="font-mono text-sm leading-relaxed text-zinc-300">
              Bizim için her kapı, arkasında bilinmeyeni, tehlikeyi ve yüzleşmeyi saklar. Oyuncuyu çaresizlik hissiyle baş başa bırakarak, hayatta kalmak için karanlığı okumaya zorlarız.
            </p>
            <p className="font-mono text-sm leading-relaxed text-zinc-300">
              Görsel kaliteden ödün vermeden, mobil ve diğer platformlarda üstün performanslı ve yüksek kaliteli korku oyunları tasarlıyoruz.
            </p>
          </div>

        </div>
      </section>

      {/* Manifesto Integration */}
      <section className="bg-zinc-950 py-16 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 noise-flicker opacity-[0.02]" />
        <div className="mx-auto max-w-[1200px] px-5 md:px-10" data-reveal data-reveal-style="row">
          <Manifesto />
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <p className="mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Bizimle yürümeye hazır mısınız?
        </p>
        <button
          data-glitch
          onClick={() => navigate("/")}
          className="glitch-link font-mono text-xs font-black uppercase tracking-[0.3em] border border-red-700 px-8 py-4 hover:bg-red-700 transition duration-300"
        >
          [ Ana Sayfaya Dön ]
        </button>
      </section>

      <Footer />
    </main>
  );
}

export default AboutPage;
