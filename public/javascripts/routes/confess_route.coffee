module.exports = (SnapSecret) ->
  SnapSecret.ConfessRoute = Ember.Route.extend
    model: () -> {}
    activate: () ->
      @controllerFor('application').set 'confessRoute', true
      # console.log 'confess route', 'update count'
      @controllerFor('confess').updateSecretCount()
    deactivate: () ->
      applicationController = @controllerFor('application')
      applicationController.set 'confessRoute', false
      applicationController.flashClear()