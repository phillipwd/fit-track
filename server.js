const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = 3000;

const Workout = require("./models/index")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });
//   router.get("/", (req, res) => {
//     res.send("../public/index.html");
// });
app.get("/exercise", (req, res)=>{
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});
  
app.get("/stats", (req, res)=>{
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});





mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true})

app.listen(PORT, ()=> {
    console.log("Listening on port " + PORT);
})