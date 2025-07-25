const express = require('express');
const {engine} = require('express-handlebars');
const conn = require('./db/conn');

const app = express();

// read  body
app.engine('handlebars', engine({}));
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true, 
  }),
)

app.use(express.json());
app.listen(3000);