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
