'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RegisterSchema   = new Schema({
	name: String,
	email:String,
	password:String
});

module.exports = mongoose.model('register', RegisterSchema);