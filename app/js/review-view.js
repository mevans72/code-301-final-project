(function (module) {
  function stars(rating) {
    var stars = '<span>';
    for(var i = 0; i < rating; i++) {
      stars += '<span class="icon-star-full"></span>';
    }
    stars += '</span>';
    return stars;
  }

  function fillReview(review) {
    review.stars = stars(review.rating);
    return Handlebars.compile($('#review-template').text())(review);
  }

  function fillReviewsForId(id) {
    var reviewSection = $('#reviews');
    reviewSection.html('');
    reviews.get(id).forEach(function(r) {
      reviewSection.append(fillReview(r));
    });
  }

  module.fillReviews = fillReviewsForId;
})(window);
