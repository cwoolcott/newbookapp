const bookRouteAdd = require("express").Router();
const fs = require("fs");

bookRouteAdd.post("/", (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;
  // const title = req.body.title;
  // const author = req.body.author;

  //Non-persistant
  //bookData.push(req.body);
  fs.readFile("./books.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const bookData = JSON.parse(data);
      bookData.push(req.body);

      //write to the books json
      fs.writeFile(
        "./books.json",
        JSON.stringify(bookData, null, 4),
        (writeErr) => {
          console.log(writeErr ? writeErr : "Added Book");
        }
      );
      console.log("everything in book data", bookData);
      res.json(`${title} by ${author} was added to book data`);
    }
  });
});

module.exports = bookRouteAdd;
