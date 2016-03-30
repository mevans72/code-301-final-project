(function(module) {
  var controller = {};

  controller.app = function() {};

  controller.search = function() {
    // e.preventDefault();
    if ($('#slide-bar').css('right') == '0px') {
      $('#slide-bar').css('right', '-300px');
      $('#review-bar').css('right', '-300px');
      $(this).find('a').attr("href", "/search/");
    } else {
      $('#slide-bar').css('right', '0px');
      $(this).find('a').attr("href", "/");
    }
  };

  controller.review = function() {
    if ($('#review-bar').css('right') === '-300px') {
      $('#review-bar').css('right', '0px');
    } else {
      $('#review-bar').css('right', '0px');
    }
  };
  controller.reviewBack = function() {
    if ($('#review-bar').css('right') == '0px') {
      $('#review-bar').css('right', '-300px');
    } else {
      $('#review-bar').css('right', '0px');
    }
  };

  controller.about = function() {
    console.log("About is great!");
    $("#fancy-about").fancybox({
      openEffect: 'none',
      closeEffect: 'none'
    });
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
