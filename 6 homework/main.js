var submitButton = document.getElementById("Create"); 
var form = document.getElementById("target"); 
var MyButton = document.getElementById('Create'); 
var x, y;

form.addEventListener('change',inputXY); 

function inputXY(){
  x = form.elements.x.value;
  y = form.elements.y.value;
  if(x<11 && x>0 && y<11 && y>0){
        MyButton.disabled = false;
    } else { 
       MyButton.disabled = true; 
  }
}


var table = document.createElement("table"); 

table.addEventListener('mouseenter', function() {
  console.log(table.rows)
  for (var i = 0, row; row = table.rows[i]; i++) {
   for (var j = 0, col; col = row.cells[j]; j++) {
    if(col.className === "black") {
      col.className = "white"
    } else {
      col.className = "black"; 
    }
   }  
}
})

submitButton.onclick = function() {
    for (var i = 0; i < x; i++) { 
        var tr = document.createElement('tr'); 
            for (var j = 0; j < y; j++) { 
var td = document.createElement('td');           
if (i%2 == j%2) { 
td.className = "black"; 
}
tr.appendChild(td); 
} 
table.appendChild(tr); 
} 
document.body.appendChild(table);
}