$(function () {
    $('.link .button').hover(function () {
        var title = $(this).attr('data');
        $('.tip em').text(title);
        var pos = $(this).offset().left;
        var dis = parseInt($('.tip').outerWidth() - $(this).outerWidth()) / 2;
        var l = pos - dis;
        $('.tip').css({'left': l + 'px'}).animate({'top': 180, 'opacity': 1}, 300);
    }, function () {
        if (!$('.tip').is(':animated')) {
            $('.tip').animate({'top': 160, 'opacity': 0}, 50);
        }
    })

    $(".ripple-wrapper li").click(function (e) {

        if ($(this).hasClass('slider')) {
            return;
        }

        var whatTab = $(this).index();

        var howFar = 160 * whatTab;

        $(".slider").css({
            left: howFar + "px"
        });

        $(".ripple").remove();

        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

        $(this).append("<span class='ripple'></span>");

        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");

    });
});