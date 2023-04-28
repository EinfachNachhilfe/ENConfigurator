$(document).ready(function() {
    $('#hide-experience-2, #hide-experience-3, #hide-experience-4, #hide-experience-5, #hide-experience-6').hide();

    $('#add-experience').click(function() {
        if ($('#hide-experience-2').is(':hidden')) {
            $('#hide-experience-2').show();
        } else if ($('#hide-experience-2').is(':visible') && $('#hide-experience-3').is(':hidden')) {
            $('#hide-experience-3').show();
            $('#close-experience-2').hide();
        } else if ($('#hide-experience-3').is(':visible') && $('#hide-experience-4').is(':hidden')) {
            $('#hide-experience-3').show();
            $('#close-experience-3').hide();
        } else if ($('#hide-experience-4').is(':visible') && $('#hide-experience-5').is(':hidden')) {
            $('#hide-experience-5').show();
            $('#close-experience-4').hide();
        } else if ($('#hide-experience-5').is(':visible') && $('#hide-experience-6').is(':hidden')) {
            $('#hide-experience-6').show();
            $('#close-experience-5').hide();
            $('#add-experience').hide();
        }
    });

    $('#close-experience-2').click(function() {
        $('#experience-2').prop('selectedIndex', 0);
        $('#duration-2').prop('selectedIndex', 0);
        $('#when-2').prop('selectedIndex', 0);
        $('#hide-experience-2').hide();
    });

    $('#close-experience-3').click(function() {
        $('#experience-3').prop('selectedIndex', 0);
        $('#duration-3').prop('selectedIndex', 0);
        $('#when-3').prop('selectedIndex', 0);
        $('#hide-experience-3').hide();
        $('close-experience-2').show();
    });

    $('#close-experience-4').click(function() {
        $('#experience-4').prop('selectedIndex', 0);
        $('#duration-4').prop('selectedIndex', 0);
        $('#when-4').prop('selectedIndex', 0);
        $('#hide-experience-4').hide();
        $('close-experience-3').show();
    });

    $('#close-experience-5').click(function() {
        $('#experience-5').prop('selectedIndex', 0);
        $('#duration-5').prop('selectedIndex', 0);
        $('#when-5').prop('selectedIndex', 0);
        $('#hide-experience-5').hide();
        $('close-experience-4').show();
    });

    $('#close-experience-6').click(function() {
        $('#experience-6').prop('selectedIndex', 0);
        $('#duration-6').prop('selectedIndex', 0);
        $('#when-6').prop('selectedIndex', 0);
        $('#hide-experience-6').hide();
        $('close-experience-5').show();
        $('#add-experience').show();
    });
});
