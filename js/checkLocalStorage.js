(function(module) {
var snapData={};
snapData.all=[];
snapData.fetchAll = function(){
  if (localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      url: '/assets/data/wa.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        //if localStorage does not have eTag or the current eTag not equal to localStorage's eTag
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;

          $.getJSON('assets/data/wa.json', function(rawData) {

            localStorage.rawData = JSON.stringify(rawData);

            snapData.all = JSON.parse(localStorage.snapData);
          });

        } else {
            snapData.all = JSON.parse(localStorage.snapData);

        }
      }
    });


  } else {
    //if the rawdata is not in localStorage, fire a ajax request to get the json file
    $.getJSON('assets/data/wa.json', function(rawData, message, xhr) {
      var eTag = xhr.getResponseHeader('eTag');
      console.log(eTag);
      localStorage.eTag = eTag;

      snapData.all = JSON.parse(localStorage.snapData);

      localStorage.rawData = JSON.stringify(rawData);

    });
  }
}

//for testing.
$(document).ready(function() {
  snapData.fetchAll();
});


module.snapData = snapData;


})(window);
