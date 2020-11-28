const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require(`./config/keys`).mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
const User = require("./models/User");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const user = new User({
    handle: "Edmond",
    email: "Edmond@edmond.com",
    password: "password123",
  });
  user.save();
  res.send("Hello World");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serve is running on port ${port}`));
