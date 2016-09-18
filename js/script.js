"use strict";
const Converter = require("csvtojson").Converter;
const converter = new Converter({});
require("fs")
	.createReadStream("/Users/nyxnaut/code/restaurant-roulette/db/df_NYC.csv")
	.pipe(converter);

$(function(){

  $('.search').on('click', function(el){
    el.preventDefault();

    var zipCheck = getZipcodeAndCheck();
    if (zipCheck === "error"){
      console.log("error");
      appendMessage({error: true});
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
      // appendMessage(JSON obj)
    }
  });

  var appendMessage = function(obj){
    if (obj.error){
      var $div = $('<div class="zip"> Invalid Zipcode </div>');
      var $display = $('.display-area');
      $display.append($div);
      $('.search').hide();
    } else {
      // function:: random location that will is working on
      // messaging from the restaurant
    };
    var resetButton = $('<button class="reset">Reset</div>');
    $('.one-button').append(resetButton);
    $('.reset').on('click', function(){
      resetEverything();
    });

  };

  var resetEverything = function(){
    $('.zipcode').val("");
    $('.display-area').children().remove();
    $('.reset').remove();
    $('.search').show();
  };

  var getZipcodeAndCheck = function(){
    var re = /^\d{5}?$/
    var $zipcode = $('.zipcode').val();
    return ($zipcode.match(re) === null) ? "error": $zipcode;
  };

  $('.reset').on('click', resetEverything());

});
