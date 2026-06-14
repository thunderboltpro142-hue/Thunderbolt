// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
      var open = links.classList.contains("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
});
