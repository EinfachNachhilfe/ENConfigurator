$(document).ready(function() {

    // start header animation
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
    // end header animation


    // start Dropdown
    $(".drop-down_content-wrapper").hide();

    $(".drop-down_component-wrapper").click(function() {
     
        var index = $('.drop-down_component-wrapper').index(this);
        var wrapper = $(this).closest('.drop-down_wrapper');

      
        if($(".drop-down_content-wrapper").eq(index).is(":visible")) {
            $(".drop-down_content-wrapper").eq(index).hide();
            $(this).find('.drop-down_image').removeClass('rotate');
            wrapper.css('background-color', ''); 
        }
        else {
            
            $(".drop-down_content-wrapper").hide();
            $('.drop-down_image').removeClass('rotate');
            $('.drop-down_wrapper').css('background-color', '');
            $(".drop-down_content-wrapper").eq(index).show();
            $(this).find('.drop-down_image').addClass('rotate');
            wrapper.css('background-color', '#ffffff');
        }
    });  
    // end Dropdown
    
});


