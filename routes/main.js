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
router.get("/products", (req, res) => {
    res.render("products", { product: data.cupcakes });
});

// Clicked Product page
router.get("/products/:item", (req, res) => {
    const product = req.params.item;
    res.send(product);
});

// Contact Route
router.get("/contact", (req, res) => {
    res.render("contact");
});

module.exports = router;
