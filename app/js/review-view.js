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
    var results = reviews.get(id);
    results.filter(function(review) {
      return review.id == id;
    }).forEach(function(review) {
      reviewSection.append(fillReview(review));
    });
  }

  function getInput(id) {
    return {
      id: id,
      name: $('#write-review input[type="text"]').val(),
      rating: parseInt($('#write-review select').val()),
      body: $('#write-review textarea').val()
    };
  }

  function initReviews() {
    $('#write-review button').on('click', function(){
      reviews.push(getInput($('#write-review input[name="id"]').val()));
    });
  }

  module.initReviews = initReviews;
  module.fillReviews = fillReviewsForId;
})(window);
