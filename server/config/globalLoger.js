'use strict';

const bunyan = require('bunyan');
const config = require('./config.js');

//Create a global app logger
express.appConfig = config;

 express.__log = bunyan.createLogger({
  name: express.appConfig.server.name,
  streams: [{
    stream: process.stdout,
    level: 'debug'
  }]
});

// Standard method to fetch child loggers
// Example use case - To segregate logs between two different modules
// OR subsystems within the app
express.getLogger = (name) => {
  return express.__log.child({
    module: name
  });
};

module.exports = express;