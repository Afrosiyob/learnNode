const express = require("express");
const logger = require("morgan");
const app = express();

const books = [
  {
    id: 1,
    name: "rich dad poor dad",
  },
  {
    id: 2,
    name: "good to greet",
  },
  {
    id: 3,
    name: "rework",
  },
];

app.use(logger("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("salom");
});

app.get("/articles/:year/:month", (req, res) => {
  res.send(req.params);
  res.send(req.query);
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  book
    ? res.send(book)
    : res.status(404).send({ message: "bunday kitob topilmadi" });
});

app.post("/api/books", (req, res) => {
  if (req.body.name) {
    if (req.body.name.length < 3) {
      res.status(400).send({
        message: "name must be more than 3 character",
      });
    } else {
      const book = {
        id: books.length + 1,
        name: req.body.name,
      };
      books.push(book);
      res.status(201).send(book);
    }
  } else {
    res.status(400).send({
      message: "name is required",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("port is running...");
});
