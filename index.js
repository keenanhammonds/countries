const express = require('express');
const parser = require('body-parser');
const app = express();
const axios = require('axios');


parser.json();

const url = 'https://restcountries.eu/rest/v2/all';

app.get("/", function(req, res) {
    res.json
  });

app.listen(4000, () => console.log('server up and running on port 3000!'));
