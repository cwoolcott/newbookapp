const booksRoute = require("express").Router();
const fs = require("fs");
//API ROUTES
booksRoute.get("/", (req, res) => {
  fs.readFile("./books.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const bookData = JSON.parse(data);
      res.json(bookData);
    }
  });
});

module.exports = booksRoute;
