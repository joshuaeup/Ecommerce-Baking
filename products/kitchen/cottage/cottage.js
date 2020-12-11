// Data object array
var cottage = [
    {
        id: 0,
        title: "Door",
        price: "$225.00",
        image: "https://www.ikea.com/us/en/images/products/lerhyttan-door-black-stained__0635800_PE697388_S5.JPG?f=s",
        text: "Sleek black cabinets and dark wood tones make this kitchen warm and cozy all throughout the year. Open shelving, exposed beams and glass front cabinets add a layer of openness in this smaller space kitchen."
    },
    {
        id: 1,
        title: "Glass Door",
        price: "$125.00",
        image: "https://www.ikea.com/us/en/images/products/lerhyttan-glass-door-black-stained__0638645_PE699067_S5.JPG?f=s",
        text: "Embodies a sense of renewal and growth, so it's only fitting that it would be a top choice for leading designers, especially when it comes to kitchens."
    },
    {
        id: 2,
        title: "Box",
        price: "$10.00",
        image: "https://www.ikea.com/us/en/images/products/knagglig-box-pine__0711018_PE727899_S5.JPG?f=s",
        text: "We all want to shed light on the areas of our homes that matter most. And in spaces where you spend the majority of your time, considering custom details that you're truly passionate about can transform the look—and feel—of the space."
    },
    {
        id: 3,
        title: "Kitchen Island",
        price: "$299.00",
        image: "https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-black-oak__0736821_PE740763_S5.JPG?f=s",
        text: "This bedroom by interior designed Gail Davis is full of rich texture and pattern yet still remains neutral and calming. If you want to introduce more warmth and texture to your space, consider a wood ceiling."
    },
    {
        id: 4,
        title: "Dish Towel",
        price: "$6.00",
        image: "https://www.ikea.com/us/en/images/products/vardagen-dish-towel-black__0709854_PE727119_S5.JPG?f=s",
        text: "In this peaceful blue master bedroom designed by Cathy Chapman, the gorgeous stone walls bring in an earthy feel. Want to make sure you actually get sweet dreams?"
    },
    {
        id: 5,
        title: "Chair",
        price: "$89.00",
        image: "https://www.ikea.com/us/en/images/products/roenninge-chair-birch__0642047_PE700849_S5.JPG?f=s",
        text: "Instead of oversized furniture, opt for minimalist, low-to-the-ground beds and nightstands that are built into the wall for a sleek floating effect."
    },
    {
        id: 6,
        title: "Jar",
        price: "$5.00",
        image: "https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0713741_PE729737_S5.JPG?f=s",
        text: "A light blue vanity and brass pulls are a pretty surprise against this bathroom's black-and-white, mosaic tile floor. A cactus adds a fun, playful touch."
    }
];


var domImages = document.querySelectorAll(".grid-container__column__img");
var domTitle = document.querySelectorAll(".grid-container__column__title");
var domPrice = document.querySelectorAll(".grid-container__column__price");
var domText = document.querySelectorAll(".grid-container__column__subTitle");



// Loops through all of data then sets values to dom
for (var i = 0; i < domImages.length; i++) {
    domImages[i].src = cottage[i].image;
    domTitle[i].innerHTML = cottage[i].title;
    domPrice[i].innerHTML = cottage[i].price
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
