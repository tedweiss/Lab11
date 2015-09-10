
var $formContainer = $("#reservationForm");

var $seatContainer = $("#seats");

var theatre = {
	name: 'Grand Circus Theatre',
	numberOfSeats: 24
}


$(document).ready(function(){
 
 

$('.seat').click(function(){
	
	$('.reservationForm').show();
	$(this).toggleClass('seatSelected');
});



}); 