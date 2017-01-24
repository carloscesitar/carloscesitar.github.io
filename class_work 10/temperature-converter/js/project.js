

$("#button").click(function(){


	if (($('#item').val()==='Celsius')) {
		var data = parseInt($('#put-your-temperature').val());
		data = ((data*9)/5) + 32;
		$('p').html($('#put-your-temperature').val() + ' degrees Celsius equals ' + data + ' degrees Fahrenheit');
		$('body').css('background-image', 'url(https://fromthedeskofmardrag.files.wordpress.com/2014/01/thur-3.jpg)');
	}

	else {
		var data = parseInt($('#put-your-temperature').val());
		data = ((data-32)*5)/9;
		$('p').html($('#put-your-temperature').val() + ' degrees Fahrenheit equals ' + data + ' degrees Celsius');
		$('body').css('background-image', 'url(https://fromthedeskofmardrag.files.wordpress.com/2014/01/thur-3.jpg)');
	}
});

