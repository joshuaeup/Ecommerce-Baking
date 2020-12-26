// Import express package
const express = require("express");

// Variables
const main = require("./routes/main");
const PORT = process.argv.PORT || 3000;
const bodyParser = require("body-parser");

// Call method
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Link routes
app.use("/", main);

// Listen on Port
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
