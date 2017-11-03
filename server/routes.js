'use strict';
const registration = require('./api/registration');

module.exports = (app) => {
  registration(app);
};