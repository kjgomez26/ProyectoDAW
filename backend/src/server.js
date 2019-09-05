const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const app = express();
const cors = require('cors');

//Base de dato no relacional
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_final');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});