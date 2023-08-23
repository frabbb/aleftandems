let tandem = {};

let user = {
    height1: null,
    height2: null,
    name: "",
    surname: "",
    email: "",
    phoneNumber: ""
}

let q = 1;
let quantity = document.querySelectorAll(".quantity");
let plusMinus = document.querySelectorAll(".plus-minus");

let phoneNumber = document.querySelector(".phoneNumber");

let heights = document.querySelectorAll(".height");
let measurements = document.querySelector(".measurements");
let measurementsString = heights[0].value + " cm, " + heights[1].value + " cm";

let inputFields = document.querySelectorAll("input")

let dropdowns = document.querySelectorAll(".dropdown");
let optionsContainers = document.querySelectorAll(".options-container");

let orderConfirmation = document.querySelector("#order-confirmation");
let confirmationTl = gsap.timeline();

const serviceID = "service_20ycbvl";
const templateID = "template_qsalkwn"


if(localStorage.getItem("tandem")) {tandem = JSON.parse(localStorage.getItem("tandem"));}
if(localStorage.getItem("user")) {user = JSON.parse(localStorage.getItem("user"));}



function updateDomValues() {

    localStorage.setItem("tandem", JSON.stringify(tandem))
    localStorage.setItem("user", JSON.stringify(user))

    for(prop in tandem) {
        
        if(prop !== "") {

            let elList = document.querySelectorAll("." + prop)

            elList.forEach((el) => {
                if(el) {
                    el.innerHTML = tandem[prop]
                }
            })

            let optionsContainer = document.querySelector('[type="'+ prop + '"]')

            if(optionsContainer) {

                let options = optionsContainer.children;

                for(i = 0; i < options.length; i++){
                    if(options[i].innerHTML.toLocaleLowerCase() == tandem[prop].toLocaleLowerCase()) {

                        optionsContainer.insertBefore(options[i], optionsContainer.firstChild);
                       
                    }
                }

            }
            
        }

    }

    for(prop in user) {
        
        if(prop !== "") {

            let elList = document.querySelectorAll("." + prop)

            elList.forEach((el) => {
                
                if(el) {
                    el.value = user[prop]
                }
            })
            
        }

    }

    measurementsString = heights[0].value + " cm, " + heights[1].value + " cm";
    measurements.innerHTML = measurementsString;

    console.log(tandem)
    console.log(user)

}

dropdowns.forEach((dropdown) => {

    dropdown.addEventListener("click", () =>{

        let optionsContainer = dropdown.parentElement.querySelector(".options-container");

        optionsContainer.classList.toggle("active");

        dropdown.querySelector("img").classList.toggle("rotated");

        let options = optionsContainer.querySelectorAll("p")

        options.forEach((opt) => {

            opt.addEventListener ("click", () => {
                
                let prop = opt.getAttribute("type")

                tandem[prop] = opt.innerHTML;

                updateDomValues()

            })

        })


        dropdowns.forEach((el) => {if(el !== dropdown){
            el.parentElement.querySelector(".options-container").classList.remove("active");
            el.querySelector("img").classList.remove("rotated")
        }})

    })

})

plusMinus.forEach((btn) =>{
    btn.addEventListener("click", ()=>{

        if(btn == plusMinus[0]) { q-- }
        else {q++}

        if(q >= 9) {q = 9; btn.classList.add("inactive")}
        else if(q <= 1) {q = 1; btn.classList.add("inactive")}
        else {plusMinus.forEach((pm)=>{pm. classList.remove("inactive")})}

        quantity.forEach((el)=> {el.innerHTML = q});
        tandem.quantity = q;

    })
})

phoneNumber.addEventListener("input", ()=>{

    let number = phoneNumber.value;

    if(number.charAt(0) !== "+"){
        phoneNumber.value = "+39" + number
    }

})

heights.forEach((height) => {
    height.addEventListener("input", () => {
        if(heights[0].value.length == 3 && heights[1].value.length == 3 && heights[0].checkValidity() && heights[1].checkValidity()){
            user.height1 = heights[0].value;
            user.height2 = heights[1].value;
            updateDomValues()
        } else {measurements.innerHTML = ""}
    })
})


inputFields.forEach((field) =>{

    field.addEventListener("input", () =>{

        if(field.checkValidity()) {

        field.parentElement.classList.remove("invalid");

        }
    
    })

    field.addEventListener("blur", () => {

        if(field.checkValidity()) {
            
            let propertyName = field.classList[0];
            let propertyValue = field.value;
            user[propertyName] = propertyValue;
    
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            field.parentElement.classList.add("invalid")
        }

    })
})  

function sendEmail() {

    let form = document.querySelector("form")

    if (form.checkValidity()) {

        let order = {}

        Object.assign(order, tandem)
        Object.assign(order, user)

        console.log(order)

        //emailjs.send(serviceID, templateID, order);

        openOrderConfirmation()

    } else {

        inputFields.forEach((field) => {
            if(field.checkValidity()) {
                field.parentElement.classList.remove("invalid")
            } else {
                field.parentElement.classList.add("invalid")
            }
        })

    } 
    
}

function openOrderConfirmation() {

    
    scroll.stop();
    body.classList.add("no-scroll")

    confirmationTl.restart()

    confirmationTl
    .to("#order-confirmation", { display: "block" })
    .to("#order-confirmation", { opacity: 1, duration: 0.3 })
    .to("#popup", { scale: 0.9, duration: 0.3, ease: "back.out(2)" }, "<")
    .add(function() {orderConfirmation.classList.add("active");}, "<")

    inputFields.forEach((field) => {field.value = ""})

}

function closeOrderConfirmation() {
    confirmationTl.reverse()
    scroll.start()
    body.classList.remove("no-scroll")
}

updateDomValues()
    