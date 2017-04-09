$(function(){

    var src='img/background.jpg';
    var $img = $( '<img src="' + src + '">' );
    $img.bind( 'load', function(){
        $('body').show();
        $( '#presentation' ).css( 'background-image', 'url(' + src + ')' );
    } );
    if( $img[0].width ){ $img.trigger( 'load' ); }

    $('#loading').fadeOut();
    var toggle = false;

       wow = new WOW(
        {
            mobile: false
        }
        )
     wow.init();

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
