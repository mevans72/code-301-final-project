$(document).ready(function() {
  $('.resources-button').click(function(e) {
    $('#resources').fadeIn();
  });
  $('#resources').click(function(e){
    e.stopPropagation();
  });
  $(document).click(function() {
    $('#resources').fadeOut();
  });
});



  $('.purpose-button').click(function(e) {
    console.log('close');
    e.stopPropagation();
    $('#purposeus').fadeOut();
  });
  $(document).click(function() {
    $('#purposeus').fadeOut();
  });
  $('.purpose-button').click(function(e) {
    e.preventDefault();
    $('#purposeus').fadeIn();
  });



  $('.help-button').click(function(e) {
    console.log('close');
    e.stopPropagation();
    $('#help').fadeOut();
  });
  $(document).click(function() {
    $('#help').fadeOut();
  });
  $('.help-button').click(function(e) {
    e.preventDefault();
    $('#help').fadeIn();

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false
    });
  });
