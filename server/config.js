const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const database = require('../database/mysql.js');

const app = express();
const path = require('path');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));


app.get('/address', function(req, res){
  database.selectAll((err, data) => {
    if(err){
      console.log('error connecting to the database');
      res.sendStatus(500);
    }else {
      res.status(200).json(data);
    }
  })
})
//middleware

//HTTP Requests go here

module.exports = app;
