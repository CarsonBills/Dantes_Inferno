console.log(":)")

function loadStart(){
	$(".text").hide()
	$(".next").hide()
}

function flipDante(){
	console.log("flip")
	$(".dante").addClass("flipped")
}

function unflipDante(){
	console.log("unflip")
	$(".dante").removeClass("flipped")
}

function clickTitle(){
		$(".title").click(function(){
		$(".text").fadeIn(2000);
		$(".title").fadeOut(2000);
		$(".dante").animate({
			left: "+=450px",
			opacity: 1,
		}, 9000, function(){
			flipDante(),
			setTimeout(function(){
				unflipDante();
			}, 700);
			setTimeout(function(){
				flipDante();
			}, 1400);
			setTimeout(function(){
				unflipDante();
			}, 2100);
			$(".next").fadeIn("slow")
		});
	});
}