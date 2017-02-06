// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme



$(document).ready(function () {

	$('#clickme').click(function(){
	
		
		var newItem = '<li>' + $('#item').val() + '</li>';

	// $('#list').append(newItem);

	// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (hint: use an if/else statement)

		if (newItem == '<li></li>') {
		alert('Please enter an item');
		}

		else {

		appendItem (newItem);

		$('#item').val('').focus().css('outline-width', 'medium').css('outline-style', 'solid');
		
		
		}
	})


// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is 
// called when #clickme is clicked and appends the <li> to #list


	function appendItem (item) {
	
	$('#list').append(item);
	}




// Bonus: Focus on #item after the item is added (hint: look up "jquery focus")

	
	// $('#item').focus(function(){
	// 		$(this).css('outline-width', 'medium').css('outline-style', 'solid');
	// 	})


	// $('#item').blur(function(){
	// 	$(this).removeAttr('style');
	// 	// $(this).css({'outline-width':''});
	// })



// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())


	$('ul').on('click', 'li', function(){
		$(this).remove();
		$('#item').blur().removeAttr('style');
	})






	// 1. Attach a .click() event to #clickme; attach an anonymous function to the .click()
	// 1A. This anonymous function should create a variable, newItem equal to the value of #item
	// 1B. This anonymous function should call a separate function, appendItem, and pass it the variable newItem
	// 1C. This anonymous function should then clear the text inside of #item

	// 2. Write the appendItem function here
})
