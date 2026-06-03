let button = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

button.addEventListener('click',(e) => {
  menu.classList.toggle("show");
})

