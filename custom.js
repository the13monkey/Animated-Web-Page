$(document).ready(function(){

  //Create an "inView" function to test whether an element is in the viewport
  $.fn.inView = function(){
    var viewTop = $(this).offset().top;
    var viewBottom = viewTop + $(this).outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    return viewBottom > windowTop && viewTop < windowBottom;
  };

  //Call the "inView" function on scroll
  $(window).on('scroll', function(){

    //Assign fade in animation to all divs with class "animated-fade"
    $('.animated-fade').each(function(){
      if($(this).inView()){
        $(this).addClass('fadeIn');
      } else{
        $(this).removeClass('fadeIn');
      }
    });

    //Assign slide in left animation to div with class "animated-slideInLeft"
    if($('.animated-slideInLeft').inView()){
      $('.animated-slideInLeft').addClass('slideInLeft');
    } else{
      $('.animated-slideInLeft').removeClass('slideInLeft');
    };

    //Assign slide in right animation to div with class "animated-slideInLeft"
    if($('.animated-slideInRight').inView()){
      $('.animated-slideInRight').addClass('slideInRight');
    } else{
      $('.animated-slideInRight').removeClass('slideInRight');
    };
  });

  //Stop the browser to jump to anchor links on the page. Instead, use the following animated method. This is goal #2.
  $( "a.smooth" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });

}); //The End of jQuery
