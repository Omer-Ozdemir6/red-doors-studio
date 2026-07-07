import { news } from "../data/news";
import SectionReveal from "./SectionReveal";

function NewsSection() {
  return (
    <section id="news" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionReveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
              Latest News
            </p>
            <h2 className="text-6xl font-black uppercase leading-none md:text-9xl">
              Signals
            </h2>
          </div>
          <a
            data-glitch
            href="#contact"
            className="glitch-link w-fit border-b border-red-700 pb-2 text-xs font-black uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
          >
            See All
          </a>
        </SectionReveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {news.map((item) => (
            <article
              data-reveal
              key={item.id}
              className="group grid gap-6 py-8 transition hover:bg-white/[0.03] md:grid-cols-[0.35fr_1fr_0.2fr] md:px-6"
            >
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                  {item.category}
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">
                  {item.date}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                  {item.title}
                </h3>
                <p className="max-w-3xl leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
              <div className="self-end text-xs font-black uppercase tracking-[0.25em] text-zinc-600 group-hover:text-red-500 md:text-right">
                <span data-glitch className="glitch-link inline-block">Read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
