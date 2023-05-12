const express = require("express");
const api = require("./routes/index.js");
const bookData = require("./books.json");
const myLogger = require("./logger");

const app = express();
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Custom Middleware
app.use(myLogger);

app.use("/api", api);

const PORT = process.env.PORT || 3001;

//HTML ROUTES
app.get(["/", "/books", "/otherbook"], (req, res) => {
  res.sendFile(__dirname + "/books.html");
});

app.get("/addbook", (req, res) => {
  res.sendFile(__dirname + "/addbook.html");
});

//CATCHALL FALLBACK ROUTE
app.get("*", (req, res) => {
  res.status(404).send("<b><h1>404 NOT FOUND</h1></b>");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
