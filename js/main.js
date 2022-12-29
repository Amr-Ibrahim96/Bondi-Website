let buttons = document.querySelectorAll(".our-work .buttons .btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("main-btn");
      //   b.setAttribute("data-checked", "false");
    });
    btn.classList.add("main-btn");
    // btn.setAttribute("data-checked", "true");
  });
});
