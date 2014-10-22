module.exports = (SnapSecret) ->
  SnapSecret.Router.map () ->
    @route 'read'
    @route 'confess'
    @route 'what'
    @route 'terms'
    @route 'privacy'
    @route 'use'

  if window.history and window.history.pushState
    SnapSecret.Router.reopen
      location: 'history'