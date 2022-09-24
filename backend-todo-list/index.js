//dependencies

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const todoController = require("./controller/todoController");
//require mongoose
const mongoose = require("mongoose");
// get the environment variable
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
//import the controller
app.use("/todo", todoController);
//connect to mango db
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// homepage route
app.get("/", (req, res) => {
  res.send("welcom to our todo app");
});
//wild card route
app.get("*", (req, res) => {
  res.status(404).send(`<div style='
               background-color: blue;
               height: 50%;
               width: 50%;
               border-radius: 10px;
               margin-left: 25%;
               margin-top: 25%;
               ' >
               <div 
               style=' color: white;
               text-align: center;
               
               ' >
                 <h1>404</h1>
                 <h2>Page Not Found</h2>
                 <h3>this page doesn't exist </h3>
               </div>
               
             </div>
             
             `);
});

//listen for connection
app.listen(process.env.PORT, () => {
  console.log("awake");
});
