$(document).ready(function(){
	var i = 0;
  var size = prompt('enter number of squares');
  var mult = size * size;
  var squareSize = 500/size;

  for(i = 0; i < mult; i++){
		$('#wrap').append('<div class="block"></div>');

  }

  $('.block').mouseenter(function(){
  	$(this).css("background-color", "black");
  });

	$('.block').css('height', squareSize + 'px');
	$('.block').css('width', squareSize + 'px');


 });
