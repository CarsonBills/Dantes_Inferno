console.log(":)")

function loadStart(){
	$(".text").hide()
	$(".1").hide()
	$(".2").hide()
	$(".3").hide()
	$(".4").hide()
	$(".5").hide()
	$(".6").hide()
	$(".end").hide()
	$(".hill").hide()
	$(".animal").hide()
	$(".entrance").hide()
	$(".interrobang").hide()
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
			$(".interrobang").fadeIn(100)
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
			setTimeout(function(){
				$(".interrobang").hide(100)
				$(".1").fadeIn("slow")
			}, 2500);
		});
	});
}

function secondSlide(){
	$(".1").click(function(){
		$(".1").hide()
		$(".text").fadeOut(2000, function(){
			$(".text").html( "<p> Death could scarce be more bitter than that place! <br> <br> But I found myself before a little hill, <br> and lifted up my eyes. Its shoulder glowed <br> already with the sweet rays of that planet <br> whose virtue leads men straight on every road.</p>" )
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
			$(".text").html( "<p> From the mist sprang a spotted Leopard, <br> a great Lion, and a She-Wolf, all rage and hunger.</p>" )
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

function fourthSlide(){
	$(".3").click(function(){
		$(".3").hide()
		$(".text").fadeOut(1000, function(){
			$(".text").html( "<p> As I fell to my soul's ruin, a presence <br> gathered before me on the discolored air <br> 'Have pity on me whatever thing you are, <br> whether shade or living man!'</p>" )
		});
		$(".text").fadeIn(1000)
		flipDante()
		$(".virgil").animate({
			bottom: "-=250px",
			opacity: 1,
		}, 4000, function(){
			setTimeout(function(){
				$(".4").fadeIn("slow")
			}, 500);
		});
	})
}

function fifthSlide(){
	$(".4").click(function(){
		$(".4").hide()
		$(".text").fadeOut(1000, function(){
			$(".text").html( "<p>'Not man, though man I once was.' <br> <br> 'Are you then that Virgil and <br> that fountain of purest speech?'</p>" )
		});
		$(".text").fadeIn(1000)

		$(".virgil").animate({
			bottom: "-=170",
			left: "+=200",
		}, 3000, function(){
			setTimeout(function(){
				$(".5").fadeIn("slow")
			}, 500);
		});
	})
}			

function sixthSlide(){
	$(".5").click(function(){
		$(".5").hide()
		$(".text").fadeOut(1000, function(){
			$(".text").html("<p>'I am. He who would escape this wilderness <br> must go by another way. I think it well, <br> you follow me and I will be your guide <br> and lead you forth through an eternal place <br> in endless pain.'</p>")
		});
		$(".text").fadeIn(1000, function(){
			setTimeout(function(){
				$(".6").fadeIn("slow")
			}, 500);
		});
	})
}

function seventhSlide(){
	$(".6").click(function(){
		$(".6").hide()
		$(".text").fadeOut(1000, function(){
			$(".text").html("<p> Then Let us go. </p>")
		});
		$(".text").fadeIn(1000, function(){
			$(".entrance").fadeIn(1000, function(){
				setTimeout(function(){
					$(".interrobang").fadeIn(100)
					unflipDante(),
					setTimeout(function(){
						flipDante();
					}, 700),
					setTimeout(function(){
						$(".dante").animate({
							bottom: 0,
							opacity: 0,
						}, 300),
						$(".interrobang").hide(100)
					}, 1000) // Wait one second for Dante to fall after he finishes turning around
				}, 1000) // Wait one second for Dante to turn around before falling
						$(".end").fadeIn("slow")
			})
		});
	});
}