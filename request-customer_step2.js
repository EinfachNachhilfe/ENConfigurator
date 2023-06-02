
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
var requiredFields = step8.querySelectorAll('[required]');
var submitBtn = document.getElementById('submit-btn');


 //start stepchange with enter
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Überprüfen, ob der nextBtn die Klasse 'disabled' nicht hat
      if (!nextBtn.classList.contains('disabled')) {
        nextBtn.click();
        event.preventDefault(); // Verhindert das Absenden des Formulars oder andere Standardaktionen
      }
    }
  });
  
  //end stepchange with enter


  //start Validation Phone
  var selectedOption = "";
  
  function updateInputValue() {
    var selectElement = document.getElementById("custom_form-input-is-select-input");
    selectedOption = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById("phone-number_payable").value = selectedOption;
  }
  
  document.getElementById("custom_form-input-is-select-input").addEventListener("change", function() {
    updateInputValue();
  });
  
  document.getElementById("phone-number_payable").addEventListener("input", function() {
    if (this.value.length < selectedOption.length) {
      this.value = selectedOption;
    }
  });
  
  updateInputValue();
  
  function checkInput2() {
    const input2 = document.getElementById('phone-number_payable');
    if (input2.value.substring(0, selectedOption.length) !== selectedOption) {
      input2.value = selectedOption;
      input2.setSelectionRange(selectedOption.length, selectedOption.length);
    } else {
      // Remove any non-numeric characters after 'selectedOption'
      input2.value = selectedOption + input2.value.substring(selectedOption.length).replace(/\D/g, '');
    }
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const input2 = document.getElementById('phone-number_payable');
    input2.value = selectedOption;
    input2.addEventListener('input', checkInput2);
    updateInputValue();
  });
  
  
      var ValidationInputFieldPhone1 = document.getElementById('phone-number_payable');
  
      function applyValidation4(inputElement4) {
        inputElement4.setAttribute('pattern', '^.{8,}$');
        
       inputElement4.addEventListener('change', function() {
      if (inputElement4.checkValidity()) {
        
        applyValidBorderStyle(inputElement4);
      } else {
       
        applyInvalidBorderStyle(inputElement4);
        shakeOnInvalid(inputElement4);
      }
    });
    
     inputElement4.addEventListener('input', function() {
      if (inputElement4.checkValidity()) {
        inputElement4.style.borderColor = '';
        inputElement4.style.borderWidth = '';
      }
    }); 
  }
  
      applyValidation4(ValidationInputFieldPhone1);
  
  //end Validation Phone

  //start Validation only number max length 5
  var ValidationInputFieldNumber1 = document.querySelector('input[name="zip-code_teaching-location"]');
  
  
  function applyValidation1(inputElement1) {
    inputElement1.setAttribute('pattern', '\\d+');
    inputElement1.setAttribute('maxlength', '5');
    
   
    inputElement1.addEventListener('invalid', function() {
      applyInvalidBorderStyle(inputElement1);
        shakeOnInvalid(inputElement1);
    });
  
    inputElement1.addEventListener('input', function() {
      if (inputElement1.checkValidity()) {
        inputElement1.style.borderColor = '';
        inputElement1.style.borderWidth = '';
      }
    }); 
  }
  
  applyValidation1(ValidationInputFieldNumber1);
  
  //end Validation only number max length 5

 //start Validation only letter
  var ValidationInputFieldLetter1 = document.querySelector('input[name="first-name_contact-person"]');
  var ValidationInputFieldLetter2 = document.querySelector('input[name="second-name_contact-person"]');

  
  function applyValidation2(inputElement2) {
   inputElement2.setAttribute('pattern', '^[A-Za-z ]+$');
  
  
    
   
    inputElement2.addEventListener('invalid', function() {
      applyInvalidBorderStyle(inputElement2);
        shakeOnInvalid(inputElement2);
    });
  
    inputElement2.addEventListener('input', function() {
      if (inputElement2.checkValidity()) {
        inputElement2.style.borderColor = '';
        inputElement2.style.borderWidth = '';
      }
    }); 
  }
  
  applyValidation2(ValidationInputFieldLetter1);
  applyValidation2(ValidationInputFieldLetter2);

  //end Validation only letter
  

 //start Validation Mail
  
  var ValidationInputFieldMail1 = document.getElementById('email_contact-person');
  
  function applyValidation5(inputElement5) {
  
    
   inputElement5.addEventListener('change', function() {
  if (inputElement5.checkValidity()) {
    // Das Input-Feld enthält gültige Daten
    applyValidBorderStyle(inputElement5);
  } else {
    // Das Input-Feld enthält ungültige Daten
    applyInvalidBorderStyle(inputElement5);
    shakeOnInvalid(inputElement5);
  }
  });
  
  inputElement5.addEventListener('input', function() {
  if (inputElement5.checkValidity()) {
    inputElement5.style.borderColor = '';
    inputElement5.style.borderWidth = '';
  }
  }); 
  }
  
  applyValidation5(ValidationInputFieldMail1);
  
  //end Validation Mail

