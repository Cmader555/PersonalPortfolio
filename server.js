// Dependencies
const express = require("express");
const axios = require("axios");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// require("./routes/api_routes")(app);
// require("./routes/html_routes")(app);

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sportsScraper";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });