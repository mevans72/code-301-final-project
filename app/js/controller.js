(function(module) {
  var controller = {};

  controller.app = function() {
    console.log("Our app is great!");
  };
  controller.search = function() {
    $('#before').on('click', function(e) {
      // e.preventDefault();
      if ($('#slide-bar').css('right') == '0px') {
        $('#slide-bar').css('right', '-300px');
        $('#review-bar').css('right', '-300px');
        $(this).find('a').attr("href","/search/");
      } else {
        $('#slide-bar').css('right', '0px');
        $(this).find('a').attr("href","/");
      }
    });
  };
  controller.reviewBack = function() {
    console.log("Reviews are great!");
    $('#review-back').on('click', function(e) {
      // e.preventDefault();
      if ($('#review-bar').css('right') == '0px') {
        $('#review-bar').css('right', '-300px');
        // $(this).find('a').attr("href","/app/");
      } else {
        $('#review-bar').css('right', '0px');
        // $(this).find('a').attr("href","/review/");
        // #review-bar > div > div.col-4 > a
      }
    });
  };
  controller.about = function() {
    console.log("About is great!");
    if ($('#fancy-about').css('display') !== 'visible') {
      $('#fancy-about').show();
    } else {
      $('#fancy-about').hide();
    }
  };
  controller.help = function() {
    console.log("Help is great!");
    if ($('#fancy-help').css('display') !== 'visible') {
      $('#ancy-help').show();
    } else {
      $('#ancy-help').hide();
    }
  };
  controller.resources = function() {
    console.log("Help is great!");
    if ($('#fancy-resources').css('display') !== 'visible') {
      $('#ancy-resources').show();
    } else {
      $('#ancy-resources').hide();
    }
  };

  module.controller = controller;
})(window);
