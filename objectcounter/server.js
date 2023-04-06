//Importing the required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

//Setup the express app and modules
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

//import config variables
const {port, mongoURI} = require('./config');

//connect to the database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
