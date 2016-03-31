page('/', controller.base, controller.app);

page('/review/:id', controller.base, controller.review);
page('/new-review/:id', controller.base, controller.newReview);

page('/search', controller.base, controller.search);
page('/review-back', controller.base, controller.reviewBack);
page('/about', controller.base, controller.about);
page('/help', controller.base, controller.help);
page('/resources', controller.base, controller.resources);

page();
