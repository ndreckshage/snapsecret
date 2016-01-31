vendor_js =
  jquery: './bower_components/jquery/jquery.min.js'
  handlebars: './bower_components/handlebars/handlebars.js'
  ember: './bower_components/ember/ember.min.js'
  bootstrap: './bower_components/bootstrap/js/tooltip.js'
  moment: './bower_components/momentjs/min/moment.min.js'

loadGruntTasks = require('load-grunt-tasks')

module.exports = (grunt) ->
  loadGruntTasks(grunt)

  grunt.initConfig
    emberTemplates:
      compile:
        files: './public/javascripts/templates.js': './public/javascripts/templates/*.handlebars'
        options:
          templateName: (filePath) ->
            filePath.split('/templates/')[1].split('.handlebars')[0]
    browserify:
      dist:
        files: './public/javascripts/application.js': [vendor_js.jquery, vendor_js.handlebars, vendor_js.ember, vendor_js.bootstrap, vendor_js.moment, './public/javascripts/application.coffee']
      options:
        transform: ['coffeeify']
        noParse: [vendor_js.jquery, vendor_js.handlebars, vendor_js.ember, vendor_js.bootstrap, vendor_js.moment]
        shim:
          jquery:
            path: vendor_js.jquery
            exports: '$'
          bootstrap:
            path: vendor_js.bootstrap
            exports: '$'
            depends:
              jquery: '$'
          handlebars:
            path: vendor_js.handlebars
            exports: 'Handlebars'
          ember:
            path: vendor_js.ember
            exports: 'Ember'
            depends:
              jquery: '$'
              handlebars: 'Handlebars'
          moment:
            path: vendor_js.moment
            exports: 'moment'
    sass:
      dist:
        files:
          './public/stylesheets/application.css': './public/stylesheets/application.scss'
    cssmin:
      combine:
        files:
          './public/stylesheets/application.css': ['./bower_components/bootstrap/dist/css/bootstrap.css', './public/stylesheets/application.css']
    coffee:
      compile:
        files: [
          expand: true
          cwd: 'src'
          src: '**/*.coffee'
          dest: 'build'
          ext: '.js'
        ]
    coffeelint:
      client: 'public/javascripts/**/*.coffee'
      server: 'src/**/*.coffee'
    watch:
      compile:
        files: ['Gruntfile.coffee', 'src/**/*.coffee']
        tasks: ['coffeelint', 'coffee']
      javascript:
        files: ['public/javascripts/templates/**/*.handlebars', 'public/javascripts/**/*.coffee']
        tasks: ['assets']
      stylesheets:
        files: ['public/stylesheets/**/*.scss']
        tasks: ['sass', 'cssmin']

  # load plugins
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-ember-templates'
  grunt.loadNpmTasks 'grunt-coffeelint'

  # official plugins
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # register tasks
  grunt.registerTask 'assets', ['emberTemplates', 'browserify', 'sass', 'cssmin']
  grunt.registerTask 'build', ['coffee', 'assets']
  grunt.registerTask 'default', ['watch']
