$.fn.extend({
    big: function(wn, hn) {
        var _this = this;
        $(_this).on('mouseover', function() {
            $(this).animate({
                width: wn,
                height: hn
            })
        })
    },
    slide: function() {
        var _this = this,
            i = 0;
        $(_this).on('click', function(ln) {
            $('li').eq(i).animate({
                left: ln
            }, 1000)
        })
    },
    choose: function() {
        var _this = this,
            btn = true;
        $(_this).on('click', function() {
            if (btn) {
                $('tbody :checkbox').prop("checked", true);
                btn = false;
            } else {
                $('tbody :checkbox').prop("checked", false);
                btn = true;
            }
        })
    }
})