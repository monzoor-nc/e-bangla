$( document ).ready(function() {
	$("section").height($(window).height());

	 var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 300) {
            $('header').addClass('selected');
        } else {
            $('header').removeClass('selected');
        }
    };

    

    $(window).scroll(function () {
    	console.log("test")
        stickyNav();
    });
})

