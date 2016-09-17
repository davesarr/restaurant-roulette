$(function(){

  $('.search').on('click', function(el){
    el.preventDefault();

    var zipCheck = getZipcodeAndCheck();
    if (zipCheck === "error"){
      console.log("error");
      // error message
      // post in display-area
    }
    else
    {
      console.log('success: ', zipCheck);
      // randomize length of restaurant array and return one restaurant
      // post to display-area
    }




  });

  var resetEverything = function(){
    // reset search bar
    // reset display-area
  };

  var getZipcodeAndCheck = function(){
    var re = /^\d{5}?$/
    var $zipcode = $('.zipcode').val();

    return ($zipcode.match(re) === null) ? "error": $zipcode;
  };


});
