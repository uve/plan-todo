

function draw_basket(){


  size_x = 583;
  size_y = 827;

  step_w = size_x/8;
  step_h = size_y/10;


  background = "#e06056";
  stroke_color = "#000";
  stroke_width = 2;


	var container = document.getElementById('basket-page');
		
	paper = Raphael(container, size_x, size_y);
	
	var rect = paper.rect(0, 0, size_x, size_y);

	rect.attr("fill", background);

        rect.strokeStyle = stroke_color;
       
	rect.attr("stroke-width", "0");


	for(i=0; i<2; i++){
	  var path = paper.path( ["M", (4*i+2)*step_w, 0, "L", (4*i+2)*step_w,size_y ] );
          path.attr("stroke",       stroke_color);
          path.attr("stroke-width", stroke_width);
	}


	for(i=0; i<5; i++){
          var step = 2*i*step_h+10;

	  var path = paper.path( ["M",0, step, "L", size_x, step ] );

          path.attr("stroke",       stroke_color);
          path.attr("stroke-width", stroke_width);

	  if (i == 3){
		var circle = paper.circle(size_x/2, step, stroke_width*5);
		circle.attr("fill", stroke_color);
	        circle.attr("stroke", background);
		circle.attr("stroke-width", stroke_width*2);
	  }	

	}


	for(i=0; i<10; i++){
	        path_sin(paper, i, i*step_h);
	}

 };

    

    function path_sin(paper, k, start)
    {

	h = 51 + start;
   	var px = 0;

        var N = 40;
        var dx=2*(Math.PI)/N;

        var x=Math.PI/2;

	if (k%2 == 0){
            x=(3/2)*Math.PI;
	}
     
        var px1 = 0;
        var py1 = 0;
       
        for (var i=0;i<N*2;i++)
        {
            
            x += dx;
            y = Math.sin(x)/2;

            py = h - 50*y;	
            px += (step_w*2/(Math.PI))*dx;

 	    if (i==0){
	      py1 = py;
	    }


 	    var path = paper.path( ["M",px1, py1, "L", px, py ] );

  	    path.attr("stroke",       stroke_color);
        path.attr("stroke-width", stroke_width);

	    px1 = px;
	    py1 = py;
        }

    }

