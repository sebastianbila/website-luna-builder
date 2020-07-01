function openNav() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

window.onscroll = function() {fixMenu()};

var header = document.getElementById("header");
var fixed = header.offsetTop;

function fixMenu() {
  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}