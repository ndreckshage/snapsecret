module.exports = (Ember, moment) ->
  Ember.Handlebars.helper 'format-date', (date) ->
    "at #{moment(date).format('h:mm:ss a')}"