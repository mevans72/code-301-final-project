(function (module) {
  var snapData = {};

  function loadSnapData(callback) {
    snapData.all = JSON.parse(localStorage.snapData);
    if (callback) callback();
  };

  function localData(callback) {
    var snapEtag;
    $.ajax({
      type: 'HEAD',
      url: '/assets/data/wa.json',
      success: function(data, message, xhr) {
        snapEtag = xhr.getResponseHeader('etag');
        if(localStorage.snapData && localStorage.snapEtag === snapEtag) {
          snapData.all = JSON.parse(localStorage.snapData);
          snapData.all.forEach(function (place, i) {
            place.id = i;
          });
          callback();
        }
        if (!localStorage.snapData || localStorage.snapEtag !== snapEtag) {
          $.getJSON('/assets/data/wa.json', function(data) {
            localStorage.snapData = JSON.stringify(data);
            localStorage.snapEtag = snapEtag;
            snapData.all = JSON.parse(localStorage.snapData);
            callback();
          });
        }
      }
    });
  };

  module.localData = localData;
  module.snapData = snapData;
})(window);
