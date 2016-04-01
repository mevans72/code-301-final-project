page('/', controller.base, controller.app);
page('/review/:id', controller.base, controller.app, controller.review);
page('/new-review/:id', controller.base,controller.app, controller.newReview);
page('/search', controller.base,controller.app, controller.search);
page('/review-back', controller.base, controller.app, controller.reviewBack);
page('/purpose', controller.base, controller.app, controller.purpose);
page('/help', controller.base, controller.app, controller.help);
page('/resources', controller.base, controller.app, controller.resources);

page();
