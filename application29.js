$(document).ready(function(){
    $('#div-subject2, #div-subject3, #div-subject4, #div-subject5, #div-subject6').hide();

    $('#div-add-subject').click(function(){
      if ($('#div-subject2').is(':hidden')) {
        $('#div-subject2').show();
      } else if ($('#div-subject2').is(':visible') && $('#div-subject3').is(':hidden')) {
        $('#div-subject3').show();
        $('#image-subject2').hide();
      } else if ($('#div-subject3').is(':visible') && $('#div-subject4').is(':hidden')) {
        $('#div-subject4').show();
         $('#image-subject3').hide();
      } else if ($('#div-subject4').is(':visible') && $('#div-subject5').is(':hidden')) {
        $('#div-subject5').show();
        $('#image-subject4').hide();
      } else if ($('#div-subject5').is(':visible') && $('#div-subject6').is(':hidden')) {
        $('#div-subject6').show();
        $('#image-subject5').hide();
        $('#div-add-subject').hide();
      }
    });

    $('#image-subject2').click(function(){
      $('#subject-2').prop('selectedIndex',0);
      $('#classTo-2').prop('selectedIndex',0);
      $('#classFrom-2').prop('selectedIndex',0);
      $('#div-subject2').hide();
    });
    
    $('#image-subject3').click(function(){
      $('#subject-3').prop('selectedIndex',0);
      $('#classTo-3').prop('selectedIndex',0);
      $('#classFrom-3').prop('selectedIndex',0);
      $('#div-subject3').hide();
      $('#image-subject2').show();
    });
    
    $('#image-subject4').click(function(){
      $('#subject-4').prop('selectedIndex',0);
      $('#classTo-4').prop('selectedIndex',0);
      $('#classFrom-4').prop('selectedIndex',0);
      $('#div-subject4').hide();
      $('#image-subject3').show();
    });
    
    $('#image-subject5').click(function(){
      $('#subject-5').prop('selectedIndex',0);
      $('#classTo-5').prop('selectedIndex',0);
      $('#classFrom-5').prop('selectedIndex',0);
      $('#div-subject5').hide();
      $('#image-subject4').show();
    });
    
    $('#image-subject6').click(function(){
      $('#subject-6').prop('selectedIndex',0);
      $('#classTo-6').prop('selectedIndex',0);
      $('#classFrom-6').prop('selectedIndex',0);
      $('#div-subject6').hide();
      $('#image-subject5').show();
      $('#div-add-subject').show();
    });
});
