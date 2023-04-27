$(document).ready(function() {
    $('#drop-down, #drop-down_overlay').hide();

    $('#trigger_drop-down-desktop, #trigger_drop-down-mobile').click(function() {
        if ($('#drop-down').is(':hidden') && $('#drop-down_overlay').is(':hidden')) {
			$('#drop-down').fadeIn(150);
			$('#drop-down_overlay').fadeIn(150);
			$('#drop-down_icon').css('transform', 'rotate(180deg)');
        } else if ($('#drop-down').is(':visible') && $('#drop-down_overlay').is(':visible')) {
			$('#drop-down').fadeOut(150);
			$('#drop-down_overlay').fadeOut(150);
			$('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
    });

	$('#drop-down_overlay').click(function() {
        if ($('#drop-down').is(':visible') && $('#drop-down_overlay').is(':visible')) {
			$('#drop-down').fadeOut(150);
			$('#drop-down_overlay').fadeOut(150);
			$('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
    });

    $(document).scroll(function() {
        if ($('#drop-down').is(':visible') && $('#drop-down_overlay').is(':visible')) {
				$('#drop-down').fadeOut(150);
				$('#drop-down_overlay').fadeOut(150);
				$('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
    });
});
