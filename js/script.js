$("#demo").introLoader({
    animation: {
        name: 'doubleLoader',
        options: {
            exitFx:'fadeOut',
            ease: "easeInOutCirc",
            style: 'fluoGreen',
            delayBefore: 500,
            exitTime: 300,
            progbarTime: 700,
            progbarDelayAfter: 400
        }
    }
});

$("body").niceScroll({
        cursorcolor: "#ffa136",
        cursorwidth: "13px",
        cursorborder: "1px solid #ffa136",
        cursorborderradius: "10px",scrollspeed: 50,
        mousescrollstep: 40,
      });

      AOS.init({
        easing: 'ease',
        duration: 400,
        animatedClassName: 'aos-animate',
      });


      // $fn.parallax( resistance, mouse )
$( document ).mousemove( function( e ) {
  $( '.shoe, .perfume, .bag, .Macbook' ).parallax( -30, e );
});