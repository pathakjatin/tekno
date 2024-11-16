document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-hero-media").forEach((e) => {
    const t = e.querySelector("iframe#hero-video-iframe");
    if (!t) return;
    const a = new Vimeo.Player(t);
    t.addEventListener("load", () => {
      a.on("play", () => {
        e.setAttribute("data-video-action", "pause");
      }),
        a.on("pause", () => {
          e.setAttribute("data-video-action", "play");
        });
    });
    const o = e.querySelector(".js-hero-toggle");
    o?.addEventListener("click", () => {
      a.getPaused()
        .then((t) => {
          t
            ? (a.play(), e.setAttribute("data-video-action", "pause"))
            : (a.pause(), e.setAttribute("data-video-action", "play"));
        })
        .catch((e) => {
          console.error("Error checking play/pause state:", e);
        });
    });
  });
});
//# sourceMappingURL=https://assets.astrolighting.com/static/maps/js/hero-video.js.2f716.map
