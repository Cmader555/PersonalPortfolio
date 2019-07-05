// Dependencies
const express = require("express");
const axios = require("axios");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define API routes here
app.use(routes);

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sportsScraper";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });