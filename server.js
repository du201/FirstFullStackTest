const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Test application." });
});

require("./app/routes/customer.routes.js")(app);

const port = process.env.PORT || 3000;
// set port, listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});