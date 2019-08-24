const express = require('express');
const parser = require('body-parser');
const app = express();


app.use(parser.json());




app.listen(4000, () => console.log('server up and running on port 4000!'));
