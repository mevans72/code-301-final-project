(function (module) {
  var cb, firebaseUrl = 'https://code-301-final-project-2.firebaseio.com/';

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

    return function (id, review) {
      ref.child(id).push(review);
    };
  }

  var pushReview =  newRef(function (newReviews) {
    reviews = newReviews;
  });

  module.reviews = {
    get: getReviews,
    push: pushReview
  };
})(window);
