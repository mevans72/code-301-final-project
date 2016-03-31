(function(module) {
  var controller = {};

  controller.app = function() {
    $('.text-container').css('display', 'block');
  };

  controller.base = function (context, next) {
    $('#write-review').css('display', 'none');
    $('#review-bar').css('display', 'none');
    $('.text-container').css('display', 'none');
    next();
  };

  controller.search = function(context) {
    $('.text-container').css('display', 'block');
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
    var reviewBar = $('#review-bar');
    reviewBar.css('display', 'block');
    if (reviewBar.css('right') === '-300px') {
      reviewBar.css('right', '0px');
    } else {
      reviewBar.css('right', '0px');
    }
    var data = snapData.all[context.params.id];
    $('#review-bar h4').text(data.Store_Name);
    $('#review-bar h5').text(data.Address);

    $('#write-review-button').attr('href', '/new-review/' + context.params.id);

    fillReviews(context.params.id);
    context.save();
  };

  controller.reviewBack = function(context) {
    $('.text-container').css('display', 'block');
    if ($('#review-bar').css('right') == '0px') {
      $('#review-bar').css('right', '-300px');
    } else {
      $('#review-bar').css('right', '0px');
    }
    context.save();
  };

  controller.about = function(context) {
    $('#slide-bar').css('display', 'block');
    console.log("About is great!");
    $("#fancy-about").fancybox({
      openEffect  : 'none',
      closeEffect : 'none'
    });
    context.save();
  };

  controller.help = function(context) {
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
    $('#review-bar').css('display', 'block');
    $('#close-write-review').attr('href', '/review/' + context.params.id);
    $('#write-review input[type="hidden"]').remove();
    $('#write-review')
      .css('display', 'block')
      .append($('<input type="hidden" name="id" value="' + context.params.id + '">'));
    context.save();
  };

  module.controller = controller;
})(window);
