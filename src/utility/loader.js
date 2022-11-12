/**
 * author: Refaat
 * this module initializes the web application
 */

// import environment variables
require('dotenv').config('.././.env');

// import libaries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//import router
const logRouter = require('../routes/log-router');

const load = (app) => {
    // mongodb connection
    mongoose.connect(process.env.MONGOOSE_URI)
        .then((connection) => console.log('connected to the database'))
        .catch((error) => console.log('database connection failed'));

    // middleware
    app.use(cors());
    app.use(express.json());

    // initialize router
    app.use(logRouter);
}


module.exports = { load }