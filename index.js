const express = require('express');
const parser = require('body-parser');
const cors = require('cors')
const app = express();

parser.json();
app.use(cors())



app.listen(4000, () => console.log('server up and running on port 3000!'));
