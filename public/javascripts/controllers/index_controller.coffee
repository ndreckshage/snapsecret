module.exports = (SnapSecret, socket) ->
  SnapSecret.IndexController = Ember.ObjectController.extend
    needs: ['application']
    queue: Ember.A()
    queueFlash:
      message: null
      type: null
    comments: Ember.A()
    commentable: false
    commentsEnabled: true
    showComments: false
    waitingMessage: false
    secretsRead: 0
    nsaCheck: false
    comment:
      maxCount: 1
      valid: true
      inValid: false
      count: 0
      value: ''
    init: () ->
      secret = window.activeSecret
      @set 'content', secret: secret if secret
      if window.activeCommentCount
        @set('comment.count', window.activeCommentCount)
      if secret and secret.comments
        secret.comments.forEach (comment) =>
          @comments.pushObject comment
      @comments.reverse()
      @setCommentable()
      @commentValidate()
      @commentInvalid()
      @setShowComments()
    commentInvalid: (() ->
      if @get('comment.valid')
        @set('comment.inValid', false)
      else
        @set('comment.inValid', true)
    ).observes('comment.valid')
    setNSACheck: (() ->
      secretsRead = @get 'secretsRead'
      if secretsRead % 5 == 0
        @set 'nsaCheck', true
      else
        @set 'nsaCheck', false
    ).observes('secretsRead')
    setShowComments: (() ->
      commentable = @get 'commentable'
      # console.log 'indexController', '@setShowComments', \
        # '#commentable', commentable
      commentsEnabled = @get 'commentsEnabled'
      # console.log 'indexController', '@setShowComments', \
        # '#commentsEnabled', commentsEnabled
      showComments = commentable and commentsEnabled
      # console.log 'indexController', '@setShowComments', \
        # '#showComments', showComments
      @set 'showComments', showComments
    ).observes('commentable', 'commentsEnabled')
    setCommentable: (() ->
      commentable = @get('content.secret.commentable')
      # console.log 'indexController', '@setCommentable', commentable
      @set('commentable', commentable)
    ).observes('content.secret.commentable')
    commentValidate: (() ->
      if @get('comment.count') < @get('comment.maxCount')
        @set('comment.valid', true)
      else
        @set('comment.valid', false)
    ).observes('comment.count')
    _clearSecretSwitch: () ->
      # console.log 'indexController', '@_clearSecretSwitch'
      @set 'waitingMessage', false
      clearTimeout @noSecretTimeout if @noSecretTimeout
    _noSecretSwitch: () ->
      # console.log 'indexController', '@_noSecretSwitch', 'called'
      unless @get('controllers.application').get 'activeSecret'
        # console.log 'indexController', '@_noSecretSwitch', 'waiting'
        @noSecretTimeout = setTimeout () =>
          # console.log 'indexController', '@_noSecretSwitch', 'active'
          @set 'waitingMessage', true
        , 3000
    clearContent: () ->
      # console.log 'indexController', '@clearContent'
      @set 'content', null
      @_noSecretSwitch()
    actions:
      queueFlash: (message, type = 'error') ->
        @set 'queueFlash.message', message
        @set 'queueFlash.type', type
      addToQueue: (secret) ->
        @queue.pushObject secret: secret
      activateSecret: (secret) ->
        @set 'content', secret: secret
        secretsRead = @get 'secretsRead'
        # console.log 'indexController', '@actions.activeSecret', \
          # '#secretsRead', secretsRead
        @set 'secretsRead', ++secretsRead
        # console.log '@activeSecret', 'active'
      commentAdded: (comment) ->
        @comments.unshiftObject comment
      nextInQueue: () ->
        applicationController = @get 'controllers.application'
        secret = @queue.shiftObject()
        if secret
          content = secret
          applicationController.send('newSecret', secret) if secret
          # console.log '@nextInQueue', 'secret active'
        else
          content = null
          @_noSecretSwitch()
          # console.log '@nextInQueue', 'no secrets'
        @set 'content', content
      addComment: () ->
        @commentValidate()
        if @get('comment.valid')
          socket.emit 'add comment',
            ip_address: window.staticIP
            message: @get('comment.value')
            belongsTo: null
          @set('comment.value', '')
          count = @get('comment.count')
          @set('comment.count', ++count)
      toggleComments: () ->
        if @get('commentsEnabled') \
          then @set('commentsEnabled', false) \
          else @set('commentsEnabled', true)
      reportSecret: () ->
        socket.emit 'report secret'
        applicationController = @get 'controllers.application'
        applicationController.send 'flash', 'Thanks! -- The NSA', 'success'
        applicationController.send 'reset'
        @clearContent()
      clearSecretSwitch: () -> @_clearSecretSwitch()
      noSecretSwitch: () -> @_noSecretSwitch()
      confirmNSA: () ->
        # console.log 'indexController', '@actions.confirmNSA', 'hit'
        window.location.href = "http://www.whitehouse.gov/" + \
          "our-government/the-constitution"
      confirmNotNSA: () ->
        # console.log 'indexController', '@actions.confirmNotNSA', 'hit'
        @set 'nsaCheck', false