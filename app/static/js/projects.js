const modal = document.getElementById("projectModal");
const closeBtn = document.getElementById("closeModal");

const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const tech = document.getElementById("modalTech");
const role = document.getElementById("modalRole");
const time = document.getElementById("modalTime");

const data = {
  portfolio: {
    title: "Portfolio Website",
    desc: "A game-inspired personal portfolio with clean UI, smooth navigation, and modular structure.",
    tech: "HTML, CSS, JavaScript",
    role: "Solo Project",
    time: "2 Weeks"
  },
  backend: {
    title: "Backend API",
    desc: "FastAPI backend with REST endpoints and authentication.",
    tech: "Python, FastAPI",
    role: "Solo Project",
    time: "1 Week"
  }
};

document.querySelectorAll(".rdr2-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    if (!data[key]) return;

    title.textContent = data[key].title;
    desc.textContent = data[key].desc;
    tech.textContent = data[key].tech;
    role.textContent = data[key].role;
    time.textContent = data[key].time;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.onclick = closeModal;
window.addEventListener("keydown", e => e.key === "Escape" && closeModal());

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
