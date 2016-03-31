(function(module) {
  var controller = {};

  controller.app = function() {};

  controller.base = function (context, next) {
    $('#write-review').css('display', 'none');
    next();
  }

  controller.search = function(context) {
    // e.preventDefault();
    if ($('#slide-bar').css('right') == '0px') {
      $('#slide-bar').css('right', '-300px');
      $('#review-bar').css('right', '-300px');
      $(this).find('a').attr("href", "/search/");
    } else {
      $('#slide-bar').css('right', '0px');
      $(this).find('a').attr("href", "/");
    }
    context.save();
  };

  controller.review = function(context) {
    if ($('#review-bar').css('right') === '-300px') {
      $('#review-bar').css('right', '0px');
    } else {
      $('#review-bar').css('right', '0px');
    }
    context.save();
  };

  controller.reviewBack = function(context) {
    if ($('#review-bar').css('right') == '0px') {
      $('#review-bar').css('right', '-300px');
    } else {
      $('#review-bar').css('right', '0px');
    }
    context.save();
  };

  controller.about = function(context) {
    console.log("About is great!");
    $("#fancy-about").fancybox({
      openEffect: 'none',
      closeEffect: 'none'
    });
    context.save();
  };

  controller.help = function(context) {
    console.log("Help is great!");
    if ($('#fancy-help').css('display') !== 'visible') {
      $('#ancy-help').show();
    } else {
      $('#ancy-help').hide();
    }
    context.save();
  };

  controller.resources = function(context) {
    console.log("Help is great!");
    if ($('#fancy-resources').css('display') !== 'visible') {
      $('#ancy-resources').show();
    } else {
      $('#ancy-resources').hide();
    }
    context.save();
  };

  controller.newReview = function (context) {
    $('#write-review').css('display', 'block');
  }

  module.controller = controller;
})(window);
