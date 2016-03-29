
$('#before').on('click',function(){

  if ($('#slide-bar').css('right')=='0px'){
    console.log('0');
    $('#slide-bar').css('right','-300px');
  }else{
console.log('-300');
    $('#slide-bar').css('right','0px');
  }
})
