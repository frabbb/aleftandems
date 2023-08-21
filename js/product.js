let colors = Array.from(document.querySelectorAll(".color"));
let selectedColor = document.querySelector("#selected-color");
const personalizeColor = document.querySelector("#personalize-color");

let componentSets = Array.from(document.querySelectorAll(".component-set"));
let selectedComponets = document.querySelector("#selected-components");

let price = document.querySelector("#price");

let tandem = {
    model: document.querySelector("#model").innerHTML, 
    primaryColor: selectedColor.classList[1].charAt(0).toUpperCase() + selectedColor.classList[1].slice(1), 
    secondaryColor: "", 
    stickers: "", 
    componentSet: selectedComponets.querySelector("p").innerHTML,
    price: price.innerHTML,
    quantity: 1,
};

let componentPrices = [
    {name: "Ultegra Di2", price: 6600}, 
    {name: "Ultegra meccanico", price: 6450}, 
    {name: "105 Di2", price: 6500}, 
    {name: "105 meccanico", price: 6000}
];


//remove the personalize color option from the color array
colors.pop()

colors.forEach(( el ) =>{

    el.addEventListener("click", () => {
        selectedColor.id = "";
        selectedColor = el;
        el.id = "selected-color"
        tandem.primaryColor = selectedColor.classList[1].charAt(0).toUpperCase()+ selectedColor.classList[1].slice(1)
        console.log(tandem)
    })

})

componentSets.forEach(( el ) =>{

    el.addEventListener("click", () => {
        selectedComponets.id = "";
        selectedComponets = el;
        el.id = "selected-components"
        tandem.componentSet = el.querySelector("p").innerHTML;

        let model = componentPrices.find(o => o.name === tandem.componentSet);

        price.innerHTML = "€ " + model.price

        tandem.price = model.price

        console.log(tandem)
    })

})

function selectTandem() {

    localStorage.setItem("tandem", JSON.stringify(tandem))

    window.location.href = "./order.html"
}


let tandemImages = Array.from(document.querySelectorAll(".img-container"));
let imagesContainerDesktop = document.querySelectorAll(".product-images")[0];
let imagesContainerMobile = document.querySelectorAll(".product-images")[1];
let mobile = window.matchMedia("(max-width: 850px)");

mobileChanges()

window.addEventListener("resize", mobileChanges)

function mobileChanges() {

    if(mobile.matches) {

        for(let i = 1; i < tandemImages.length; i++){

            imagesContainerMobile.appendChild(tandemImages[i])

        }

    } else {

        for(let i = 1; i < tandemImages.length; i++){

            imagesContainerDesktop.appendChild(tandemImages[i])

        }
    }

}




