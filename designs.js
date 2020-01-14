
// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
  makeGrid(16,16);
});

function makeGrid(rows, cols) {
  var table = "<table>";
  var size = (1 / rows * 525) + "px"; {

    for (i=0; i<rows; i++) {
      table += "<tr>";
      for (j=0; j<cols; j++) {
        table += "<td>"+"</td>";
      }
      table += "</tr>";
    }
    table += "</table>";
    
    $("#pixelCanvas").empty().append(table);
    $("tr").css("height", size);
    $("td").css("color", "red").css("width", size);
  }
// Your code goes here!

}
