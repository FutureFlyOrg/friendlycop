const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const initiateApp = require('./businesslayer/initiateApp')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.header("Access-Control-Max-Age", "3600");
    next();
});    

app.post('/login', initiateApp.login);
app.post('/register', initiateApp.register);
app.post('/checkUsernameAvailability', initiateApp.checkUsernameAvailability);

app.listen(1330, () => {
    console.log('Started listening to Port ' + 1330);
});
