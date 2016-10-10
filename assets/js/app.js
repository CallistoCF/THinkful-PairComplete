$(function() {
    $('.toggle-nav').click(function() {
        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');
            $(".overlay").css("z-index", "-5");
            $(".lbox").css("z-index", "7");
            $(".sbox").css("z-index", "7");

            setTimeout(function() {
                $('body').removeClass('hide-nav');
                $(".overlay").css("z-index", "-5");
                $(".lbox").css("z-index", "7");
                $(".sbox").css("z-index", "7");
            }, 500);
            $('.lineBreak').show();
        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
            $(".overlay").css("z-index", "15");
            $(".lbox").css("z-index", "0");
            $(".sbox").css("z-index", "0");
            $('.lineBreak').hide();
        }
        return false;
    });
});
