/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
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
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
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
}
)(jQuery); // End of use strict

const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');
const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1');
const h3 = document.querySelectorAll('h3');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
    toggleSwitch.checked = false;
}

function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        body.style.background = '#222';
        body.style.color = '#e1e1ff';
        colorSetter(h1,'white');
        colorSetter(h3,'white');
      
        
    }
    else {       
         document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          body.style.background = '#fff'; 
          body.style.color = '#212529';
          colorSetter(h1,'#212529');
          colorSetter(h3,'#212529');  
    }    
}

function colorSetter( arr, color) {
    for(let header of arr) {
        header.style.color = color;
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);