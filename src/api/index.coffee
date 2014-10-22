class API
  constructor: (Secret, expiry = 60) ->
    @Secret = Secret
    @DEFAULT_COUNTER = expiry
    @activeExpiry = @DEFAULT_COUNTER
    @activeSecret = null
    @totalRead = 0
    @totalSpilled = 0
    @initSecretStats()

API::initSecretStats = () ->
  @Secret.count
    displayed: true
  , (error, count) =>
    unless error
      @totalSpilled = count
  @Secret.find
    displayed: true
  , (error, secrets) =>
    unless error
      totalRead = 0
      secrets.forEach (secret) =>
        totalRead += secret.view_count
      @totalRead = totalRead

API::initIO = (io) ->
  io.on "connection", (socket) =>
    console.log "IO CONNECTION"
    socket.on "create secret", (reqIO) =>
      reqIO.view_count = io.sockets.clients().length
      # console.log reqIO
      @_createSecret reqIO, socket, () =>
        # When this callback is called, activesecret send to sockets
        @totalRead += @activeSecret.view_count
        @totalSpilled += 1
        io.sockets.emit "spill secret", @_serializeSecret()
    socket.on 'add comment', (reqIO) =>
      @_addComment reqIO, socket, (comment) =>
        io.sockets.emit "comment added", @_serializeComment comment
    socket.on 'report secret', () => @_reportSecret()

API::getActiveSecret = () ->
  if @activeSecret then @_serializeSecret() else null

API::getActiveExpiry = () ->
  if @activeSecret then @activeExpiry else null

API::getActiveCommentCount = (ip_address) ->
  if @activeSecret
    comments = @activeSecret.comments.filter (comment) ->
      comment.ip_address == ip_address
    comments.length
  else
    0

API::getSecretStats = () ->
  totalRead: @totalRead
  totalSpilled: @totalSpilled

API::_serializeSecret = () ->
  if @activeSecret
    id: @activeSecret.id
    message: @activeSecret.message
    view_count: @activeSecret.view_count
    queue_estimate: @activeSecret.queue_estimate
    commentable: @activeSecret.commentable
    comments: @activeSecret.comments.map (comment) =>
      @_serializeComment comment
    name: if @activeSecret.name \
      then @activeSecret.name \
      else null
    location: if @activeSecret.location \
      then @activeSecret.location \
      else null

API::_serializeComment = (comment) ->
  if comment
    id: comment.id
    message: comment.message
    orignal_poster: comment.orignal_poster
    timestamp: comment.date

API::_reset = () ->
  @activeSecret = null
  @activeExpiry = @DEFAULT_COUNTER

API::_createSecret = (reqIO, socket, resIO) ->
  secret = new @Secret
    message: reqIO.message
    ip_address: reqIO.ip_address
    view_count: reqIO.view_count
    name: reqIO.name
    location: reqIO.location
    commentable: reqIO.commentable
  secret.save (error) =>
    if error
      console.log "oops 0 -- #{error}"
      response = 'test error'
    else
      @Secret.count
        displayed: false
      , (error, count) =>
        unless error
          unless @activeSecret
            @_spillSecret secret, resIO
            response = 0
          else
            console.log "QUEUE SECRET"
            response = --count
        # Give the secret spiller some info about their secret.
        socket.emit 'create secret response', response

API::_spillSecret = (instance, resIO) ->
  console.log "SPILL SECRET"
  @activeSecret = instance
  @_startTheClock(resIO)
  resIO()

API::_startTheClock = (resIO) ->
  interval = setInterval () =>
    console.log @activeExpiry
    if @activeExpiry is 0
      clearInterval interval
      @_expireSecret(resIO)
    else
      @activeExpiry--
  , 1000

API::_reportSecret = () ->
  @Secret.findOne
    _id: @activeSecret.id
  , (error, secret) =>
    if error
      console.log 'secret report', 'find', 'error'
    else
      console.log 'secret report', 'find', 'success'
      reports = secret.reports
      console.log 'secret report', 'reports', reports
      secret.reports = ++reports
      secret.save (error) =>
        if error
          console.log 'secret report', 'save', 'error'
        else
          console.log 'secret report', 'save', 'success'

API::_expireSecret = (resIO) ->
  @Secret.findOneAndUpdate
    _id: @activeSecret.id
  , displayed: true
  , {}
  , (error) =>
    if error
      console.log "oops 1"
      @_reset()
    else
      @_kickTheQueue(resIO)

API::_kickTheQueue = (resIO) ->
  console.log "CHECKING QUEUE"
  @Secret.findOne
    displayed: false
  , (error, secret) =>
    @_reset()
    if error
      console.log "oops 2"
    else
      if secret
        console.log "NEW SECRET"
        @_spillSecret secret, resIO
      else
        console.log "OUT OF SECRETS"

API::_addComment = (reqIO, socket, resIO) ->
  # shouldnt rely on @
  secret = @activeSecret
  comment =
    message: reqIO.message
    ip_address: reqIO.ip_address
  secret.comments.push comment
  secret.save (error) =>
    if error
      # error
      console.log "add comment eror: #{error}"
    else
      resIO comment

module.exports = () -> API