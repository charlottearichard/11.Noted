//const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const PORT = process.env.PORT || 3001;

//instantiate the server
const app = express();

//brings in frontend code css and js for styling
//static makes these files resources to the server
app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//tell it to listen for request
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//Triggers the route files to display page
app.use("/", htmlRoutes);
//app.use("/api", apiRoutes);
