(function(module) {
  var storeListView = {};



  var render = Handlebars.compile($('#storeListView-template').text());

  storeListView.index = function() {
    $('#map .slide-bar .text-container').empty();

    $('#map .slide-bar .text-container').append(
      // repos.with('name').map(render)
    );
  };

  module.storeListView = storeListView;
})(window);
