// Data object array
var data = [
    {
        id: 0,
        title: "Glass door",
        price: "99.00",
        image: "https://www.ikea.com/us/en/images/products/bodbyn-glass-door-gray__0645427_PE703527_S5.JPG?f=xxs",
    },
    {
        id: 1,
        title: "Drawer front",
        price: "$34.00",
        image: "https://www.ikea.com/us/en/images/products/bodbyn-drawer-front-gray__0633915_PE696176_S5.JPG?f=xxs",
    },
    {
        id: 2,
        title: "Cup cabinet pull",
        price: "$9.00",
        image: "https://www.ikea.com/us/en/images/products/eneryda-cup-cabinet-pull-black__0754245_PE747837_S5.JPG?f=xxs",
    },
    {
        id: 3,
        title: "Knob",
        price: "$5.00",
        image: "https://www.ikea.com/us/en/images/products/svenbertil-chair-black-broringe-black__0729778_PE737142_S5.JPG?f=xxs",
    },
    {
        id: 4,
        title: "Pendant lamp",
        price: "$17.99",
        image: "https://www.ikea.com/us/en/images/products/skurup-pendant-lamp-black__0604110_PE681110_S5.JPG?f=xxs",
    },
    {
        id: 5,
        title: "Countertop",
        price: "$69.00",
        image: "https://www.ikea.com/us/en/images/products/saeljan-countertop-black-mineral-effect-laminate__0315377_PE514227_S5.JPG?f=xxs",
    },
    {
        id: 6,
        title: "Glass",
        price: "$1.49",
        image: "https://www.ikea.com/us/en/images/products/ivrig-glass-clear-glass__0713244_PE729354_S5.JPG?f=xxs",
    },
    {
        id: 7,
        title: "Carafe",
        price: "$12.99",
        image: "https://www.ikea.com/us/en/images/products/storsint-carafe-clear-glass__0641485_PE700471_S5.JPG?f=xs",
    },
    {
        id: 8,
        title: "Glass dome with base",
        price: "$12.99",
        image: "https://www.ikea.com/us/en/images/products/haerliga-glass-dome-with-base-clear-glass__0639833_PE699598_S5.JPG?f=xxs",
    }
];


var domImages = document.querySelectorAll(".grid-container__column__img");
var domTitle = document.querySelectorAll(".grid-container__column__title");
var domPrice = document.querySelectorAll(".grid-container__column__price");
var domText = document.querySelectorAll(".grid-container__column__subTitle");



// Loops through all of data then sets values to dom
for (var i = 0; i < data.length; i++) {
    domImages[i].src = data[i].image;
    domTitle[i].innerHTML = data[i].title;
    domPrice[i].innerHTML = data[i].price
    // domText[i].innerHTML = data[i].text;
}



var responsiveToggle = document.querySelector("#main-nav__responsive__toggle");
var responsiveNav = document.querySelector("#responsive-nav");
var arrow = document.querySelector("#down-arrow-wrapper")
var body = document.querySelector("body");


if (responsiveToggle) {
    responsiveToggle.addEventListener("click", function() {
        if (responsiveNav.style.display === "none") {
            console.log("Display");
            if (arrow) {
                arrow.style.display = "none";
            }
            responsiveNav.style.display = "block";
            body.style.overflow = "hidden"
        } else {
            console.log("Hide");
            if (arrow) {
                arrow.style.display = "block";
            }
            responsiveNav.style.display = "none";
            body.style.overflow = "scroll";
        }
        
    });
}
