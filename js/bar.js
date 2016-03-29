$('#before').on('click', function() {
  if ($('#slide-bar').css('right') == '0px') {
    $('#slide-bar').css('right', '-300px');
  } else {
    $('#slide-bar').css('right', '0px');
  }
});
