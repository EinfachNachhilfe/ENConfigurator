$(document).ready(function() {
    $('#drop-down-desktop, #drop-down-mobile, #drop-down_overlay').hide();

    $('#trigger_drop-down-desktop').click(function() {
        if ($('#drop-down-desktop').is(':hidden') && $('#drop-down_overlay').is(':hidden')) {
            $('#drop-down-desktop').fadeIn(150);
            $('#drop-down_overlay').fadeIn(150);
            $('#drop-down_icon').css('transform', 'rotate(180deg)');
        } else if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
    });

    $('#trigger_drop-down-mobile').click(function() {
        if ($('#drop-down-mobile').is(':hidden') && $('#drop-down_overlay').is(':hidden')) {
            $('#drop-down-mobile').fadeIn(150);
            $('#drop-down_overlay').fadeIn(150);
            $(this).addClass('x');
        } else if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $(this).removeClass('x');
        }
    });

    $('#drop-down_overlay').click(function() {
        if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
        if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#trigger_drop-down-mobile').removeClass('x');
        }
    });

    $(document).scroll(function() {
        if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
        if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#trigger_drop-down-mobile').removeClass('x');
        }
    });
});
