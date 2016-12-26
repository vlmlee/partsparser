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

    $('#input').putCursorAtEnd().on('focus', () => {
        $(this).putCursorAtEnd();
    });

    $('#transform').on('submit', (e) => {
        e.preventDefault();
        let $form = $(this),
            sentence = $form.find("input[name='sentence']").val();

        if (sentence.split(" ").length >= 42) {
        	$('#output-text').html('<p class="error">Your sentence is too long.</p>');
        } else if (sentence) {
	        $.post('/transform', { "data": sentence }, (data) => {
	            $('#output-text').html('');
	            let output = data.slice(0, -1).split(" ");
	            console.log(output);
	            output.map((item, i) => {
	            	if (i === 0 && output.length === 1) {
	           			$('#output-text').append('“');
	            		whichPOS(item);
	            		$('#output-text').append('”');
	           		} else if (i === 0) {
	           			$('#output-text').append('“');
	            		whichPOS(item);
	            		$('#output-text').append(' ');
	           		} else if (i === output.length - 1) {
	           			whichPOS(item);
	        			$('#output-text').append('”');
	           		} else {
	           			whichPOS(item);
	           			$('#output-text').append(' ');
	           		}
	           	});
	            $('.output').css("text-align", "left");
	        });
	    } else {
	    	$('#output-text').html('');
	    }
    });

    $(".turns").typed({
        strings: ["and it will turn into"],
        typeSpeed: 30,
        showCursor: false,
    });

    $(".ellipsis").typed({
        strings: ["..."],
        startDelay: 1100,
        typeSpeed: 500,
        showCursor: false,
    });
});

function whichPOS(pos) {
    switch (pos) {
        case 'CC':
            $('<span style="color: #E9DF00">CC</span>').appendTo($('#output-text'));
            break;
        case 'CD':
            $('<span style="color: #DDDDDD">CD</span>').appendTo($('#output-text'));
            break;
        case 'DT':
            $('<span style="color: #FB5012">DT</span>').appendTo($('#output-text'));
            break;
        case 'EX':
            $('<span style="color: #C4E7D4">EX</span>').appendTo($('#output-text'));
            break;
        case 'FW':
            $('<span style="color: #FFDC00">FW</span>').appendTo($('#output-text'));
            break;
        case 'IN':
            $('<span style="color: #FF6542">IN</span>').appendTo($('#output-text'));
            break;
        case 'JJ':
            $('<span style="color: #CFE795">JJ</span>').appendTo($('#output-text'));
            break;
        case 'JJR':
            $('<span style="color: #F7EF81">JJR</span>').appendTo($('#output-text'));
            break;
        case 'JJS':
            $('<span style="color: #FFD670">JJS</span>').appendTo($('#output-text'));
            break;
        case 'LS':
            $('<span style="color: #FF70A6">LS</span>').appendTo($('#output-text'));
            break;
        case 'MD':
            $('<span style="color: #80A4ED">MD</span>').appendTo($('#output-text'));
            break;
        case 'NN':
            $('<span style="color: #0074D9">NN</span>').appendTo($('#output-text'));
            break;
        case 'NNS':
            $('<span style="color: #03FCBA">NNS</span>').appendTo($('#output-text'));
            break;
        case 'NNP':
            $('<span style="color: #7FDBFF">NNP</span>').appendTo($('#output-text'));
            break;
        case 'NNPS':
            $('<span style="color: #01FF70">NNPS</span>').appendTo($('#output-text'));
            break;
        case 'PDT':
            $('<span style="color: #ADBDFF">PDT</span>').appendTo($('#output-text'));
            break;
        case 'POS':
            $('<span style="color: #3185FC">POS</span>').appendTo($('#output-text'));
            break;
        case 'PRP':
            $('<span style="color: #DB8A74">PRP</span>').appendTo($('#output-text'));
            break;
        case 'PRP$':
            $('<span style="color: #BFD7EA">PRP$</span>').appendTo($('#output-text'));
            break;
        case 'RB':
            $('<span style="color: #85144b">RB</span>').appendTo($('#output-text'));
            break;
        case 'RBR':
            $('<span style="color: #FF5376">RBR</span>').appendTo($('#output-text'));
            break;
        case 'RBS':
            $('<span style="color: #9BF3F0">RBS</span>').appendTo($('#output-text'));
            break;
        case 'RP':
            $('<span style="color: #39CCCC">RP</span>').appendTo($('#output-text'));
            break;
        case 'SYM':
            $('<span style="color: #DAFFED">SYM</span>').appendTo($('#output-text'));
            break;
        case 'TO':
            $('<span style="color: #FF851B">TO</span>').appendTo($('#output-text'));
            break;
        case 'UH':
            $('<span style="color: #70D6FF">UH</span>').appendTo($('#output-text'));
            break;
        case 'VB':
            $('<span style="color: #4C9F70">VB</span>').appendTo($('#output-text'));
            break;
        case 'VBD':
            $('<span style="color: #839788">VBD</span>').appendTo($('#output-text'));
            break;
        case 'VBG':
            $('<span style="color: #77BFA3">VBG</span>').appendTo($('#output-text'));
            break;
        case 'VBN':
            $('<span style="color: #AAFFE5">VBN</span>').appendTo($('#output-text'));
            break;
        case 'VBP':
            $('<span style="color: #8C1A6A">VBP</span>').appendTo($('#output-text'));
            break;
        case 'VBZ':
            $('<span style="color: #DFE0DC">VBZ</span>').appendTo($('#output-text'));
            break;
        case 'WDT':
            $('<span style="color: #DB8A74">WDT</span>').appendTo($('#output-text'));
            break;
        case 'WP':
            $('<span style="color: #7EBDC3">WP</span>').appendTo($('#output-text'));
            break;
        case 'WP$':
            $('<span style="color: #FC814A">WP$</span>').appendTo($('#output-text'));
            break;
        case 'WRB':
            $('<span style="color: #BDC696">WRB</span>').appendTo($('#output-text'));
            break;
        case '.':
            $('<span style="color: #F5A6E6">.</span>').appendTo($('#output-text'));
            break;
        case '?':
            $('<span style="color: #80DED9">?</span>').appendTo($('#output-text'));
            break;
        case '!':
            $('<span style="color: #119DA4">!</span>').appendTo($('#output-text'));
            break;
        case ';':
            $('<span style="color: #AEECEF">;</span>').appendTo($('#output-text'));
            break;
        default:
            break;
    }
}
