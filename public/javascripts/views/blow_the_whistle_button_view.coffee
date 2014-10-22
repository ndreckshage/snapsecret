module.exports = (SnapSecret) ->
  SnapSecret.BlowTheWhistleButton = Ember.View.extend
    tagName: 'a'
    classNames: ['btn', 'btn-default', 'show-comments-btn']
    click: () ->
      @get('controller').send 'reportSecret'
    didInsertElement: () ->
      $(@get('element')).tooltip
        title: 'report if the secret is abusive, etc.'
        placement: 'right'