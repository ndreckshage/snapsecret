module.exports = (SnapSecret, socket) ->
  SnapSecret.ApplicationController = Ember.Controller.extend
    needs: ['index', 'confess']
    defaultCountdown: 60
    countdownWarning: false
    indexRoute: false
    confessRoute: false
    activeSecret: false
    failureMessage: null
    successMessage: null
    stats:
      showStats: false
      totalSpilled: 0
      totalRead: 0
    countdown: 60
    init: () ->
      if window.activeExpiry and window.activeSecret
        @set 'countdown', window.activeExpiry
        @set 'activeSecret', true
        @startTheClock()
      if window.secretStats
        @set('stats.totalSpilled', window.secretStats.totalSpilled) \
          if window.secretStats.totalSpilled
        @set('stats.totalRead', window.secretStats.totalRead) \
          if window.secretStats.totalRead
      @setShowStats()
      @initIO()
    initIO: () ->
      indexController = @get 'controllers.index'
      socket.on 'spill secret', (data) =>
        if @get 'activeSecret'
          indexController.send 'addToQueue', data
        else
          @send 'newSecret', data
          indexController.send 'activateSecret', data
          indexController.set 'waitingMessage', false
      socket.on 'comment added', (data) =>
        indexController.send 'commentAdded', data
    setShowStats: (() ->
      if @get('stats.totalSpilled') > 10 and @get('stats.totalRead') > 10
        @set 'stats.showStats', true
      else
        @set 'stats.showStats', false
    ).observes('stats.totalSpilled', 'stats.totalRead')
    flash: (message, type = 'error') ->
      # console.log 'hit'
      if type is 'error' \
        then @set 'failureMessage', message \
        else @set 'successMessage', message
    flashClear: () ->
      @set 'successMessage', null
      @set 'failureMessage', null
    startTheClock: () ->
      @countdownInterval = setInterval $.proxy(@contentCountdown, @), 1000
    reset: () ->
      clearInterval @countdownInterval
      @set 'countdown', @defaultCountdown
      @set 'activeSecret', false
    contentCountdown: () ->
      indexController = @get 'controllers.index'
      indexController.set 'waitingMessage', false
      counter = @get 'countdown'
      counter--
      @set 'countdown', counter
      if counter is 0
        @reset()
        # TODO - implement confirmation behavior
        indexController.send 'nextInQueue'
    warnAtTen: (() ->
      if @countdown <= 10
        @set 'countdownWarning', true
      else if @countdown > 10
        @set 'countdownWarning', false
    ).observes('countdown')
    actions:
      newSecret: (data) ->
        @set 'activeSecret', true
        currentSpilled = @get 'stats.totalSpilled'
        # console.log 'applicationController', '@actions.newSecret', data
        newSpilled = currentSpilled += data.view_count
        @set 'stats.totalSpilled', newSpilled
        currentRead = @get 'stats.totalRead'
        @set 'stats.totalRead', ++currentRead
        @startTheClock()
      navigateHome: () ->
        @transitionToRoute 'index'