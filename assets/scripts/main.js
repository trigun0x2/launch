
/***********************************************************************************
  
Animations
  
************************************************************************************/

jQuery(document).ready(function($) {
	$(function() {
		$('#header').delay(100).fadeIn(1000);
		$('#intro').delay(300).fadeIn(500);
	});

  $('.deck-link').click(function(){
    $(this).parent().find(".decks").slideToggle();
  });
});

/***********************************************************************************
  
User Schedule
  
************************************************************************************/

// jQuery(document).ready(function($) {
//     var easter_egg = new Konami();
//     easter_egg.code = function() { 
//         alert("Congrats on making it to the Challenger's League!")
//         $('#player').slideDown(); 
//     }
//     easter_egg.load();

//     $("#code").submit(function (event) {
//         event.preventDefault();
//         code = $("#codebox").val();
//         if (code == "QQZW") {
//             $(".schedule").slideDown();
//             $(".player-groups").fadeOut();
//         }
//     })
// });