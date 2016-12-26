$(document).ready(function() {
	// jQuery plugin
    jQuery.fn.putCursorAtEnd = function() {
        return this.each(function() {
            var $el = $(this),
                el = this;
            if (!$el.is(":focus")) {
                $el.focus();
            }
            if (el.setSelectionRange) {
                var len = $el.val().length * 2;
                setTimeout(function() {
                    el.setSelectionRange(len, len);
                }, 1);
            } else {
                $el.val($el.val());
            }
            this.scrollTop = 999999;
        });
    };
    //

    $('#input').putCursorAtEnd().on('focus', ()=> {
    	$(this).putCursorAtEnd();
    });

    $('#transform').on('submit', (e) => {
        e.preventDefault();
        let $form = $(this),
            sentence = $form.find("input[name='sentence']").val();

        $.post('/transform', { "data": sentence }, (data) => {
            var output = data;

            $('#output-text').html('“' + data + '”');
            $('.output').css("text-align", "left");
        });

    });

    $(".turns").typed({
        strings: ["and it will turn into"],
        typeSpeed: 30,
        showCursor: false,
    });

    $(".ellipsis").typed({
        strings: ["..."],
        startDelay: 1100,
        typeSpeed: 800,
        showCursor: false,
    });
});
