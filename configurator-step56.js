
var step1 = document.getElementById('step-item_subject');
var step2 = document.getElementById('step-item_support');
var step3 = document.getElementById('step-item_teaching-location');
var step4 = document.getElementById('step-item_unit');
var step5 = document.getElementById('step-item_runtime');
var step6 = document.getElementById('step-item_addOn-tutor');
var step7 = document.getElementById('step-item_addOn-lesson');
var step8 = document.getElementById('step-item_form-1');
var unit90 = document.getElementById('step-item_unit-90');
var unit45 = document.getElementById('step-item_unit-45');
var runtime1 = document.getElementById('step-item_runtime-1');
var runtime2 = document.getElementById('step-item_runtime-2');
var runtime3 = document.getElementById('step-item_runtime-3');
var tutor1 = document.getElementById('step-item_addOn-tutor-1');
var tutor2 = document.getElementById('step-item_addOn-tutor-2');
var tutor3 = document.getElementById('step-item_addOn-tutor-3');
var lesson1 = document.getElementById('step-item_addOn-lesson-1');
var lesson2 = document.getElementById('step-item_addOn-lesson-2');
var lesson3 = document.getElementById('step-item_addOn-lesson-3');
var backBtn = document.getElementById('back-btn');
var nextBtn = document.getElementById('next-btn');
var checkboxes1 = step1.querySelectorAll('input[type="checkbox"]');
var checkboxes2 = step2.querySelectorAll('input[type="checkbox"]');
var checkboxes3 = step6.querySelectorAll('input[type="checkbox"]');
var checkboxes4 = step7.querySelectorAll('input[type="checkbox"]');
var teachingLocationRadios = step3.querySelectorAll('input[type="radio"]');
var unitRadios = step4.querySelectorAll('input[type="radio"]');
var runtimeRadios = step5.querySelectorAll('input[type="radio"]');
var isAnyCheckboxSelected1 = false;
var isAnyCheckboxSelected2 = false;
var isAnyCheckboxSelected3 = false;
var isAnyCheckboxSelected4 = false;
var isTeachingLocationSelected = false;
var isUnitSelected = false;
var isRuntimeSelected = false;


// Hide all form steps except the first one
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
step5.style.display = 'none';
step6.style.display = 'none';
step7.style.display = 'none';
step8.style.display = 'none';
unit45.style.display = "none";
unit90.style.display = "none";
backBtn.style.display = 'none';

function checkCheckboxSelected1() {
  checkboxes1.forEach(function(checkbox) {
    if (checkbox.checked) {
      isAnyCheckboxSelected1 = true;
    }
  });
  
  if (isAnyCheckboxSelected1) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}

function checkCheckboxSelected2() {
  checkboxes2.forEach(function(checkbox) {
    if (checkbox.checked) {
      isAnyCheckboxSelected2 = true;
    }
  });
  
  if (isAnyCheckboxSelected2) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}

function checkCheckboxSelected3() {
  checkboxes3.forEach(function(checkbox) {
    if (checkbox.checked) {
      isAnyCheckboxSelected3 = true;
    }
  });
  
  if (isAnyCheckboxSelected3) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}

function checkCheckboxSelected4() {
  checkboxes4.forEach(function(checkbox) {
    if (checkbox.checked) {
      isAnyCheckboxSelected4 = true;
    }
  });
  
  if (isAnyCheckboxSelected4) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}

function checkTeachingLocationSelected() {
    teachingLocationRadios.forEach(function(radio) {
      if (radio.checked) {
        isTeachingLocationSelected = true;
        if (radio.value === '1') {
            unit45.style.display = 'none';
            unit90.style.display = 'block';
        } else if (radio.value === '2') {
            unit45.style.display = 'none';
            unit90.style.display = 'block';
        } else if (radio.value === '3') {
            unit45.style.display = 'block';
            unit90.style.display = 'none';
        }
      }
    });
  
   isUnitSelected = false;
    
    if (isTeachingLocationSelected) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  }

  function checkUnitSelected() {
    unitRadios.forEach(function(radio) {
      if (radio.checked) {
        isUnitSelected = true;
        if (radio.value === '1') {
            runtime1.style.display = 'block';
            runtime2.style.display = 'none';
            runtime3.style.display = 'none';
        } else if (radio.value === '2') {
            runtime1.style.display = 'none';
            runtime2.style.display = 'block';
            runtime3.style.display = 'none';
        } else if (radio.value === '3') {
            runtime1.style.display = 'none';
            runtime2.style.display = 'none';
            runtime3.style.display = 'block';
        }
      }
    });
    
    isUnitSelected = false;
    
    if (isUnitSelected) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  }

  function checkRuntimeSelected() {
    runtimeRadios.forEach(function(radio) {
      if (radio.checked) {
        if (radio.name === 'runtime-1Unit') {
          isRuntimeSelected = true;
          if (radio.value === '1') { 
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
              lesson1.style.display = 'block';
              lesson2.style.display = 'none';
              lesson3.style.display = 'none';
          } else if (radio.value === '2') {
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
              lesson1.style.display = 'block';
              lesson2.style.display = 'none';
              lesson3.style.display = 'none';
          } else if (radio.value === '3') {
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
              lesson1.style.display = 'block';
              lesson2.style.display = 'none';
              lesson3.style.display = 'none';
          }

          
          isRuntimeSelected = true;
        } else if (radio.name === 'runtime-2Unit') {
          if (radio.value === '1') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
          } else if (radio.value === '2') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
             lesson1.style.display = 'none';
             lesson2.style.display = 'block';
             lesson3.style.display = 'none';
          } else if (radio.value === '3') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
             lesson1.style.display = 'none';
             lesson2.style.display = 'block';
             lesson3.style.display = 'none';
          }
          
                 isRuntimeSelected = true;
        } else if (radio.name === 'runtime-3Unit') {
          if (radio.value === '1') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
          } else if (radio.value === '2') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
             lesson1.style.display = 'none';
             lesson2.style.display = 'none';
             lesson3.style.display = 'block';
          } else if (radio.value === '3') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
             lesson1.style.display = 'none';
             lesson2.style.display = 'none';
             lesson3.style.display = 'block';
         
         }
        // Der letzte else if BLock ist ohne Funktion, wird benutzt damit die anderen richtig funktionieren
             isRuntimeSelected = true;
        } else if (radio.name === 'runtime-4Unit') {
        }
      }
    });
    
    isRuntimeSelected = false;

    if (isRuntimeSelected) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  }

