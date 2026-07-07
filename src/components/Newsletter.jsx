function Newsletter() {
  return (
    <section
      data-scroll
      data-scroll-call="newsletter"
      data-scroll-repeat="true"
      data-scroll-progress
      className="progress-section relative overflow-hidden border-y border-white/10 bg-[#080303] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(145,0,0,0.28),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
        <div data-reveal>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
            Stay Connected
          </p>
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-none md:text-8xl">
            The signal knocks first.
          </h2>
        </div>

        <form data-reveal data-reveal-delay="0.14" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="min-h-14 border border-white/10 bg-black/60 px-5 text-sm uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-600 focus:border-red-700"
            />
            <input
              type="text"
              placeholder="Last name"
              className="min-h-14 border border-white/10 bg-black/60 px-5 text-sm uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-600 focus:border-red-700"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="min-h-14 w-full border border-white/10 bg-black/60 px-5 text-sm uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-600 focus:border-red-700"
          />
          <button
            data-glitch
            type="button"
            className="glitch-link min-h-14 w-full border border-red-700 bg-red-700 px-8 text-xs font-black uppercase tracking-[0.3em] text-white transition hover:bg-red-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
