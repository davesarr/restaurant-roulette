"use strict";
const Converter = require("csvtojson").Converter;
const converter = new Converter({});
require("fs")
	.createReadStream("/Users/nyxnaut/code/restaurant-roulette/db/df_NYC.csv")
	.pipe(converter);



//read from file 
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
			converter.on("end_parsed", function(jsonArray) {
				debugger;
				var restaurantsMatchingZipcode = jsonArray.filter( function( el ){
					
				});
				var randomIndex = Math.floor(
					Math.Random()*restaurantsMatchingZipcode.length
				);
				var restaurant = restaurantsMatchingZipcode[randomIndex];
			});

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
