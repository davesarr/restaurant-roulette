"use strict";
const Converter = require("csvtojson").Converter;

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
			const converter = new Converter({});
			converter.fromFile("/Users/nyxnaut/code/restaurant-roulette/db/df_NYC.csv"
				,function(err,result){
				var restaurantsMatchingZipcode = result.filter( function( el ){
					if ( el['ZIP'].toString() === zipCheck ) {
						return true;
					}
				});
				var randomIndex = Math.floor(
					Math.random()*restaurantsMatchingZipcode.length
				);
				var restaurant = restaurantsMatchingZipcode[randomIndex];
				restaurant.error = false;
				appendMessage( restaurant );
			});
		}
	});

  var appendMessage = function(obj){
    if (obj.error){
      var $div = $('<div class="zip"> Invalid Zipcode </div>');
      var $display = $('.display-area');
      $display.append($div);
      $('.search').hide();
    } else {
			var $display = $('.display-area');
			var $name = $('<h3 class="name">' + obj.name + '</h3>');
			var $cuisine = $('<h5 class="cuisine">' + obj.cuisine + '</h5>');
			var $blurb = $('<p class="blurb">' + obj.blurb + '</p>');
			$display.append($name);
			$display.append($cuisine);
			$display.append($blurb);
      $('.search').hide();
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
