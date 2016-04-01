$(document).ready(function() {

  $('.resources-button').click(function(e) {
    $('#resources').fadeIn();
    $('#purposeus').fadeOut();
    $('#help').fadeOut();
  });

  $('#resources').click(function(e) {
    $('#resources').fadeOut();
  });

  $('.purpose-button').click(function(e) {
    $('#purposeus').fadeIn();
    $('#resources').fadeOut();
    $('#help').fadeOut();
  });

  $('#purposeus').click(function(e) {
    $('#purposeus').fadeOut();
  });

  $('.help-button').click(function(e) {
    $('#help').fadeIn();
    $('#resources').fadeOut();
    $('#purposeus').fadeOut();
  });

  $('#help').click(function(e) {
    $('#help').fadeOut();
  });
});
