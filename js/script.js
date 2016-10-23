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
            $(".content").css('background-color', '#F5D76E');
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
                $(".content").css('background-color', '#3FC380');
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
                $(".content").css('background-color', '#EB974E');
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
                $(".content").css('background-color', '#3498DB');
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
                $(".content").css('background-color', '#BDC3C7');
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
                $(".content").css('background-color', '#BDC3C7');
            }else{
                $('.contact .sub').slideUp("none");
            }
        }
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

        var scroll_pos = 0;
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var pos_about = wHeight * 0.5;
        var pos_formation = wHeight * 1;
        var pos_xp = wHeight * 2.2;
        var pos_skills = wHeight * 3.5;
        var pos_hobbies = wHeight * 4;


        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();

            if(wWidth >= 992){
                if(scroll_pos < pos_about) {
                    $(".content").css('background-color', '240,240,240');
                } else {
                    if(scroll_pos >= pos_about && scroll_pos < pos_formation){
                        $(".content").css('background-color', '#F5D76E');
                    } else {
                        if (scroll_pos >= pos_formation && scroll_pos < pos_xp) {
                            $(".content").css('background-color', '#3FC380');
                        } else {
                            if (scroll_pos >= pos_xp && scroll_pos < pos_skills) {
                                $(".content").css('background-color', '#EB974E');
                            } else {
                                if (scroll_pos >= pos_skills && scroll_pos < pos_hobbies) {
                                    $(".content").css('background-color', '#3498DB');
                                } else {
                                    if (scroll_pos >= pos_hobbies) {
                                        $(".content").css('background-color', '#BDC3C7');
                                    }
                                }
                            }
                        }
                    }
                }
            }

        });

});									