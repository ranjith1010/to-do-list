var express = require("express");
var app = express();
var bodyparser = require('body-parser'); 
var routes = require('./routes/route');
var cors = require('cors');
var mongoose = require('mongoose');

const db = 'mongodb+srv://Admin:admin@ranjithcluster-swpkj.gcp.mongodb.net/todolist?retryWrites=true&w=majority';

mongoose.connect('mongodb://localhost:27017/tasks',{ useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log("Connected to Database");
});

mongoose.connection.on('error', (err) => {
  if(err){
    console.log('Error in Database Connection'+err);
  }
});

const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyparser.json());

app.use('/api',routes);

app.get('/', (req,res) => {
  res.send('Connected to To-Do-List by Ranjith');
});

var server = app.listen(port, () => {
	console.log("Server Started");
});
