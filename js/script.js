var size = 25;
var color = "white";


$(document).ready(function(){


		draw();

		function draw(){
      var mult = size * size;
  		var squareSize = 500/size;

 			for(var i = 0; i < mult; i++){
					$('#wrap').append('<div class="block"></div>');
  			}

      $('.block').mouseenter(function(){



        var opac = + $(this).css('opacity')
        if (opac > 0){
        	opac -= 0.1;
          $(this).css({"opacity": opac})
        }

      });



			$('.block').css('height', squareSize + 'px');
			$('.block').css('width', squareSize + 'px');
		}

    //-------------------------

    $('#button').click(function(){
       	size = prompt("enter square number");

				$('.block').remove();

        draw();

    });

    //-------------------------

    $('#clear').click(function(){
    	$('.block').remove();
    	draw();
    });
 	//------------------------------


  for(var g = 0; g < 8; g++){

  	$('#buttons').append('<a href="#" onclick="changeColor(); return false;"><div class="palette"></div></a>');
    $('#buttons :nth-child('+ (g+3) + ')').css("background-color", color)
  }
  //------------------------------

  	$('#wrap').css('background-color', color);

  	function changeColor(){
    	color="white";
    }

 });

 
