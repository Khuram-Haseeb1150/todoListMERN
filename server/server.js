const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');

// const path=require("path")
require("dotenv").config();
let env = process.env;

const app = express();
const PORT= process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded())
app.use("/public", express.static(__dirname + "/public"));
app.use(cors());


app.use(morgan("dev"));







mongoose.connect('mongodb+srv://khuram:worldpower1150@tmcluster.6kw8z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Yahooo! Connection is Established.");
  })
  .on("error", (err) => {
    console.log("Err: ", err);
  });

  const TodoRoute=require('./route/index');
  const Todo=require('./route/todo')
  app.use('/', TodoRoute);
  app.use('/', Todo);


if(process.env.NODE_ENV==='production')
{
  app.use(express.static('frontend/build'))
}

app.listen(PORT, function () {
  console.log(`Server Started on: http://localhost:${app.get("port")}`);
});