const express = require('express');
const parser = require('body-parser');
const app = express();
const axios = require('axios');
const url = 'https://api.musixmatch.com/ws/1.1/'
const apiKey = 'd6e7290a1d7028ba94f734e4a5d7e687';

parser.json();

axios.get

app.listen(4000, () => console.log('server up and running on port 3000!'));
