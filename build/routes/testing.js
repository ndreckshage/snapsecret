(function() {
  exports.testing = function(req, res) {
    return res.render('index', {
      title: 'uhhh'
    });
  };

}).call(this);
