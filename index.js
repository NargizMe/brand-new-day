const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const parol = require("./routers/router");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect(
  "mongodb://localhost/brand-new-day",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Mongoose connected");
  }
);

app.use("/api", parol);

app.get("/welcome", (req, res) => {
  res.render("welcome");
});

app.get("/parol", (req, res) => {
  res.render("parol");
});

app.get("/day1", (req, res) => {
  res.render("day1");
});

app.get("/", (req, res) => {
  res.render("welcome");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
