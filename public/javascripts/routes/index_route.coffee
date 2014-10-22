module.exports = (SnapSecret) ->
  SnapSecret.IndexRoute = Ember.Route.extend
    activate: () ->
      indexController = @controllerFor 'index'
      applicationController = @controllerFor 'application'
      # console.log 'here'
      queueFlash = indexController.get 'queueFlash'
      # console.log queueFlash
      if queueFlash.message and queueFlash.type
        applicationController.send 'flash', queueFlash.message, queueFlash.type
        indexController.set 'queueFlash.message', null
        indexController.set 'queueFlash.type', null
      applicationController.set 'indexRoute', true
      indexController.send 'noSecretSwitch'

    deactivate: () ->
      @controllerFor('application').set 'indexRoute', false
      @controllerFor('index').send 'clearSecretSwitch'