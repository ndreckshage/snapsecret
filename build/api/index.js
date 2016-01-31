(function() {
  var API;

  API = (function() {
    function API(Secret, expiry) {
      if (expiry == null) {
        expiry = 60;
      }
      this.Secret = Secret;
      this.DEFAULT_COUNTER = expiry;
      this.activeExpiry = this.DEFAULT_COUNTER;
      this.activeSecret = null;
      this.totalRead = 0;
      this.totalSpilled = 0;
      this.initSecretStats();
    }

    return API;

  })();

  API.prototype.initSecretStats = function() {
    var _this = this;
    this.Secret.count({
      displayed: true
    }, function(error, count) {
      if (!error) {
        return _this.totalSpilled = count;
      }
    });
    return this.Secret.find({
      displayed: true
    }, function(error, secrets) {
      var totalRead;
      if (!error) {
        totalRead = 0;
        secrets.forEach(function(secret) {
          return totalRead += secret.view_count;
        });
        return _this.totalRead = totalRead;
      }
    });
  };

  API.prototype.initIO = function(io) {
    var _this = this;
    return io.on("connection", function(socket) {
      console.log("IO CONNECTION");
      socket.on("create secret", function(reqIO) {
        reqIO.view_count = io.sockets.clients().length;
        return _this._createSecret(reqIO, socket, function() {
          _this.totalRead += _this.activeSecret.view_count;
          _this.totalSpilled += 1;
          return io.sockets.emit("spill secret", _this._serializeSecret());
        });
      });
      socket.on('add comment', function(reqIO) {
        return _this._addComment(reqIO, socket, function(comment) {
          return io.sockets.emit("comment added", _this._serializeComment(comment));
        });
      });
      return socket.on('report secret', function() {
        return _this._reportSecret();
      });
    });
  };

  API.prototype.getActiveSecret = function() {
    if (this.activeSecret) {
      return this._serializeSecret();
    } else {
      return null;
    }
  };

  API.prototype.getActiveExpiry = function() {
    if (this.activeSecret) {
      return this.activeExpiry;
    } else {
      return null;
    }
  };

  API.prototype.getActiveCommentCount = function(ip_address) {
    var comments;
    if (this.activeSecret) {
      comments = this.activeSecret.comments.filter(function(comment) {
        return comment.ip_address === ip_address;
      });
      return comments.length;
    } else {
      return 0;
    }
  };

  API.prototype.getSecretStats = function() {
    return {
      totalRead: this.totalRead,
      totalSpilled: this.totalSpilled
    };
  };

  API.prototype._serializeSecret = function() {
    var _this = this;
    if (this.activeSecret) {
      return {
        id: this.activeSecret.id,
        message: this.activeSecret.message,
        view_count: this.activeSecret.view_count,
        queue_estimate: this.activeSecret.queue_estimate,
        commentable: this.activeSecret.commentable,
        comments: this.activeSecret.comments.map(function(comment) {
          return _this._serializeComment(comment);
        }),
        name: this.activeSecret.name ? this.activeSecret.name : null,
        location: this.activeSecret.location ? this.activeSecret.location : null
      };
    }
  };

  API.prototype._serializeComment = function(comment) {
    if (comment) {
      return {
        id: comment.id,
        message: comment.message,
        orignal_poster: comment.orignal_poster,
        timestamp: comment.date
      };
    }
  };

  API.prototype._reset = function() {
    this.activeSecret = null;
    return this.activeExpiry = this.DEFAULT_COUNTER;
  };

  API.prototype._createSecret = function(reqIO, socket, resIO) {
    var secret,
      _this = this;
    secret = new this.Secret({
      message: reqIO.message,
      ip_address: reqIO.ip_address,
      view_count: reqIO.view_count,
      name: reqIO.name,
      location: reqIO.location,
      commentable: reqIO.commentable
    });
    return secret.save(function(error) {
      var response;
      if (error) {
        console.log("oops 0 -- " + error);
        return response = 'test error';
      } else {
        return _this.Secret.count({
          displayed: false
        }, function(error, count) {
          if (!error) {
            if (!_this.activeSecret) {
              _this._spillSecret(secret, resIO);
              response = 0;
            } else {
              console.log("QUEUE SECRET");
              response = --count;
            }
          }
          return socket.emit('create secret response', response);
        });
      }
    });
  };

  API.prototype._spillSecret = function(instance, resIO) {
    console.log("SPILL SECRET");
    this.activeSecret = instance;
    this._startTheClock(resIO);
    return resIO();
  };

  API.prototype._startTheClock = function(resIO) {
    var interval,
      _this = this;
    return interval = setInterval(function() {
      console.log(_this.activeExpiry);
      if (_this.activeExpiry === 0) {
        clearInterval(interval);
        return _this._expireSecret(resIO);
      } else {
        return _this.activeExpiry--;
      }
    }, 1000);
  };

  API.prototype._reportSecret = function() {
    var _this = this;
    return this.Secret.findOne({
      _id: this.activeSecret.id
    }, function(error, secret) {
      var reports;
      if (error) {
        return console.log('secret report', 'find', 'error');
      } else {
        console.log('secret report', 'find', 'success');
        reports = secret.reports;
        console.log('secret report', 'reports', reports);
        secret.reports = ++reports;
        return secret.save(function(error) {
          if (error) {
            return console.log('secret report', 'save', 'error');
          } else {
            return console.log('secret report', 'save', 'success');
          }
        });
      }
    });
  };

  API.prototype._expireSecret = function(resIO) {
    var _this = this;
    return this.Secret.findOneAndUpdate({
      _id: this.activeSecret.id
    }, {
      displayed: true
    }, {}, function(error) {
      if (error) {
        console.log("oops 1");
        return _this._reset();
      } else {
        return _this._kickTheQueue(resIO);
      }
    });
  };

  API.prototype._kickTheQueue = function(resIO) {
    var _this = this;
    console.log("CHECKING QUEUE");
    return this.Secret.findOne({
      displayed: false
    }, function(error, secret) {
      _this._reset();
      if (error) {
        return console.log("oops 2");
      } else {
        if (secret) {
          console.log("NEW SECRET");
          return _this._spillSecret(secret, resIO);
        } else {
          return console.log("OUT OF SECRETS");
        }
      }
    });
  };

  API.prototype._addComment = function(reqIO, socket, resIO) {
    var comment, secret,
      _this = this;
    secret = this.activeSecret;
    comment = {
      message: reqIO.message,
      ip_address: reqIO.ip_address
    };
    secret.comments.push(comment);
    return secret.save(function(error) {
      if (error) {
        return console.log("add comment eror: " + error);
      } else {
        return resIO(comment);
      }
    });
  };

  module.exports = function() {
    return API;
  };

}).call(this);
