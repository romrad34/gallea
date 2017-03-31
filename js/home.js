$(function(){

    $('footer').hide();
    $('#products').hide();
    $('#contact').hide();
    $('.arrow-down , .menu li:nth-child(2) a, .responsive_menu li:nth-child(3) a ').click(function(){
        $('#products').show();
        var position = $("#products").offset().top;
        $("html, body").animate({ scrollTop:position }, 1500 );
    });
    $('.arrow-down2 , .menu li:nth-child(3) a, .responsive_menu li:nth-child(4) a ').click(function(){
        $('#contact').show();
        var position = $("#contact").offset().top;
        $("html, body").animate({ scrollTop:position }, 1500 );
    });
});
