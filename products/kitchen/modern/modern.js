// Data object array
var data = [
    {
        id: 0,
        title: "Door",
        price: "34.00",
        image: "https://www.ikea.com/us/en/images/products/askersund-door-light-ash-effect__0633644_PE695955_S5.JPG?f=xxs",
        text: "Sleek black cabinets and dark wood tones make this kitchen warm and cozy all throughout the year. Open shelving, exposed beams and glass front cabinets add a layer of openness in this smaller space kitchen."
    },
    {
        id: 1,
        title: "Door",
        price: "$20.00",
        image: "https://www.ikea.com/us/en/images/products/veddinge-door-white__0638064_PE698678_S5.JPG?f=xxs",
        text: "Embodies a sense of renewal and growth, so it's only fitting that it would be a top choice for leading designers, especially when it comes to kitchens."
    },
    {
        id: 2,
        title: "Handle",
        price: "$7.00",
        image: "https://www.ikea.com/us/en/images/products/hackas-handle-anthracite__0754253_PE747844_S5.JPG?f=xxs",
        text: "We all want to shed light on the areas of our homes that matter most. And in spaces where you spend the majority of your time, considering custom details that you're truly passionate about can transform the look—and feel—of the space."
    },
    {
        id: 3,
        title: "Chair",
        price: "$49.00",
        image: "https://www.ikea.com/us/en/images/products/svenbertil-chair-black-broringe-black__0729778_PE737142_S5.JPG?f=xxs",
        text: "This bedroom by interior designed Gail Davis is full of rich texture and pattern yet still remains neutral and calming. If you want to introduce more warmth and texture to your space, consider a wood ceiling."
    },
    {
        id: 4,
        title: "Extendable Table",
        price: "$229.00",
        image: "https://www.ikea.com/us/en/images/products/ekedalen-extendable-table-white__0736965_PE740829_S5.JPG?f=xxs",
        text: "In this peaceful blue master bedroom designed by Cathy Chapman, the gorgeous stone walls bring in an earthy feel. Want to make sure you actually get sweet dreams?"
    },
    {
        id: 5,
        title: "Roasting pan with grill rack",
        price: "$9.99",
        image: "https://www.ikea.com/us/en/images/products/koncis-roasting-pan-with-grill-rack-stainless-steel__0710557_PE727643_S5.JPG?f=xxs",
        text: "A light blue vanity and brass pulls are a pretty surprise against this bathroom's black-and-white, mosaic tile floor. A cactus adds a fun, playful touch."
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
