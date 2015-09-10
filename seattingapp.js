$(document).ready(function(){
 
	 
	var $currentSeat = {};

	$('.seat').click(function(){
		
		$('.reservationForm').show();
		$(this).toggleClass('seatSelected');
		$currentSeat = $(this);
	});

	$('.seatSelected').mouseover(function(){
		console.log("yay")
	});

	$('button').click(function() {
		console.log("hi mom");
		var seatName = $("#exampleInputName2").val();
		alert ("This seat is reserved for " + seatName);
		$currentSeat.patronName=seatName;
		$currentSeat.hover(function(){
			$currentSeat.children().after($currentSeat.patronName);
		}, function(){
			$currentSeat.children().remove($currentSeat.patronName)

		});
	});

}); 