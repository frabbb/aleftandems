//import LocomotiveScroll from 'locomotive-scroll';

const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const burger = document.querySelector("#burger");
const navBar = document.querySelector("#nav-link-container");
const navLinks = document.querySelectorAll(".nav-link a");
const navButton = document.querySelector("#nav-link-container button")
const body = document.querySelector("body");
const hero = document.querySelector("#hero")

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getSpeed: true,
    getDirection: true,
});

scroll.on("call", (value, way) => {

    if(value == "changeNav") {
        if (way === "enter") {
            header.classList.add("white");
            logo.classList.add("black");
            burger.classList.add("black");
            navLinks.forEach((link) => link.classList.remove("white"));
            navLinks.forEach((link) => link.classList.add("black"));
            navButton.classList.remove("btn-white");
            navButton.classList.add("btn-black");
        } else {
            header.classList.remove("white");    
            logo.classList.remove("black");
            burger.classList.remove("black");
            navLinks.forEach((link) => link.classList.add("white"));
            navLinks.forEach((link) => link.classList.remove("black"));
            navButton.classList.remove("btn-black");
            navButton.classList.add("btn-white"); 
        }
    }
});



scroll.on("scroll", (getSpeed) => {

    if(getSpeed.speed >= 1) {header.classList.add("hidden")}
    else if(getSpeed.speed <= -1) {header.classList.remove("hidden")}

})
