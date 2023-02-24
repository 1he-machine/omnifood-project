$(document).ready(function() {
    
    $('.js-section').waypoint(function(direction) {
        
        if(direction == "down") {
            $('nav').addClass('sticky');
        } 
        
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50%'
    });
    
    
    $('.js-signup-btn').click(function() {
        
        $('html, body').animate({scrollTop: $('.js-money-sec').offset().top}, 1500);
    });
    
    $('.js-more-btn').click(function() {
        
        $('html, body').animate({scrollTop: 700}, 500);
    });
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
    $('.js-wp-col1').waypoint(function(direction) {
        $('.js-wp-col1').addClass('animate__animated animate__fadeInDown')
    }, {
        offset: '50%'
    });
    
    
     $('.js-phone-animation').waypoint(function(direction) {
        $('.js-phone-animation').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '50%'
    });
    
});
