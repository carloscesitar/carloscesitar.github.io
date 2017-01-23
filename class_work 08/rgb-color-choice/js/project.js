
	var colorButton = document.getElementById("color-button");

	colorButton.onclick = changeColor;

	function changeColor () {

	
	var red = document.getElementById('red').value;
	red = parseInt(red);

	
	var green = document.getElementById('green').value;
	green = parseInt(green);

	var blue = document.getElementById('blue').value;
	blue = parseInt(blue);

	 var colorStr = 'rgb(' + red + ',' + green + ',' + blue + ')';


	document.getElementById("colorful-text").innerHTML = colorStr; 


	document.getElementById("wrapper").style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
	
	
	if (red > 255) {
		document.getElementById("colorful-text").innerHTML = 'Each RGB value has to be < 256'; 
		document.getElementById("wrapper").style.backgroundColor = 'rgb(0,0,0)';
	}

	if (blue > 255) {
		document.getElementById("colorful-text").innerHTML = 'Each RGB value has to be < 256'; 
		document.getElementById("wrapper").style.backgroundColor = 'rgb(0,0,0)';
	}	

	if (green > 255) {
		document.getElementById("colorful-text").innerHTML = 'Each RGB value has to be < 256'; 
		document.getElementById("wrapper").style.backgroundColor = 'rgb(0,0,0)';
	}

}



// // 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// // rgb(x, y, z)
// // - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

	


// // 5. Use .innerHTML to change the text inside of #colorful-text to colorStr




// // 6. Use .style.background to change the background of #wrapper to colorStr
















