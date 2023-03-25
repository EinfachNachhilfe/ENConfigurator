
  $(document).ready(function(){
    $('#div-add-subject').click(function(){
      if ($('#div-subject2').is(':hidden')) {
        $('#div-subject2').show();
      } else if ($('#div-subject2').is(':visible')) {
        $('#div-subject3').show();
      }
    });

    $('#image-subject2').click(function(){
      $('#subject-2').prop('selectedIndex',0);
      $('#classTo-2').prop('selectedIndex',0);
      $('#classFrom-2').prop('selectedIndex',0);
      $('#div-subject2').hide();
      $('#div-subject3').hide();
    });
  });

