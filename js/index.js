const tandemCards = document.querySelectorAll(".product-card");
let mobile = window.matchMedia("(max-width: 850px)");

if(mobile.matches) {

    tandemCards.forEach((card) =>{
        card.addEventListener("click", ()=>{
            window.location.href = card.getAttribute("link");
        })
    })

}


const arrow = document.querySelector("#arrow-container");
const discoverTandems = document.querySelector("#discover-tandems");
const landing = document.querySelector('#landing');
const products = document.querySelector('#products');

arrow.addEventListener("click", ()=>{scroll.scrollTo(landing)});
discoverTandems.addEventListener("click", ()=>{scroll.scrollTo(products)});