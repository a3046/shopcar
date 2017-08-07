$(function() {
    var i = 0,
        btn = true,
        num = 0;
    $('.ahieldGao_span').on('click', function() {
        $('.ahieldGao').css('display', 'none');
    })
    $('.bl_logoDiv_c_inp1').on('click', function() {
        $('.bl_logoDiv_c_inp1').val('')
    })
    setInterval(function() {
        if (i >= 5) {
            i = 0;
        }
        $('.banner_area img').eq(i).fadeToggle("slow");
        i++;
    }, 2000)
    $('.productBot_a .hover_moving_img').big(150, 150);
    $('.productBot_a .hover_moving_img').big(125, 125);
    $('.productTop_a .hover_moving_img').big(200, 200);
    $('.productTop_a .hover_moving_img').big(194, 194);
    $('.prev').on('click', function() {
        num += 700;
        $('.item').each(function(index) {
            $('.item').eq(index).animate({
                right: num
            }, 1000)
        })
        if (num >= 2100) {
            $('.items').css({
                position: 'relative',
                right: 0
            });
            num = 0;
        }
    })
    $('.active').choose();
    $('.active_b').choose();
})