(function (module) {
  var template;

  function fillReview(review) {
    review.stars = $('<span>');
    for(var i = 0; i < review.rating; i++) {
      review.stars.append($('<span class="icon-star-full"></span>'));
    }
    return template(review);
  }

  function fillReviewsForId(id) {
    var reviewSection = $('#review-section');
    module.reviews.get(id).forEach(function(r) {
      reviewSection.append(fillReview(r));
    });
  }

  $(document).ready(function () {
    template = Handlebars.compile($('#review-template'));
  });
})(window);
