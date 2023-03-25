$(document).ready(function(){
    $('#div-subject2, #div-subject3, #div-subject4, #div-subject5, #div-subject6').hide();

    $('#div-add-subject').click(function(){
      console.log('div-add-subject clicked');
      if ($('#div-subject2').is(':hidden')) {
        console.log('showing div-subject2');
        $('#div-subject2').show();
      } else if ($('#div-subject2').is(':visible')) {
        console.log('showing div-subject3');
        $('#div-subject3').show(); 
      } else if ($('#div-subject3').is(':visible')) {
        console.log('showing div-subject4');
        $('#div-subject4').show();
      } else if ($('#div-subject4').is(':visible')) {
        console.log('showing div-subject5');
        $('#div-subject5').show();  
      } else if ($('#div-subject5').is(':visible')) {
        console.log('showing div-subject6');
        $('#div-subject6').show();   
      }
      
    });

     $('#image-subject2').click(function(){
      console.log('image-subject2 clicked');
      $('#subject-2').prop('selectedIndex',0);
      $('#classTo-2').prop('selectedIndex',0);
      $('#classFrom-2').prop('selectedIndex',0);
      $('#div-subject2').hide();
    });
    
      $('#image-subject3').click(function(){
      console.log('image-subject3 clicked');
      $('#subject-3').prop('selectedIndex',0);
      $('#classTo-3').prop('selectedIndex',0);
      $('#classFrom-3').prop('selectedIndex',0);
      $('#div-subject3').hide();
    });
    
      $('#image-subject4').click(function(){
      console.log('image-subject4 clicked');
      $('#subject-4').prop('selectedIndex',0);
      $('#classTo-4').prop('selectedIndex',0);
      $('#classFrom-4').prop('selectedIndex',0);
      $('#div-subject4').hide();
    });
    
      $('#image-subject5').click(function(){
      console.log('image-subject5 clicked');
      $('#subject-5').prop('selectedIndex',0);
      $('#classTo-5').prop('selectedIndex',0);
      $('#classFrom-5').prop('selectedIndex',0);
      $('#div-subject5').hide();
    });
    
      $('#image-subject6').click(function(){
      console.log('image-subject6 clicked');
      $('#subject-6').prop('selectedIndex',0);
      $('#classTo-6').prop('selectedIndex',0);
      $('#classFrom-6').prop('selectedIndex',0);
      $('#div-subject6').hide();
    });
    
    
  });
