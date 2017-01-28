// click function on light switch
// toggle classes switch-on and swith-off on lightswitch
// toogle body  a class of light-off


$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){



	if (lights == 'on') {
		lights = 'off';
		$('#lightswitch').html('OFF');
	}	
	else if (lights == 'off') {
		lights = 'on';
		$('#lightswitch').html('ON');
	}

	$('#lightswitch').toggleClass('switch-on');
	$('#lightswitch').toggleClass('switch-off');
	$('body').toggleClass('lights-off');



	// if (lights == 'on') {
	// 	console.log('lights on');
	// 	lights = 'off';
	// 	$('#lightswitch').addClass('switch-off');
	// 	$('#lightswitch').removeClass('switch-on');
	// 	$('#lightswitch').html('OFF');
	// 	$('body').addClass('lights-off');
	// }

	// else {
	// 	console.log('lights off');
	// 	lights = 'on';
	// 	$('#lightswitch').removeClass('switch-off');
	// 	$('#lightswitch').addClass('switch-on');
	// 	$('#lightswitch').html('ON');
	// 	$('body').removeClass('lights-off');
	// }
		})

})

