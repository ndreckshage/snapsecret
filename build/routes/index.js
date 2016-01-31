(function() {
  exports.index = function(req, res) {
    return res.render('index', {
      title: 'snapsecret',
      activeSecret: JSON.stringify({
        secret: {
          message: 'testing'
        }
      })
    });
  };

}).call(this);
