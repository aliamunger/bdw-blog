var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://heroku_app35430049:iqr8q97mrvc96v80g65cjfn7dj@ds059821.mongolab.com:59821/heroku_app35430049'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-production'
  }
};

module.exports = config[env];
