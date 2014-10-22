mongoose = require 'mongoose'
module.exports = () ->
  Schema = mongoose.Schema

  commentSchema = new Schema
    message:
      type: String
      required: 'Comment needs a body'
    date:
      type: Date
      default: Date.now
    ip_address:
      type: String
      required: 'No IP'
    orignal_poster:
      type: Boolean
      default: false

  secretSchema = new Schema
    message:
      type: String
      required: 'Whoops'
    ip_address:
      type: String
      required: 'No IP'
    commentable:
      type: Boolean
      default: true
    displayed:
      type: Boolean
      default: false
    view_count:
      type: Number
      default: 0
    created_at:
      type: Date
      default: Date.now
    reports:
      type: Number
      default: 0
    name: String
    location: String
    queue_estimate: Number
    comments: [commentSchema]

  Secret = mongoose.model 'Secret', secretSchema

  # Validate 2 secrets per hour
  # Secret.schema.path('ip_address').validate (value, respond) ->
  #   Secret.find
  #     ip_address: value
  #     created_at:
  #       $gte: new Date Date.now() - 60 * 60 * 1000
  #   , (error, secrets) ->
  #     if error
  #       console.log "Failed to get secrets, #{error}"
  #       respond false
  #     else
  #       respond secrets.length < 2
  # , 'easy there, snowden. 2 secrets per hour'

  Secret