$(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#contact').css('height', '600px');
}
    $('footer').hide();
    $('#paniers').hide();
    $('#contact').hide();

    //action quand on clique sur la premiere fleche du bas a partir de presentation
    $('.arrow-down, .menu li:nth-child(2) a, .responsive_menu li:nth-child(3) a ').click(function(){
        $('.slogan, .livraison, .frais').removeClass('wow');
        wow.init();
        $('.slogan').removeClass('wow');
        $('#paniers').show();
        var position = $("#paniers").offset().top;
        $("html, body").animate({ scrollTop:position }, 1500 );
    });

        //action quand on clique sur la deuxieme fleche du bas a partir de produits
    $('.arrow-down2 , .menu li:nth-child(3) a, .responsive_menu li:nth-child(4) a ').click(function(){
        $('#contact').show();
        $('footer').show();
        var position = $("#contact").offset().top;
        $("html, body").animate({ scrollTop:position }, 1500 );
    });

    $('.arrow-up, .arrow-up2').click(function(){
            $('#paniers').show();
            $("html, body").animate({ scrollTop:0 }, 1000 );
    });


});
