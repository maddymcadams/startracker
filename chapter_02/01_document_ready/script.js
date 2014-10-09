$(document).ready(function(){
  console.log("OMG JAVASCRIPT");
  $('#celebs tbody tr:even').addClass('zebra');


	$('#toggleButton').click(function(){
		$('#disclaimer').toggle();
		if($('#disclaimer').is(':visible')) {
			//if true
			$(this).val('Show less!')
			//this (=#toggleButon) value will be changed
			//to hide
		}
		else {
			$(this).val('Show more!');
			//if false change value to show
		}
	})

	$("input type='button' id='toggleButton' value='Click to hide or show disclaimer!'/>").insertAfter('#disclaimer');

	$('#toggleButton').click(function(){
		$('disclaimer').toggle();
	})

});