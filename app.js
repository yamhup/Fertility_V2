require('dotenv').config();
var express = require("express");
var path = require("path");
const session = require('express-session');

var indexRouter = require("./routes/index");

var app = express();


// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //using EJS

// Middleware
app.use("/static", express.static(path.join(__dirname, "public"))); //set up path for static file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up express-session middleware to enable session function for express-flash messages in trips.js file
app.use(session({
  secret: process.env.SESSION_SECRET || 'dgmd-e55',
  resave: true,
  saveUninitialized: true
}));




// Routes
app.use("/", indexRouter);

module.exports = app;