//start function input validation
  
  function applyInvalidBorderStyle(input) {
    input.style.borderColor = '#9d367a';
    input.style.borderWidth = '1.5px';
  }
  
  function shakeOnInvalid(input) {
    var originalPosition = input.getBoundingClientRect().left;
    input.style.transition = 'transform 0.1s ease-in-out';
    input.style.transform = 'translateX(3px)';
    setTimeout(function() {
      input.style.transform = '';
    }, 100);
  }
  //end function input validation


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
submitBtn.style.display = 'none';

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

  isAnyCheckboxSelected4 = false;
  
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
    
    isRuntimeSelected = false;
    
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
             lesson1.style.display = 'none';
             lesson2.style.display = 'block';
             lesson3.style.display = 'none';
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
             lesson1.style.display = 'none';
             lesson2.style.display = 'none';
             lesson3.style.display = 'block';
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
    
    isAnyCheckboxSelected3 = false;

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
      nextBtn.classList.add('disabled');
      checkCheckboxSelected4()
    } else if (isAnyCheckboxSelected4 && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none' && step6.style.display == 'none' && step8.style.display == 'none') {
      step7.style.display = 'none';
      step8.style.display = 'block';
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'block';
      
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
    submitBtn.style.display = 'none';
    checkCheckboxSelected4();
  }
});


 //start stepchange with enter
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Überprüfen, ob der nextBtn die Klasse 'disabled' nicht hat
      if (!nextBtn.classList.contains('disabled')) {
        nextBtn.click();
        event.preventDefault(); // Verhindert das Absenden des Formulars oder andere Standardaktionen
      }
    }
  });
  
  //end stepchange with enter


const requiredFields4 = document.querySelectorAll('#step-item_form-1 [required]');
var isAllFieldsFilled4 = false; 


        function checkAllFieldsFilled4() {
            isAllFieldsFilled4 = false;
            var filledFields4 = 0;
  
            requiredFields4.forEach(function(field) {
                if (field.value && field.checkValidity()) {
                    filledFields4++;
                }
            });
  
            if (filledFields4 === requiredFields4.length) {
                isAllFieldsFilled4 = true;
  
            }
          

  
            if (isAllFieldsFilled4) {
                submitBtn.classList.remove('disabled');
            } else {
                submitBtn.classList.add('disabled');
            }
        }
  
        requiredFields4.forEach(function(input) {
            input.addEventListener('input', function() {
                checkAllFieldsFilled4();
  
            });
        });

function checkCoupon() {
    var input = document.getElementById("coupon-code").value;
    var pattern = /lernen2023/i; // i-Flag für case-insensitive (Groß-/Kleinschreibung ignorieren)

    if (pattern.test(input)) {
        alert("Gutscheincode akzeptiert. Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!");
    } else {
        alert("Ungültiger Gutscheincode. Bitte versuchen Sie es erneut.");
    }
}






