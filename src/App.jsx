import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GamesSection from "./components/GamesSection";
import LoreSection from "./components/LoreSection";
import CareersSection from "./components/CareersSection";
import NewsSection from "./components/NewsSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AnimationProvider from "./animation/AnimationProvider";
import BootIntro from "./components/BootIntro";

function App() {
  const [entered, setEntered] = useState(() => localStorage.getItem("ageGate") === "1");
  const [booting, setBooting] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const enterSite = () => {
    localStorage.setItem("ageGate", "1");
    setEntered(true);
    setBooting(true);
  };

  if (!entered) {
    return (
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,0,0,0.34),transparent_38%),linear-gradient(115deg,rgba(255,255,255,0.08),transparent_28%,rgba(90,0,0,0.18)_72%)]" />
        <div className="absolute inset-0 noise-flicker opacity-35" />
        <section className="relative z-10 grid w-full max-w-5xl gap-10 text-center">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.45em] text-red-600">
              Content Warning
            </p>
            <h1 className="mb-8 text-6xl font-black uppercase leading-[0.82] md:text-9xl">
              Red Doors
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-2xl font-black uppercase leading-tight md:text-4xl">
              Are you 17 or older?
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              data-glitch
              type="button"
              onClick={enterSite}
              className="glitch-link min-h-14 w-full border border-red-700 bg-red-700 px-8 text-xs font-black uppercase tracking-[0.32em] text-white transition hover:bg-red-800 sm:w-1/2"
            >
              Enter
            </button>
            <button
              data-glitch
              type="button"
              className="glitch-link min-h-14 w-full border border-white/15 px-8 text-xs font-black uppercase tracking-[0.32em] text-zinc-400 transition hover:border-white/40 hover:text-white sm:w-1/2"
            >
              Exit
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col gap-3 border-t border-white/10 pt-8 text-xs font-black uppercase tracking-[0.24em] text-zinc-500 sm:flex-row sm:items-center sm:justify-center">
            <button
              data-glitch
              type="button"
              onClick={() => setSoundEnabled(true)}
              className={`glitch-link transition hover:text-white ${soundEnabled ? "text-white" : ""}`}
            >
              [ On ] Launch with sound
            </button>
            <button
              data-glitch
              type="button"
              onClick={() => setSoundEnabled(false)}
              className={`glitch-link transition hover:text-white ${!soundEnabled ? "text-white" : ""}`}
            >
              [ Off ] Launch with sound
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-700 selection:text-white">
      {booting && <BootIntro onComplete={() => setBooting(false)} />}
      <AnimationProvider>
        <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
        <Hero />
        <About />
        <GamesSection />
        <LoreSection />
        <CareersSection />
        <NewsSection />
        <Newsletter />
        <Footer />
      </AnimationProvider>
    </main>
  );
}

export default App;
