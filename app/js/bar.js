$('#before').on('click', function() {
  if ($('#slide-bar').css('right') == '0px') {
    $('#slide-bar').css('right', '-300px');
  } else {
    $('#slide-bar').css('right', '0px');
  }
});

// $('#slide-bar .text-section').on('click', '.text-container',function(){
//   console.log('mouseenter');
// })
// $('#slide-bar').find('.text-container').on('mouseleave', function(){
//   $(this).find('h4').css('color','rgb(45, 45, 45)');
// })
