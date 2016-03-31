(function(module) {
  var content = [];

  function About(opts) {
    Object.keys(opts).forEach(function(property, keys) {
      this[property] = opts[property]
    }, this);
  }

  About.prototype.toHtml = function() {
    var source = $('#about-template').html()
    var template = Handlebars.compile(source);

    return template(this);
  }

  About.aboutUsData.forEach(function(ele) {
    projectContent.push(new Portfolio(ele));
  })

  content.forEach(function(a){
    $('#aboutus').append(a.toHtml())
  });
})(window)
