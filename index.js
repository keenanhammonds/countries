const express = require('express');
const parser = require('body-parser');
const app = express();
const axios = require('axios');
const url = 'https://api.deezer.com/version/service/id/method/?parameters'

parser.json();



axios.get(url, apiKey)
  .then(function (res) {
    // handle success
    console.log(res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


app.listen(4000, () => console.log('server up and running on port 3000!'));
