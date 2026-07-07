class VideoManager {
  constructor() {
    this.items = [];
    this.observer = null;
    this._onResize = this._onResize.bind(this);
  }

  init() {
    const videos = [...document.querySelectorAll("video[data-video]")];
    if (!videos.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const item = this.items.find(({ video }) => video === entry.target);
          if (!item) return;
          if (entry.isIntersecting) this._play(item.video);
          else this._pause(item.video, item.rewindOnExit);
        });
      },
      { threshold: 0.2 },
    );

    this.items = videos.map((video) => {
      const item = {
        video,
        rewindOnExit: video.dataset.videoRewind !== "false",
      };
      this._applySource(video);
      this.observer.observe(video);
      return item;
    });

    window.addEventListener("resize", this._onResize);
  }

  destroy() {
    window.removeEventListener("resize", this._onResize);
    this.items.forEach(({ video }) => {
      this.observer?.unobserve(video);
      this._pause(video, false);
    });
    this.observer?.disconnect();
    this.items = [];
    this.observer = null;
  }

  _onResize() {
    this.items.forEach(({ video }) => this._applySource(video));
  }

  _applySource(video) {
    const current = video.currentSrc || video.src;
    const next = this._getSource(video);
    if (!next || current.endsWith(next)) return;

    const wasPlaying = !video.paused;
    video.src = next;
    video.load();
    if (wasPlaying) this._play(video);
  }

  _getSource(video) {
    const width = window.innerWidth;
    if (width < 768 && video.dataset.srcMobile) return video.dataset.srcMobile;
    if (width < 1200 && video.dataset.srcTablet) return video.dataset.srcTablet;
    return video.dataset.src || video.getAttribute("src");
  }

  _play(video) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play?.().catch(() => {});
  }

  _pause(video, rewind) {
    video.pause?.();
    if (rewind) video.currentTime = 0;
  }
}

export default VideoManager;
