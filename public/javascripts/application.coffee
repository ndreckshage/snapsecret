(->
  Ember = require 'ember'
  moment = require 'moment'

  # Socket.io
  origin = location.origin.replace('www.', '').replace('://snap', '://ws.snap')
  socket = window.io(origin, {'transports': ['websocket', 'polling']})

  # SnapSecret
  window.SnapSecret = SnapSecret = Ember.Application.create()

  # Controllers
  require('./controllers/application_controller.coffee')(SnapSecret, socket)
  require('./controllers/index_controller.coffee')(SnapSecret, socket)
  require('./controllers/confess_controller.coffee')(SnapSecret, socket, moment)

  # Views
  require('./views/application_view.coffee')(SnapSecret)
  require('./views/commentable_button_view.coffee')(SnapSecret)
  require('./views/blow_the_whistle_button_view.coffee')(SnapSecret)

  # Helpers
  require('./helpers/moment_helper.coffee')(Ember, moment)

  # Templates
  require './templates.js'

  # Routes
  require('./router.coffee')(SnapSecret)
  require('./routes/index_route.coffee')(SnapSecret)
  require('./routes/confess_route.coffee')(SnapSecret)
)()
