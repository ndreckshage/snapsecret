express = require 'express'
http = require 'http'
path = require 'path'
mongoose = require 'mongoose'
app = express()

mongoUri = "mongodb://#{process.env.SNAPSECRET_MONGO_PORT_27017_TCP_ADDR}:#{process.env.SNAPSECRET_MONGO_PORT_27017_TCP_PORT}/admin"
mongoOpts =
  user: 'admin'
  pass: process.env.SNAPSECRET_MONGO_ENV_MONGODB_PASS

mongoose.connect mongoUri, mongoOpts
db = mongoose.connection
db.on 'error', console.error.bind(console, 'connection error:')
db.once 'open', () ->
  console.log 'DB CONNECTION'

app.set 'port', process.env.PORT || 3000
app.set 'views', path.join(__dirname, '../', 'views')
app.set 'view engine', 'jade'
app.set 'trust proxy', true
app.use express.favicon()
app.use express.logger('dev')
app.use express.json()
app.use express.urlencoded()
app.use express.methodOverride()
app.use app.router
app.use express.static(path.join(__dirname, '../', 'public'))

if app.get('env') is 'development'
  app.use express.errorHandler()

server = http.createServer app
io = require('socket.io').listen server

Secret = require('./models')('secret')()
API = require('./api')()
api = new API(Secret)
api.initIO io

indexRoute = (req, res) ->
  Secret.find
    ip_address: req.ip
    created_at:
      $gte: new Date Date.now() - 60 * 60 * 1000
  , (error, secrets) ->
    secretTimes = []
    if error
      console.log "Failed to get secrets, #{error}"
    else
      secrets.forEach (secret) ->
        secretTimes.push secret.created_at.getTime()
    res.render 'index',
      title: 'snapsecret'
      activeSecret: JSON.stringify api.getActiveSecret()
      activeCommentCount: JSON.stringify api.getActiveCommentCount(req.ip)
      activeExpiry: JSON.stringify api.getActiveExpiry()
      secretTimes: JSON.stringify secretTimes
      secretStats: JSON.stringify api.getSecretStats()
      staticIP: JSON.stringify req.ip

# Ember Routes (to work with History API)
app.get '/', indexRoute
app.get '/read', indexRoute
app.get '/confess', indexRoute
app.get '/what', indexRoute
app.get '/terms', indexRoute
app.get '/privacy', indexRoute
app.get '/use', indexRoute

server.listen app.get('port'), () ->
  console.log "Express server listening on port #{app.get('port')}"
