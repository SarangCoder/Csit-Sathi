const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");



app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true }));
app.engine("ejs", ejsMate);

// to use public folder static style or files 
app.use(express.static(path.join(__dirname, "/public")));

app.get("/home", (req,res) => {
    res.render("pages/index.ejs");
});

app.get("/" , (req,res) => {
    res.send("Hi, I am root");
});

app.listen(8080, () => {
    console.log("Server is listening to port: 8080");
});