// NAVBAR

var scrollTop;


function toggleNav() {

    body.classList.toggle("no-scroll")
    navBar.classList.toggle("active");
    navLinks.forEach((link) => link.classList.toggle("enter"))
    
}


header.addEventListener("mouseenter", () => {header.classList.remove("hidden")})

let tl = gsap.timeline({defaults: {duration: 1, ease: Power3.easeOut}})

tl.from("#alef-1", { x: "500%" , y: "-500%", delay: 1})
tl.from("#alef-2", { x: "-500%" , y: "500%"}, '<')
tl.to(".alef", {opacity: 1}, '<')

window.onload = function() {
    tl.to("#loading", {opacity: 0, delay: 0.7, duration: 0.5})
    tl.to("#loading", {display: "none", duration: 0.001})
};


//FAVICON THEME

// select the favicon 👉
const faviconEl = document.querySelector('link[rel="icon"]')











