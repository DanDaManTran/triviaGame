
$("document").ready(function(){




	$(".btn-danger").on("click",function(){
		$(".sPage").hide();
		$(".qPage").show();
	});

	//changing the background color whenever the mouse is hovering
	$(".answer").hover(
		function(){
			$(this).css("background-color","green");
		},

		function(){
			$(this).css("background-color","gray");
	});

	//chaning the mouse cursor to pointer when it is over the answers
	$(".answer").css('cursor','pointer');

	$(".answer").on("click",function(){
		$(".qPage").hide();
		$(".aPage").show();
	});
});