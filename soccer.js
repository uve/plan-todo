

  
Raphael.fn.hexagon = function(move_x, move_y, radius, fill) {
   

  var path = ""
  for (var i = 0; i <= 6; i++) {
    var a = i * 60,
        x = radius * Math.cos(a * Math.PI / 180) + move_x,
        y = radius * Math.sin(a * Math.PI / 180) + move_y
    path += (i == 0 ? "M" : "L") + x + "," + y
  }

  path += "Z";
  return this.path(path);

}

function draw_soccer(){

	size_x = 583;
	size_y = 827;
		
	R = 50;
	r = Math.sqrt(3)*R/2;
	
	background = "#FFF";
	stroke_color = "#000";
	stroke_width = 1;
	


	var container = document.getElementById('soccer-page');
		
    paper = Raphael(container, size_x, size_y);
	
	var rect = paper.rect(0, 0, size_x, size_y);

	rect.attr("fill", background);

        rect.strokeStyle = stroke_color;
       
	rect.attr("stroke-width", "1");

	x1 = 0;

	y1 = 0;

	var path = null;

	for (var i=0; i<size_y/R; i++){
	 
	
	  for (var j=0; j<size_x/r; j++){
		  path = paper.hexagon(x1 + j*(3/2)*R, y1 + i*(2*r) + (j%2)*r, R);	
		  path.attr("stroke",       stroke_color);
		  path.attr("stroke-width", stroke_width);
		  path.attr("fill",         "#fff");

		    

		  	if (j%2 == 0){

			    if (i%3 == 0){
				path.attr("fill",   "#000");			
			    }   
                            else path.attr("fill",    "#fff");                         
            		}else{
			    if (i%3 == 1){
				path.attr("fill",   "#000");			
			    }   
                            else path.attr("fill",    "#fff");                         

    	     	     }		  
	   }
 	}
}


