'use strict';
const controller = require('./controller');

module.exports = (routes) => {
  routes.post('/api/registration', controller.create);
};