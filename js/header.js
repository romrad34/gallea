$(function(){
var toggle = false;

    $('body').fadeOut();
    // $(window).on('load',function(){
    // $('#loading').fadeOut();
    // $('body').fadeIn();
    // });

    function imageLoaded() {

       // function to invoke for loaded image
       // decrement the counter
       counter--;
       if( counter === 0 ) {
           // counter is 0 which means the last
           //    one loaded, so do something else
           new WOW().init();
           $('#loading').fadeOut();
           $('body').fadeIn();
       }
    }
    var images = $('img');
    var counter = images.length;  // initialize the counter

    images.each(function() {
        if( this.complete ) {
            imageLoaded.call( this );
        } else {
            $(this).one('load', imageLoaded);
        }
    });



    $('.menu ul li a').mouseover(function(){
        $('.menu ul li a').parent().css('background', 'none');
        $(this).parent().css('background-color', 'rgba(182, 182, 182, 0.44)');
        $(this).mouseout(function(){
            $(this).parent().css('background', 'none');
        });
    })

    $('.responsive_menu ul li:nth-child(1n+2)>a').hide();
    $('.toggle').click(function(){
        if (toggle===false)
        {
            $('.responsive_menu ul li:nth-child(1n+2)>a').show();
            toggle= true;
        }
        else
        {
            $('.responsive_menu ul li:nth-child(1n+2)>a').hide();
            toggle= false;
        }
    });

});
