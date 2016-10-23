// JavaScript Document

$(function() {
    var screen_width = $(window).width();
    var w ;

    $('.PI_hexa_click').click(function () {
		//$('.topbar').fadeIn(200);
		$('.main-message').hide();
		$('.content').fadeIn(200);
        $('.show-menu').fadeIn(200);

	});

    $('.about-me-small .title').click(function () {
        if($('.about-me-small .sub').css('display') == 'none'){
            $('.about-me-small .sub').slideDown("normal");
        }else{
            $('.about-me-small .sub').slideUp("none");
        }
    });

    $('.formation .title').click(function () {
        w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if(w < 1200)
        {
            if($('.formation .sub').css('display') == 'none'){
                $('.formation .sub').slideDown("normal");
            }else{
                $('.formation .sub').slideUp("none");
            }
        }
    });

    $('.XP .title').click(function () {
        w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if(w < 1200)
        {
            if($('.XP .sub').css('display') == 'none'){
                $('.XP .sub').slideDown("normal");
            }else{
                $('.XP .sub').slideUp("none");
            }
        }
    });

    $('.skills .title').click(function () {
        w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if(w < 1200)
        {
            if($('.skills .sub').css('display') == 'none'){
                $('.skills .sub').slideDown("normal");
            }else{
                $('.skills .sub').slideUp("none");
            }
        }
    });

    $('.hobbies .title').click(function () {
        w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if(w < 1200)
        {
            if($('.hobbies .sub').css('display') == 'none'){
                $('.hobbies .sub').slideDown("normal");
            }else{
                $('.hobbies .sub').slideUp("none");
            }
        }
    });

    $('.contact .title').click(function () {
        w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if(w < 1200)
        {
            if($('.contact .sub').css('display') == 'none'){
                $('.contact .sub').slideDown("normal");
            }else{
                $('.contact .sub').slideUp("none");
            }
        }
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});									