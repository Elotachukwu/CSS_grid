var menu = document.getElementsByClassName("accordion");
var i;

for (i = 0;i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var navDiv = this.nextElementSibling;
    if (navDiv.style.display === "block") {
      navDiv.style.display = "none";
    } else {
      navDiv.style.display = "block";
    }
  });
}

// const menus = document.getElementsByClassName("accordion");

// menus.forEach(menu => {
//   menu.addEventListener(click, event => {
//     menu.classList.toggle("active")
//   });
// });