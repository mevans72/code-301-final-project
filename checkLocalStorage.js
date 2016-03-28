var snapData = [];

function loadSnapData() {
  snapData = JSON.parse(localStorage.snapData);
};


function localData(context, next) {
  var snapEtag;
  $.ajax({
    type: 'HEAD',
    url: 'assets/data/wa.json',
    success: function(data, message, xhr) {
      snapEtag = xhr.getResponseHeader('snapEtag');
      if(localStorage.snapData && localStorage.snapEtag === snapEtag) {
        loadSnapData();
      }
      if (!localStorage.snapEtag || localStorage.snapEtag !== snapEtag) {
        localStorage.snapEtag = snapEtag;
      }
      if (!localStorage.snapData || localStorage.snapEtag !== snapEtag) {
        $.getJSON('assets/data/wa.json', function(snapData) {
          localStorage.snapData = JSON.stringify(snapData);
          loadSnapData();
        });
      }
      // next();
    }
  });
};
