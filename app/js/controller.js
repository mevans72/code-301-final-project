(function(module) {
  var controller = {};

  controller.app = function() {};

  controller.base = function (context, next) {
    $('#write-review').css('display', 'none');

    next();
  };

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

  controller.purpose = function() {
    console.log("About is great!");

    $('aboutus').fadeIn();

    // $('#signin-dropdown').click(function(e) {
    // e.stopPropagation();
  // });
  };

  controller.help = function() {
    console.log("Help is great!");
    $("#fancy-help").fancybox({
      openEffect  : 'none',
      closeEffect : 'none'
    });
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false
    });
  };

  controller.resources = function() {
    console.log("Resources are great!");
    $("#fancy-resources").fancybox({
      openEffect  : 'none',
      closeEffect : 'none'
    });
  };

  controller.newReview = function () {
    $('#write-review').css('display', 'block');
  };

  module.controller = controller;
})(window);
