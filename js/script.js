var size = 20;
var color = "white";


$(document).ready(function(){


		draw();

		function draw(){
      var mult = size * 2 * size;
  		var squareSize = 270/size;

 			for(var i = 0; i < mult; i++){
					$('#wrap').prepend('<div class="block"></div>');
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


  //------------------------------

  	$('#wrap').css('background-color', color);

  	function changeColor(){
    	color="purple";
    }

 });
