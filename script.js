var topMenuBtn = document.querySelector(".top-menu-btn");
var topList = document.querySelector(".top-menu-list");
var menuIconShow = document.querySelector(".menu-icon-show");
var menuIconHide = document.querySelector(".menu-icon-hide");

let showMenu = false;
topMenuBtn.addEventListener("click", function () {
  showMenu = !showMenu;
  if (showMenu) {
    menuIconShow.style.display = "none";
    menuIconHide.style.display = "flex";
    setTimeout(() => {
      topList.style.transition = "0.4s";
      topList.classList.add("top-menu-toggle");
    }, 1);
  } else {
    menuIconShow.style.display = "flex";
    menuIconHide.style.display = "none";
    topList.style.transition = "0.4s";
    topList.classList.remove("top-menu-toggle");
  }
  if (showMenuBottom) {
    showMenuBottom = false;
    listIconShow.style.display = "flex";
    listIconHide.style.display = "none";
    bottomMenu.classList.remove("bottom-menu-toggle");
  }
});

var bottomMenuBtn = document.querySelector(".bottom-menu-btn");
var bottomMenu = document.querySelector(".bottom-menu");
var listIconShow = document.querySelector(".list-icon-show");
var listIconHide = document.querySelector(".list-icon-hide");

let showMenuBottom = false;
bottomMenuBtn.addEventListener("click", function () {
  showMenuBottom = !showMenuBottom;
  if (showMenuBottom) {
    bottomMenu.style.transition = "0.4s";
    bottomMenu.classList.add("bottom-menu-toggle");
    listIconShow.style.display = "none";
    listIconHide.style.display = "flex";
  } else {
    // bottomMenu.style.display = "none";
    listIconShow.style.display = "flex";
    listIconHide.style.display = "none";
    bottomMenu.classList.remove("bottom-menu-toggle");
  }
  if (showMenu) {
    showMenu = false;
    menuIconShow.style.display = "flex";
    menuIconHide.style.display = "none";
    topList.style.transition = "0.4s";
    topList.classList.remove("top-menu-toggle");
  }
});

let lastScrollTop = 200;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add("header-hidden");
  } else {
    // Scrolling up
    header.classList.remove("header-hidden");
  }

  lastScrollTop = currentScrollTop;
});

var searchBtn = document.querySelector(".search-btn");
var searchContain = document.querySelector(".search-contain");

let search = false;
searchBtn.addEventListener("click", function () {
  search = !search;
  if (search) {
    searchContain.style.width = "240px";
  } else {
    searchContain.style.width = "45px";
    window.location = "https://www.hay8855.com/?inviteCode=5522381";
  }
});
