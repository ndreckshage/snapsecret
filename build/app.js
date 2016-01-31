(function() {
  var API, Secret, allowCrossDomain, api, app, db, express, http, indexRoute, io, mongoAddr, mongoDbName, mongoOpts, mongoPort, mongoUri, mongoose, path, server;

  express = require('express');

  http = require('http');

  path = require('path');

  mongoose = require('mongoose');

  app = express();

  mongoAddr = process.env.SNAPSECRET_MONGO_PORT_27017_TCP_ADDR || "localhost";

  mongoPort = process.env.SNAPSECRET_MONGO_PORT_27017_TCP_PORT || 27017;

  mongoDbName = process.env.SNAPSECRET_MONGO_ENV_MONGODB_NAME || "snapsecret";

  mongoUri = "mongodb://" + mongoAddr + ":" + mongoPort + "/" + mongoDbName;

  mongoOpts = {
    user: process.env.SNAPSECRET_MONGO_ENV_MONGODB_USER || "",
    pass: process.env.SNAPSECRET_MONGO_ENV_MONGODB_PASS || ""
  };

  mongoose.connect(mongoUri, mongoOpts);

  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
    return console.log('DB CONNECTION');
  });

  allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    return next();
  };

  app.use(allowCrossDomain);

  app.set('port', process.env.PORT || 3000);

  app.set('views', path.join(__dirname, '../', 'views'));

  app.set('view engine', 'jade');

  app.set('trust proxy', true);

  app.use(express.favicon());

  app.use(express.logger('dev'));

  app.use(express.json());

  app.use(express.urlencoded());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express["static"](path.join(__dirname, '../', 'public')));

  if (app.get('env') === 'development') {
    app.use(express.errorHandler());
  }

  server = http.Server(app);

  io = require('socket.io')(server, {
    'transports': ['websocket', 'polling']
  });

  Secret = require('./models')('secret')();

  API = require('./api')();

  api = new API(Secret);

  api.initIO(io);

  indexRoute = function(req, res) {
    return Secret.find({
      ip_address: req.ip,
      created_at: {
        $gte: new Date(Date.now() - 60 * 60 * 1000)
      }
    }, function(error, secrets) {
      var secretTimes;
      secretTimes = [];
      if (error) {
        console.log("Failed to get secrets, " + error);
      } else {
        secrets.forEach(function(secret) {
          return secretTimes.push(secret.created_at.getTime());
        });
      }
      return res.render('index', {
        title: 'snapsecret',
        activeSecret: JSON.stringify(api.getActiveSecret()),
        activeCommentCount: JSON.stringify(api.getActiveCommentCount(req.ip)),
        activeExpiry: JSON.stringify(api.getActiveExpiry()),
        secretTimes: JSON.stringify(secretTimes),
        secretStats: JSON.stringify(api.getSecretStats()),
        staticIP: JSON.stringify(req.ip)
      });
    });
  };

  app.get('/', indexRoute);

  app.get('/read', indexRoute);

  app.get('/confess', indexRoute);

  app.get('/what', indexRoute);

  app.get('/terms', indexRoute);

  app.get('/privacy', indexRoute);

  app.get('/use', indexRoute);

  server.listen(app.get('port'), function() {
    return console.log("Express server listening on port " + (app.get('port')));
  });

}).call(this);
