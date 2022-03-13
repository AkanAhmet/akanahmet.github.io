(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });


    // for dark-light theme switcher
    const chk = document.getElementById('chk');

    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });

    // for page up arrow

    $('.back-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    // for tooltips(title)
    $('a').tooltip();

    // for if user clicks menu, navmenu animation ends.
     $('.navbar-toggler').mouseleave(function () {
        $(this).addClass("no-animation");
               
    }) 

    $('#easterEgg').hover(function() {
        var nowDate = new Date(); 
        var date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
        $(this).text(date);
    }).mouseleave(function() { 
        $(this).text("Ahmet AKAN");
    });

    $('.dropdown-toggle').click(function() {
        $('.cv').toggle();
    });

})(jQuery); // End of use strict