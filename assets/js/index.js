const btnSideBar = document.querySelector(".header__btn-bar");
const btnSideBarClose = document.querySelector(".close");
const darkMode = document.querySelector(".dark-mode");
const sideBar = document.querySelector(".sidebar");
const layer = document.querySelector(".layer");
const body = document.querySelector("body");

btnSideBar.addEventListener("click", () => {
    let scr = window.innerWidth;
    if (scr <= 768) {
        sideBar.style.display = "flex";
        layer.style.display = "block";
    }
});

layer.addEventListener("click", () => {
    body.style.overflowY = "scroll";
    sideBar.style.display = "none";
    layer.style.display = "none";
});

btnSideBarClose.addEventListener("click", () => {
    body.style.overflowY = "scroll";
    sideBar.style.display = "none";
    layer.style.display = "none";
});

window.addEventListener("resize", () => {
    let display = getComputedStyle(sideBar).display;
    if (window.innerWidth >= 768) {
        sideBar.style.display = "block";
        layer.style.display = "none";
        btnSideBar;
    } else if (window.innerWidth < 768 && display == "block") {
        layer.style.display = "none";
        sideBar.style.display = "none";
    }
});

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");
    darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
    darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});
