module.exports = (SnapSecret, socket, moment) ->
  SnapSecret.ConfessController = Ember.Controller.extend
    needs: ['application', 'index']
    init: () ->
      # console.log 'confess', 'secretTimes', window.secretTimes
      @get('secret.spilled').pushObjects window.secretTimes \
        if window.secretTimes
      @initIO()
    initIO: () ->
      socket.on 'create secret response', (data) =>
        # if no errors
        # console.log 'confessController', '@initIO', 'response data', data
        @transitionToRoute 'index'
        if data == 0
          @get('controllers.index').send 'queueFlash', \
            "your secret is safe with us.", \
            'success'
        else
          @get('controllers.index').send 'queueFlash', \
            "your secret is set to spill " + \
            "#{moment().add('minutes', data).fromNow()}", \
            'success'
        @set 'message.value', ''
        @set 'inFlight', false
        # console.log 'confess io response', 'before', @get('secret.spilled')
        @get('secret.spilled').pushObject Date.now()
        # console.log 'confess io response', 'after', @get('secret.spilled')
    disableForm: (() ->
      @get('inFlight') or @get('secret.inValid')
    ).property('inFlight', 'secret.inValid')
    inFlight: false
    secret:
      maxPerHour: 2
      inValid: false
      spilled: Ember.A()
    updateSecretCount: () ->
      # console.log 'confess', 'updateSecretCount', \
        # 'before', @get('secret.spilled')
      @set 'secret.spilled', @get('secret.spilled').filter (item) ->
        Date.now() - item <= 60 * 60 * 1000
      # console.log 'confess', 'updateSecretCount', \
        # 'after', @get('secret.spilled')
    secretValidate: (() ->
      # console.log 'confess', 'secretValidate', \
        # 'called', @get('secret.spilled').length, @get 'secret.maxPerHour'
      applicationController = @get('controllers.application')
      if @get('secret.spilled').length >= @get 'secret.maxPerHour'
        @set 'secret.inValid', true
        applicationController.flash "easy there, snowden. " + \
          "#{@get('secret.maxPerHour')} secrets per hour."
        false
      else
        @set 'secret.inValid', false
        applicationController.flashClear()
        true
      # console.log 'confess', 'secretValidate', @get 'secret.inValid'
    ).observes 'secret.spilled.@each'
    commentable: true
    commentableCurrent: (() ->
      if @get('commentable') then 'on' else 'off'
    ).property('commentable')
    name: ''
    location: ''
    message:
      value     : ''
      minWords  : 10
      maxWords  : 500
      valid     : false
      error     : null
    messageValidate: (() ->
      message = @get('message.value')
      wordCount = (message.match(/\S+/g) || []).length
      minWords = @get 'message.minWords'
      maxWords = @get 'message.maxWords'
      if maxWords >= wordCount >= minWords
        @get('controllers.application').flashClear()
        @set 'message.valid', true
        @set 'message.error', null
        true
      else
        error = if wordCount < minWords then \
          "a secret with less then #{minWords} words is hardly a secret." else \
          "#{maxWords} words max. this isnt wikileaks. " + \
          "(you entered #{wordCount})"
        @set 'message.valid', false
        @set 'message.error', error
        false
    ).observes 'message.value'
    actions:
      toggleComments: () ->
        if @get('commentable') is on \
          then @set('commentable', off) \
          else @set('commentable', on)
      confessSecret: () ->
        # console.log 'confessSecret', 'action', @get('secret.inValid')
        unless @get('secret.inValid')
          @messageValidate()
          if @get 'message.valid'
            @set 'inFlight', true
            socket.emit 'create secret',
              ip_address: window.staticIP
              message: @get('message.value')
              commentable: @get('commentable')
              location: @get('location')
              name: @get('name')
          else
            @get('controllers.application').flash @get 'message.error'