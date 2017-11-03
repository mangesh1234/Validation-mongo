'use strict';

/* Extrenal Dependancy */
global.express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bunyan = require('bunyan');
const app = express();

/* Internal Dependancy */
var config = require('./config/config.js');
var routes = require('./routes');
var connection = require('../storage/maindb/connection.js');

//MongoDb database connection
connection.connectToMongo();

// Accept environment info from host machine
const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());

express.appConfig = config.server;


//Create a global app logger
if (!express.appConfig) {
  express.__log.fatal('Application has crashed, urgen attention required', express.appConfig, config);
  return new Error('App Crashed');
}

app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With,X-XSRF-TOKEN, querycriteria, x-access-token, sessionId, userId");
    res.removeHeader("X-Powered-By");
    next();
});

// Intilazation of all router
routes(app);

// server Intilazation 
app.listen(config.server.port, () => {
        console.log('Server is listening on ' + config.server.port);
      });