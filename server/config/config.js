'use strict';

const config = {
  development: {
    storage: {
      main: {
        username: null,
        password: null,
        database: 'mongodb://127.0.0.1/Mehendi-Project',
        host: '127.0.0.1',
        // timezone: '+05:30',
        storage: 'mongodb',
        collate: 'utf8_general_ci'
      }
    },
    server: {
    port: 9000,
    name:'Mehendi-app',
      connections: [{
        routes: {
          cors: true
        },
        router: {
          stripTrailingSlash: true
        }
      }]
    }
  },
  test: {
    storage: {
      main: {
        username: process.env.MAINDB_USER,
        password: process.env.MAINDB_PASSWORD,
        database: process.env.MAINDB_DBNAME,
        host: process.env.MAINDB_IP,
        timezone: '+05:30',
        collate: 'utf8_general_ci'
      }
    },
    server: {
      connections: [{
        port: 9000,
        routes: {
          cors: true
        },
        router: {
          stripTrailingSlash: true
        }
      }]
    }
  },
  production: {
    storage: {
      main: {
        username: process.env.MAINDB_USER,
        password: process.env.MAINDB_PASSWORD,
        database: process.env.MAINDB_DBNAME,
        host: process.env.MAINDB_IP,
        timezone: '+05:30',
        collate: 'utf8_general_ci'
      }
    },
    server: {
      connections: [{
        port: 9000,
        routes: {
          cors: true
        },
        router: {
          stripTrailingSlash: true
        }
      }]
    }
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];