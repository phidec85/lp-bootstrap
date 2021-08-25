$(document).ready(function(){

    // Add smooth scrolling
    $("a.smooth").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
  
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });

    if($('.box--min-height').length) {
      var minHeighBox = 0;
      $('.box--min-height').each(function(){
          var $element = $(this);
          console.log(element.height());
      });
    }
  });