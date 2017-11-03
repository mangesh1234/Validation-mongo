'use strict';

/* extrenal dependancy */
const mongoose = require('mongoose');

//Internal depedancy
var Schema = mongoose.Schema;
var Url = require('../../server/config/config.js');


exports.connectToMongo = function () {

    mongoose.connect(Url.storage.main.database);;
    var db = mongoose.connection;
    // When the connection is error
    db.on('error', function onError(err) {
        console.log('Connection to Mongo Unsuccessful: ' + err);
    });

    // When the connection is disconnected
    db.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // When successfully connected
    db.on('connected', function () {
        console.log('Mongoose default connection open');
    });

    // When successfully Successful
    db.once('open', function callback() {
        console.log('Connection to Mongo Successful');

    });
};
