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

  };

  controller.help = function() {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false
    });
  };

  controller.resources = function() {
  };

  controller.newReview = function () {
    $('#write-review').css('display', 'block');
  };

  module.controller = controller;
})(window);
