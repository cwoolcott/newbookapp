const express = require("express");

const addBook = require("./addbook");
const getBooks = require("./getbooks");

const app = express();

app.use("/addbook", addBook);
app.use("/listbooks", getBooks);

module.exports = app;
