// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
function makeGrid() {
	//call delete table function 
	deleteTable();

	var rows = parseInt(document.getElementById("inputHeight").value);
	var columns = parseInt(document.getElementById("inputWeight").value);

		// get the reference for the table
		var myTable = document.getElementsByTagName("table")[0];
		// create <tbody> elements
		var mytablebody = document.createElement("tbody");
		
		  for(var j = 0; j < (rows); j++) {
		      // creates a <tr> element
		      mycurrent_row = document.createElement("tr");

		      for(var i = 0; i < (columns); i++) {
		          // creates a <td> element
		          mycurrent_cell = document.createElement("td");
		          //make cells to listen to click event
		          mycurrent_cell.onclick = function(){
		          	//get colour selected from colour picker
		          	var pickerColor = document.getElementById("colorPicker").value;
		          	//get table background color
		          	var tableBg = document.getElementById("pixelCanvas").style.backgroundColor;
		          	// set cell colour to selected colour
		          	this.style.background === tableBg ? (this.style.background = pickerColor) : (this.style.background = tableBg);
		          }

		          // creates a Text Node
		          currenttext = document.createTextNode("");
		          // appends the Text Node we created into the cell <td>
		          mycurrent_cell.appendChild(currenttext);
		          // appends the cell <td> into the row <tr>
		          mycurrent_row.appendChild(mycurrent_cell);
		      }
		      // appends the row <tr> into <tbody>
		      mytablebody.appendChild(mycurrent_row);
		  }

		// appends <tbody> into <table>
		myTable.appendChild(mytablebody);
}


//function to delete table rows with a while loop
function deleteTable(){
	var myTable = document.getElementById("pixelCanvas");
	var rowCount = myTable.rows.length;
	//alert(rowCount);
	while (rowCount>0) {
	   myTable.deleteRow(rowCount-1);
	   rowCount--
	}
}

