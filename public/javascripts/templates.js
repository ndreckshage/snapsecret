Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"snapsecret\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n  <div class=\"secret clearfix\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "messages", options) : helperMissing.call(depth0, "partial", "messages", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["confess"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        comments <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("commentable:enabled:disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "commentableCurrent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</class>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"clearfix\">\n  <form accept-charset=\"UTF-8\" action=\"/confess\" class=\"new_secret\" id=\"new_secret\" method=\"post\" role=\"form\">\n    <div class=\"form-group\">\n      ");
  hashContexts = {'valueBinding': depth0,'disabledBinding': depth0,'placeholder': depth0,'class': depth0,'rows': depth0};
  hashTypes = {'valueBinding': "ID",'disabledBinding': "ID",'placeholder': "STRING",'class': "STRING",'rows': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("message.value"),
    'disabledBinding': ("disableForm"),
    'placeholder': ("tell us a secret..."),
    'class': ("form-control"),
    'rows': ("5")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":message-requirements message.valid disableForm:secret-invalid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Secret between 10 and 500 words.</span>\n    </div>\n    <div class=\"form-group\">\n      ");
  hashContexts = {'valueBinding': depth0,'disabledBinding': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'valueBinding': "ID",'disabledBinding': "ID",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("name"),
    'disabledBinding': ("disableForm"),
    'placeholder': ("name (optional)"),
    'class': ("form-control optional")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  hashContexts = {'valueBinding': depth0,'disabledBinding': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'valueBinding': "ID",'disabledBinding': "ID",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("location"),
    'disabledBinding': ("disableForm"),
    'placeholder': ("location (optional)"),
    'class': ("form-control optional")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "SnapSecret.CommentableButtonView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <input type=\"submit\" class=\"btn btn-default\" value=\"confess\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confessSecret", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "ID"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("disableForm")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  </form>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "showStats", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <p class=\"numbers\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalSpilled", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" secrets read by ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalRead", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" spies</p>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("uh, what?");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("terms");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("privacy");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("acceptable use");
  }

  data.buffer.push("<footer>\n  <div id=\"fb-root\"></div>\n  <script>\n    (function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) return;\n      js = d.createElement(s); js.id = id;\n      js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1&appId=664557723574154\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));\n  </script>\n  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n  <script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n    ga('create', 'UA-46516415-1', 'snapsecret.com');\n    ga('send', 'pageview');\n  </script>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "stats", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"social\">\n    <div class=\"fb-share-button\" data-href=\"http://snapsecret.com\" data-type=\"button_count\"></div>\n    <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://snapsecret.com\" data-text=\"1/2 snapchat. 1/2 postsecret.\"></a>\n    <a href=\"https://twitter.com/intent/tweet?button_hashtag=snappedsecret\" class=\"twitter-hashtag-button\">#snappedsecret</a>\n  </div>\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "what", options) : helperMissing.call(depth0, "link-to", "what", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("&nbsp;&sdot;\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "link-to", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("&nbsp;&sdot;\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "privacy", options) : helperMissing.call(depth0, "link-to", "privacy", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("&nbsp;&sdot;\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "use", options) : helperMissing.call(depth0, "link-to", "use", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("read");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("confess");
  }

  data.buffer.push("<header>\n  <p><strong ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "navigateHome", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">snapsecret.</strong>&nbsp;<span>1/2 snapchat. 1/2 postsecret.</span></p>\n  <p>\n    <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":countdown countdownWarning indexRoute")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "countdown", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" seconds.</span>\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-default")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-default")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "confess", options) : helperMissing.call(depth0, "link-to", "confess", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </p>\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <p>\n      <span>you've read ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secretsRead", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" secrets, are you in the NSA?&nbsp;</span>\n      <button class=\"btn btn-default\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmNSA", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">yes</button>&nbsp;\n      <button class=\"btn btn-default\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmNotNSA", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">no</button>\n    </p>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "secret", {hash:{},inverse:self.program(13, program13, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <div><p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p></div>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "secret.name", {hash:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <p><i>Seen by: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.view_count", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i></p>\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "secret.location", {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <p><i>Posted by: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" from ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i></p>\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <p><i>Posted by: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i></p>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "secret.location", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <p><i>Posted from: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "secret.location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i></p>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      <p ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("waitingMessage:hide:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">all secrets sealed :(</p>\n      <p ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("waitingMessage:active:hide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">waiting for another<span class=\"ellipses\"></span></p></p>\n      <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "confess", options) : helperMissing.call(depth0, "link-to", "confess", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(".</p>\n    ");
  return buffer;
  }
function program14(depth0,data) {
  
  
  data.buffer.push("leak one");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "secret", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "commentable", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "SnapSecret.BlowTheWhistleButton", {hash:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "showComments", {hash:{},inverse:self.program(28, program28, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"secret-comments\">\n          <div class=\"comments\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "comments", {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n          <form accept-charset=\"UTF-8\" action=\"/index\" class=\"new_comment form-inline\" id=\"new_comment\" method=\"post\" role=\"form\">\n            <div class=\"form-group\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "comment.valid", {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <input type=\"submit\" class=\"btn btn-default\" value=\"comment\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "ID"};
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("comment.inValid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          </form>\n        </div>\n        <button class=\"btn btn-default show-comments-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleComments", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">hide comments</button>\n      ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n              <div class=\"comment\">\n                <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;<i>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['format-date'] || (depth0 && depth0['format-date'])),stack1 ? stack1.call(depth0, "timestamp", options) : helperMissing.call(depth0, "format-date", "timestamp", options))));
  data.buffer.push("</i></p>\n              </div>\n            ");
  return buffer;
  }

function program22(depth0,data) {
  
  
  data.buffer.push("\n              <div class=\"comment\">\n                <p><i>no comments...</i></p>\n              </div>\n            ");
  }

function program24(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'valueBinding': "ID",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("comment.value"),
    'placeholder': ("add a comment..."),
    'class': ("form-control")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n              ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                ");
  hashContexts = {'disabled': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'disabled': "BOOLEAN",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'disabled': (true),
    'placeholder': ("one comment per secret..."),
    'class': ("form-control")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n              ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <button class=\"btn btn-default show-comments-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleComments", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">show comments</button>\n      ");
  return buffer;
  }

function program30(depth0,data) {
  
  
  data.buffer.push("blow the whistle");
  }

  data.buffer.push("<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":secret-index nsaCheck showComments")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "nsaCheck", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "nsaCheck", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});

Ember.TEMPLATES["messages"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"callout callout-danger\">\n    <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "failureMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "successMessage", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"callout callout-info\">\n      <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "successMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n    </div>\n  ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "failureMessage", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["privacy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>privacy policy</h1>\n<h3>what information do we collect?</h3>\n<ul>\n  <li><strong>you give it to us or give us permission:</strong>&nbsp;when you post a secret or use the Product, you voluntarily give snapsecret information. This can include your twitter account name, email address, post content and any other information you provide us. If you’re using snapsecret on your mobile device, you can also choose to provide us with location data.</li>\n  <li><strong>log data:</strong>&nbsp;when you use snapsecret, our servers automatically record information (“log data”) including information that your browser sends whenever you visit a website or your mobile app sends when you’re using it. This log data may include your Internet Protocol address, browser type and settings, the date and time of your request, how you used snapsecret, and cookie data.</li>\n  <li><strong>cookie data:</strong>&nbsp;depending on how you’re accessing our products, we may use “cookies” (a small text file sent by your computer each time you visit our website, unique to your snapsecret account or your browser), or similar technologies to record log data. When we use cookies, we may use “session” cookies (that last until you close your browser) or “persistent” cookies (that last until you or your browser delete them). For example, we may use cookies to store your language preferences or other snapsecret settings so you don‘t have to set them up every time you visit snapsecret. Some of the cookies we use are associated with your snapsecret account (including personal information about you, such as the email address you gave us), and other cookies are not.</li>\n  <li><strong>device information:</strong>&nbsp;in addition to log data, we may also collect information about the device you’re using snapsecret on, including what type of device it is, what operating system you’re using, device settings, unique device identifiers, and crash data. Whether we collect some or all of this information often depends on what type of device you’re using and its settings. For example, different types of information are available depending on whether you’re using a Mac or a PC, or an iPhone or an Android phone. To learn more about what information your device makes available to us, please also check the policies of your device manufacturer or software provider.</li>\n</ul>\n<h3>how do we use the information we collect?</h3>\n<ul>\n  <li>we use the information we collect to provide our products to you and make them better, develop new products, and protect snapsecret and our users. For example, we may log how often people use two different versions of a product, which can help us understand which version is better.</li>\n  <li>showing you ads you might be interest in.</li>\n</ul>\n<h3>how do we share the information we collect?</h3>\n<ul>\n  <li>when we have your consent. This includes sharing information with other services (like Facebook or Twitter) when you’ve chosen to link to your snapsecret account to those services or publish your activity on snapsecret to them. For example, you can choose to publish your secrets to Facebook or Twitter.</li>\n  <li>if we believe that disclosure is reasonably necessary to comply with a law, regulation or legal request; to protect the safety, rights, or property of the public, any person, or snapsecret; or to detect, prevent, or otherwise address fraud, security or technical issues.</li>\n  <li>we may also share aggregated or non-personally identifiable information with our partners or others. For example, we may tell a business using snapsecret how many people repinned something they shared, or the percentage of people who click a on pin after viewing it.</li>\n</ul>\n<h3>our Policy on Children’s Information</h3>\n<ul>\n  <li>snapsecret is not directed to children under 13. If you learn that your minor child has provided us with personal information without your consent, please contact us.</li>\n</ul>\n<h3>how do we make changes to this policy?</h3>\n<ul>\n  <li>we may change this policy from time to time, and if we do we’ll post any changes on this page. If you continue to use snapsecret after those changes are in effect, you agree to the revised policy. If the changes are significant, we may provide more prominent notice or obtain your consent as required by law.</li>\n</ul>");
  
});

Ember.TEMPLATES["terms"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>terms of service</h1>\n<h3>These Terms of Service (\"Terms\") govern your access to and use of snapsecret's website (\"Product\"). Please read these Terms carefully. By accessing or using snapsecret, you agree to be bound by these Terms and by our Privacy Policy.</h3>\n<h3>using snapsecret</h3>\n<ul>\n  <li><strong>who can use snapsecret</strong>&nbsp;you may use our Products only if you can form a binding contract with snapsecret, and only in compliance with these Terms and all applicable laws. Any use or access by anyone under the age of 13 is prohibited.</li>\n  <li><strong>our license to you</strong>&nbsp;subject to these Terms and our policies (including our Acceptable Usage Policy), we grant you a limited, non-exclusive, non-transferable, and revocable license to use our Products.</li>\n</ul>\n<h3>your content</h3>\n<ul>\n  <li><strong>posting content</strong>&nbsp;snapsecret allows you to post content, including photos, comments, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to snapsecret.</li>\n  <li><strong>how snapsecret and other users can use your content</strong>&nbsp;you grant snapsecret and its users a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use, store, display, reproduce, modify, create derivative works, perform, and distribute your User Content on snapsecret solely for the purposes of operating, developing, providing, and using the snapsecret Products. Nothing in these Terms shall restrict other legal rights snapsecret may have to User Content, for example under other licenses. We reserve the right to remove or modify User Content for any reason, including User Content that we believe violates these Terms or our policies.</li>\n  <li><strong>how long we keep your content</strong>&nbsp;we may retain your User Content for a commercially reasonable period of time for backup, archival, or audit purposes.</li>\n</ul>\n<h3>security</h3>\n<ul>\n  <li>we care about the security of our users. While we work to protect the security of your content and account, snapsecret cannot guarantee that unauthorized third parties will not be able to defeat our security measures. Please notify us immediately of any compromise or unauthorized use.</li>\n  <li><strong>third-party links</strong>&nbsp;our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by snapsecret. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from snapsecret, you do so at your own risk and you agree that snapsecret will have no liability arising from your use of or access to any third-party website, service, or content.</li>\n</ul>\n<h3>indemnity</h3>\n<ul>\n  <li>if you use our Products for commercial purposes in violation of Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless snapsecret and its officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</li>\n</ul>\n<h3>disclaimers</h3>\n<ul>\n  <li>the Products and all included content are provided on an \"as is\" basis without warranty of any kind, whether express or implied.</li>\n  <li>snapsecret takes no responsibility and assumes no liability for any User Content that you or any other user or third party posts or transmits using our Products. You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate for children, or otherwise unsuited to your purpose.</li>\n</ul>\n<h3>limitation of liability</h3>\n<ul>\n  <li>TO THE MAXIMUM EXTENT PERMITTED BY LAW, snapsecret SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PRODUCTS; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE PRODUCTS, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; OR (C) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL snapsecret'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE PRODUCTS EXCEED ONE HUNDRED U.S. DOLLARS (U.S. $100.00).</li>\n</ul>\n<h3>arbitration</h3>\n<ul>\n  <li>for any dispute you have with snapsecret, you agree to first contact us and attempt to resolve the dispute with us informally. If snapsecret has not been able to resolve the dispute with you informally, we each agree to resolve any claim, dispute, or controversy (excluding claims for injunctive or other equitable relief) arising out of or in connection with or relating to these Terms by binding arbitration by the American Arbitration Association (\"AAA\") under the Commercial Arbitration Rules and Supplementary Procedures for Consumer Related Disputes then in effect for the AAA, except as provided herein. Unless you and snapsecret agree otherwise, the arbitration will be conducted in the county where you reside. Each party will be responsible for paying any AAA filing, administrative and arbitrator fees in accordance with AAA rules, except that snapsecret will pay for your reasonable filing, administrative, and arbitrator fees if your claim for damages does not exceed $75,000 and is non-frivolous (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)). The award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys' fees and reasonable costs for expert and other witnesses, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall prevent either party from seeking injunctive or other equitable relief from the courts for matters related to data security, intellectual property or unauthorized access to the Service. ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND snapsecret ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</li>\n</ul>\n<h3>general terms</h3>\n<ul>\n  <li>Notification Procedures and changes to these Terms. snapsecret reserves the right to determine the form and means of providing notifications to you, and you agree to receive legal notices electronically if we so choose. We may revise these Terms from time to time and the most current version will always be posted on our website. If a revision, in our sole discretion, is material we will notify you. By continuing to access or use the Products after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, please stop using the Products.</li>\n</ul>\n<h3>Assignment. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by snapsecret without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.</h3>\n<h3>Entire Agreement/Severability. These Terms, together with the Privacy Policy and any amendments and any additional agreements you may enter into with snapsecret in connection with the Products, shall constitute the entire agreement between you and snapsecret concerning the Products. If any provision of these Terms is deemed invalid, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.</h3>\n<h3>No Waiver. No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and snapsecret's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</h3>");
  
});

Ember.TEMPLATES["use"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>snapsecret provides a platform to safely share whatever is on your mind. to keep snapsecret running smoothly for all of our Users, you agree that you will use the Service only in a manner consistent with the following Acceptable Use Policy.</h1>\n<h3>You agree not to post User Content that:</h3>\n<ul>\n  <li>is sexually explicit or pornographic;</li>\n  <li>creates a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to yourself, to any other person, or to any animal;</li>\n  <li>may create a risk of any other loss or damage to any person or property;</li>\n  <li>seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise;</li>\n  <li>violates, or encourages any conduct that violates laws or regulations;</li>\n  <li>contains any information or content we deem to be hateful, violent, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, threatening, profane, or otherwise objectionable;</li>\n  <li>contains any information or content that is illegal (including, without limitation, the disclosure of insider information under securities law or of another party's trade secrets);</li>\n  <li>infringes any third party's Intellectual Property Rights, privacy rights, publicity rights, or other personal or proprietary rights;</li>\n  <li>contains any information or content that you do not have a right to make available under any law or under contractual or fiduciary relationships; or</li>\n  <li>is fraudulent, false, misleading, or deceptive.</li>\n</ul>\n<h3>You agree not to engage in any of the following prohibited activities:</h3>\n<ul>\n  <li>Collect or store any personally identifiable information from the Services from other users of the Services without their express permission;</li>\n  <li>Impersonate or misrepresent your affiliation with any person or entity;</li>\n  <li>Violate any applicable law or regulation;</li>\n  <li>Encourage or enable any other individual to do any of the activities prohibited in this Acceptable Use Policy.</li>\n</ul>\n<h3>snapsecret reserves the right, but is not obligated, to remove any User Content for any reason or for no reason, including User Content that snapsecret believes violates this Acceptable Use Policy or its Terms of Service. snapsecret may also permanently or temporarily terminate or suspend a User, or their IP address, without notice and liability for any reason, including if, in snapsecret's sole determination, a User violates any provision of this Acceptable Use Policy, our Terms of Service, or for no reason.</h3>");
  
});

Ember.TEMPLATES["what"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>uh, what?</h1>\n<p>snapsecret is a website, that lets you post secrets. whatever is on your mind. leak away.</p>\n<p>secrets can be seen by anyone who visits the site, but are posted anonymously, and 'self-destruct' after 1 minute.</p>");
  
});