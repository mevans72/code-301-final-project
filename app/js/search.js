google.maps.event.addDomListener(window, 'load', function(){
  $(".search-bar input").autocomplete({
    source: snapData.all.map(function(s){
      return s.Store_Name
    }),
    // focus: function( event, ui ) {
      // console.log(ui);
      //  $( "#project" ).val( ui.item.label );
      // return false;
    // },
    // select: function( event, ui ) {
      // console.log('select' + ui);
      //  $( "#project" ).val( ui.item.label );
      //  $( "#project-id" ).val( ui.item.value );
      //  $( "#project-description" ).html( ui.item.desc );
      //  $( "#project-icon" ).attr( "src", "images/" + ui.item.icon );

      // return false;
    // }
  })
  .autocomplete( "instance" )._renderItem = function( ul, item ) {
    return $( "<li>" )
    .append( "<a>" + item.label + "</a>" )
    .appendTo( ul );
  };
});
