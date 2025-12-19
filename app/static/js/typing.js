document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const roles = [
    "Full-Stack Developer",
    "Gamer",
    "YouTuber",
    "Anime Lover",
    "Video Editor"
  ];

  let r = 0;
  let c = 0;
  let del = false;

  function loop() {
    const word = roles[r];

    if (!del) {
      el.textContent = word.slice(0, ++c);
      if (c === word.length) {
        setTimeout(() => del = true, 1200);
      }
    } else {
      el.textContent = word.slice(0, --c);
      if (c === 0) {
        del = false;
        r = (r + 1) % roles.length;
      }
    }

    setTimeout(loop, del ? 50 : 90);
  }

  loop();
});
