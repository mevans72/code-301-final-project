(function (module) {
  var cb, firebaseUrl = 'https://snaptoit.firebaseio.com/';

  var reviews = [];

  function getReviews(id) {
    return reviews;
  }

  function newRef(cb) {
    var ref = new Firebase(firebaseUrl);

    ref.on('value', function (snapshot) {
      var val = snapshot.val(),
        values = [];
      for (k in val) {
        values.push(val[k]);
      }
      cb(values);
    });

    return function (review) {
      ref.push(review);
    };
  }

  var pushReview = newRef(function (newReviews) {
    reviews = newReviews;
  });

  module.reviews = {
    get: getReviews,
    push: pushReview
  };
})(window);