// Binden Sie das 'change'-Ereignis an alle Checkboxen im 'step1'
checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected1 = false;
    checkCheckboxSelected1();
  });
});

// Binden Sie das 'change'-Ereignis an alle Checkboxen im 'step2'
checkboxes2.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected2 = false;
    checkCheckboxSelected2();
  });
}); 

// Binden Sie das 'change'-Ereignis an alle Checkboxen im 'ste6'
checkboxes3.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected3 = false;
    checkCheckboxSelected3();
  });
}); 

// Binden Sie das 'change'-Ereignis an alle Checkboxen im 'ste6'
checkboxes4.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected4 = false;
    checkCheckboxSelected4();
  });
}); 



// Binden Sie das 'change'-Ereignis an alle Radiobuttons im 'step3'
teachingLocationRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      isTeachingLocationSelected = false;
      checkTeachingLocationSelected();
    });
  });

  // Binden Sie das 'change'-Ereignis an alle Radiobuttons im 'step4'
  unitRadios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isUnitSelected = false;
    checkUnitSelected();
  });
});

  // Binden Sie das 'change'-Ereignis an alle Radiobuttons im 'step5'
  runtimeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      isRuntimeSelected = false;
      checkRuntimeSelected();
    });
  });

// Binden Sie das 'click'-Ereignis an den 'nextBtn'
nextBtn.addEventListener('click', function() {
    if (isAnyCheckboxSelected1 && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step1.style.display = 'none';
      step2.style.display = 'block';
      backBtn.style.display = 'block';
      checkCheckboxSelected2();
    } else if (isAnyCheckboxSelected2 && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step2.style.display = 'none';
      step3.style.display = 'block';
      checkTeachingLocationSelected();
    } else if (isTeachingLocationSelected && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step3.style.display = 'none';
      step4.style.display = 'block';
      nextBtn.classList.add('disabled');
      checkUnitSelected();
    } else if (isUnitSelected && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step4.style.display = 'none';
      step5.style.display = 'block';
      nextBtn.classList.add('disabled');
      checkRuntimeSelected();
    } else if (isRuntimeSelected && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step6.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step5.style.display = 'none';
      step6.style.display = 'block';
      nextBtn.classList.add('disabled');
      checkCheckboxSelected3()
    } else if (isAnyCheckboxSelected3 && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step7.style.display == 'none' && step8.style.display == 'none') {
      step6.style.display = 'none';
      step7.style.display = 'block';
      checkCheckboxSelected4()
      nextBtn.classList.add('disabled');
    } else if (isAnyCheckboxSelected4 && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step8.style.display == 'none') {
      step7.style.display = 'none';
      step8.style.display = 'block';
      nextBtn.style.display = 'none';
      
    }
  });

// Binden Sie das 'click'-Ereignis an den 'backBtn'
backBtn.addEventListener('click', function() {
  if (step2.style.display === 'block') {
    step2.style.display = 'none';
    step1.style.display = 'block';
    backBtn.style.display = 'none';
    checkCheckboxSelected1();
  } else if (step3.style.display === 'block') {
    step3.style.display = 'none';
    step2.style.display = 'block';
    checkCheckboxSelected2();
  } else if (step4.style.display === 'block') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    checkTeachingLocationSelected();
  } else if (step5.style.display === 'block') {
    step5.style.display = 'none';
    step4.style.display = 'block';
    checkUnitSelected();
  } else if (step6.style.display === 'block') {
    step6.style.display = 'none';
    step5.style.display = 'block';
    checkRuntimeSelected();
  } else if (step7.style.display === 'block') {
    step7.style.display = 'none';
    step6.style.display = 'block';
    checkCheckboxSelected3();
  } else if (step8.style.display === 'block') {
    step8.style.display = 'none';
    step7.style.display = 'block';
    nextBtn.style.display = 'block';
    checkCheckboxSelected4();
  }
});
