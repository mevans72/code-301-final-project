$(document).ready(function() {
	$("a#fancy-resources").fancybox(

    '<section id="resources"><h1>Online Resources</h1><ul><li><a href="http://www.fns.usda.gov/snap/fact-sheet-resources-income-and-benefits">Are you eligible?</a></li><li><a href="http://www.extension.iastate.edu/foodsavings/">Eat Smart, Save Money</a></li><li><a href="http://www.choosemyplate.gov/budget">Eating on a Budget</a></li><li><a href="http://spock.fcs.uga.edu/ext/pubs/fdns/efnep/FDNS-NE-207a.pdf">Top Notch Menus</a></li><li><a href="http://www.whatscooking.fns.usda.gov/search/solr-results/im_field_term_program/supplemental-nutrition-assistance-program-snap-162">Nutritional Facts</a></li><li><a href="http://www.choosemyplate.gov/">Low Cost Recipes</a></li><li><a href="https://snaped.fns.usda.gov/nutrition-through-the-seasons">Food through the Seasons</a></li><li><a href="http://www.seattlejobsinitiative.com/innovations/">Research</a></li></ul></section>',

    {
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		    :	600,
		'speedOut'		  :	200,
		'overlayShow'	  :	false
	});

  $('a#fancy-about').fancybox(
    '<section id="aboutus" class="tab-content"><article class="template" data-category="bio"><h1></h1><h2>Our Mission/Goal/Purpose</h2> <p>SNAP, or the Supplemental Nutrition Assistance Program, provides millions of low­income individuals with economic assistance across the country. Affording to keep food on the table all month isn\'t always easy. A lot of us just don\'t make enough money, whether it\'s that we can\'t get the hours we need, the areas we live are becoming unaffordable, or we just don\'t quite have that dream job yet doesn\'t matter. What matters is that we have access to these opportunities and resources that can help guide us to good decisions.</p><p>While there are resources out there to help people with SNAP, they are often clunky and scattered. We aim to provide a functional, user­friendly, and modern service so that users can find retailers, compare pricing, and learn about nutrition and shopping strategies.</p><div class="byline"></div></article></section>',
    {
      'transitionIn'	:	'elastic',
  		'transitionOut'	:	'elastic',
  		'speedIn'		    :	600,
  		'speedOut'		  :	200,
  		'overlayShow'	  :	false
    });

  $('a#help').fancybox(
    '<ul class="bxslider"><li><img src="/images/pic1.jpg" /></li><li><img src="/images/pic2.jpg" /></li><li><img src="/images/pic3.jpg" /></li><li><img src="/images/pic4.jpg"/></li></ul>',

    {
      'transitionIn'	:	'elastic',
  		'transitionOut'	:	'elastic',
  		'speedIn'		    :	600,
  		'speedOut'		  :	200,
  		'overlayShow'	  :	false
    });
});
