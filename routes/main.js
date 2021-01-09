const express = require("express");
// Router
const router = express.Router();
//Data
const data = require("../data.json");

// Home Route
router.get("/", (req, res) => {
    res.render("home");
});

// Products Route (Cupcakes)
router.get("/products/:category", (req, res) => {
    const category = req.params.category.toLowerCase();
    const object = data[category];

    res.render("products", { products: object });
});

// Clicked Product page
router.get("/products/:category/:item", (req, res) => {
    const category = req.params.category.toLowerCase();
    const item = req.params.item.toLowerCase();

    // const object = data[category][item];
    const chosenItem = data[category].find((searchedItem) => {
        return item === searchedItem.name.toLowerCase();
    });

    if (!chosenItem) {
        res.status(404).send("Product Not Found");
    }

    const { image, name, reviews, price } = chosenItem;
    const type = category.charAt(0).toUpperCase() + category.slice(1);

    res.render("product", {
        image: image,
        name: name,
        reviews: reviews,
        price: price,
        type: type,
    });
});

// Contact Route
router.get("/contact", (req, res) => {
    res.render("contact");
});

// Cart Route
router.get("/cart", (req, res) => {
    const { image, name, price, type = "Cupcake" } = data.cupcake[1];
    res.render("cart", { image, name, price, type });
});

module.exports = router;
