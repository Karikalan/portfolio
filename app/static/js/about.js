document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");
  const views = document.querySelectorAll(".about-view");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      // remove active state
      buttons.forEach(b => b.classList.remove("active"));
      views.forEach(v => v.classList.remove("active"));

      // activate selected
      button.classList.add("active");
      const target = button.dataset.target;
      document.getElementById(target).classList.add("active");
    });
  });
});
