(function(module) {

  var content = [];

  function About(opts) {

    Object.keys(opts).forEach(function(property, keys) {
      this[property] = opts[property];
    }, this);
  }

  About.prototype.toHtml = function() {
    var source = $('#tab-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  var projectContent = [], Portfolio;

  aboutUsData.forEach(function(ele) {
    content.push(new About(ele));
  });

  content.forEach(function(a){
    $('#template').append(a.toHtml());
  });
})(window);
