require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => res.send("Hello Backend!"));
app.get("/twitter", (req, res) => res.send("shivPosted"));
app.get("/login", (req, res) => res.send("<h1>login to your account</h1>"));
app.listen(port, () => console.log(`app listening on port ${port}`));
