var snapData = [];

function loadSnapData(callback) {
  snapData = JSON.parse(localStorage.snapData);
  if (callback) callback();
};

function localData() {
  var snapEtag;
  $.ajax({
    type: 'HEAD',
    url: 'assets/data/wa.json',
    success: function(data, message, xhr) {
      snapEtag = xhr.getResponseHeader('etag');
      if(localStorage.snapData && localStorage.snapEtag === snapEtag) {
        snapData = JSON.parse(localStorage.snapData);
        // loadSnapData();
      }
      if (!localStorage.snapData || localStorage.snapEtag !== snapEtag) {
        $.getJSON('assets/data/wa.json', function(data) {
          localStorage.snapData = JSON.stringify(data);
          localStorage.snapEtag = snapEtag;
          snapData = JSON.parse(localStorage.snapData);
          // loadSnapData();
        });
      }
    }

  });
};

$(document).ready(function() {
  localData();
});
