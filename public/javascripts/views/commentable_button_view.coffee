module.exports = (SnapSecret) ->
  SnapSecret.CommentableButtonView = Ember.View.extend
    tagName: 'a'
    classNames: ['btn', 'btn-default']
    attributeBindings: ['disabled']
    disabled: (() ->
      @get('controller').get('disableForm')
    ).property('disabled')
    titleHelper: () ->
      value = if @get('controller').get('commentable') then 'off' else 'on'
      "click to turn #{value} commenting"
    click: () ->
      @get('controller').send 'toggleComments'
      newTitle = @titleHelper()
      $(@get('element')).attr('title', newTitle)
                        .tooltip('fixTitle')
                        .data('bs.tooltip')
                        .$tip.find('.tooltip-inner')
                        .text(newTitle)
    didInsertElement: () ->
      title = @titleHelper()
      $(@get('element')).tooltip
        title: title