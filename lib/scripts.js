console.log(":)")

function loadStart(){
	$(".text").hide()
	$(".1").hide()
	$(".2").hide()
	$(".3").hide()
	$(".hill").hide()
	$(".animal").hide()
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
			$(".1").fadeIn("slow")
		});
	});
}

function secondSlide(){
	$(".1").click(function(){
		$(".1").hide()
		$(".text").fadeOut(2000, function(){
			$(".text").html( "Death could scarce be more bitter than that place! <br> <br> But I found myself before a little hill, <br> and lifted up my eyes. Its shoulder glowed <br> already with the sweet rays of that planet <br> whose virtue leads men straight on every road." )
		});
		$(".text").fadeIn(2000)
		$(".hill").fadeIn(2000)
		$(".dante").animate({
			left: "+=100px",
			opacity: 1,
		}, 2000, function(){
			setTimeout(function(){
				$(".2").fadeIn("slow")
			}, 1000);
		});
	})
}

function thirdSlide(){
		$(".2").click(function(){
			$(".2").hide()
			$(".text").fadeOut(1000, function(){
			$(".text").html( "From the mist I faced a spotted Leopard, all tremor and flow, <br> when a great Lion broke upon me, raging with hunger, <br> and a She-Wolf drove upon me, a starved horror." )
		});
		$(".text").fadeIn(1000)
		$(".lion").fadeIn("slow")
		setTimeout(function(){
			$(".leopard").fadeIn("slow")
		}, 500);
		setTimeout(function(){
			$(".she_wolf").fadeIn("slow")
		}, 1000);
		$(".dante").animate({
			left: "-=100px",
		}, 500)
		setTimeout(function(){
			$(".3").fadeIn("slow")
		}, 3000);
	});
}