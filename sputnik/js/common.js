$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


$(function() {
    var pull        = $('.pull');
        menu        = $('div.topnav > ul');
        menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});


$(function() {
    var pull5        = $('li.newsMenu .pullSecondLvl');
        menu5        = $('li.newsMenu ul.secondLvl');
        menuHeight5  = menu5.height();

    $(pull5).on('click', function(e5) {
        e5.preventDefault();
        menu5.slideToggle();
        if(this.style.transform == "rotate(90deg)"){
            this.style.transform = "rotate(00deg)";
		}else{
            this.style.transform = "rotate(90deg)";
		}
    });
});