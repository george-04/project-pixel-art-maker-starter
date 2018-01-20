// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// defining variables

var rowNumber = $('#input_height').val();
var colNumber = $('#input_width').val();
var table = $('#pixel_canvas');

table.children().remove();

// adding rows
	for(var i = 0; i < rowNumber; i++) {
		table.append("<tr></tr>");

		//adding columns
		for (var j = 0; j < colNumber; j++) {
			table.children().last().append("<td></td>");
		}
	}

// Event Listener table cell click
	table.children().on('click', 'td', function() {
		var color = $("input[type='color']").val();
		$(this).attr('bgcolor', color);
	});

// Event Listener table cell doubleclick
	table.children().on('dblclick', 'td', function() {
		$(this).attr('bgcolor', 'transparent');
	});

}

//Event listener for Submit button click

$("input[type='submit']").click(function(e){
	e.preventDefault();
	makeGrid();
});
