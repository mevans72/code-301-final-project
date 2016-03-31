(function (module) {
  module.reviews = [];

  function getReviews(id) {
    // TODO: replace with call to firebase
    return [{
      name: 'a',
      body: "it's ok",
      rating: 3
    }, {
      name: 'b',
      body: "it's good",
      rating: 5
    }, {
      name: 'c',
      body: "it's bad",
      rating: 5
    }];
  }

  module.reviews = {
    get: getReviews
  };
})(window);
