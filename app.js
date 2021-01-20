const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require ('dotenv/config');
const feedbackRoute = require('./routes/feedbacks');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/feedbacks', feedbackRoute);

app.listen(3000);

mongoose.connect('mongodb+srv://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@feedbacks.mtosy.mongodb.net/' + process.env.DATABASE_NAME + '?retryWrites=true&w=majority',
    {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Database is connected');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

