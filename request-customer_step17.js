
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

 const inputValidationFirstNameContactPerson = document.getElementById('first-name_contact-person');
 const inputValidationSecondNameContactPerson = document.getElementById('second-name_contact-person');
 const inputValidationEmailContactPerson = document.getElementById('email_contact-person');
 const inputValidationPhoneNumberContactPerson = document.getElementById('phone-number_contact-person');
 const inputValidationZipCodeTeachingLocation = document.getElementById('zip-code_teaching-location');
 const inputValidationClassStudent = document.getElementById('class_student');
 const inputValidationCouponCode = document.getElementById('coupon-code');


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



 //start phone validation
  inputValidationPhoneNumberContactPerson.addEventListener('focus', function(e) {
    var value = e.target.value;
    if (!value.startsWith('+49')) {
        value = '+49' + value;
    }
  
    e.target.value = value;
  });
  
  inputValidationPhoneNumberContactPerson.addEventListener('input', function(e) {
    var value = e.target.value;
    var start = e.target.selectionStart;
    var end = e.target.selectionEnd;
  
    // Entferne alle Zeichen, die keine Ziffern oder das Pluszeichen sind
    value = value.replace(/[^0-9+]/g, '');
  
    // Stelle sicher, dass "+49" nicht geändert oder gelöscht werden kann
    if (!value.startsWith('+49')) {
        value = '+49';
    }
  
    // Entferne führende Nullen nach "+49"
    if (value.startsWith('+49') && value.length > 3) {
        value = '+49' + value.slice(3).replace(/^0+/, '');
    }
    e.target.value = value;
    e.target.setSelectionRange(start, end);
  });
  
  inputValidationPhoneNumberContactPerson.addEventListener('focus', setCursorPosition);
  
  function setCursorPosition(e) {
    const input = e.target;
    // Setze die Cursorposition nach '+49'
    input.setSelectionRange(3, 3);
  } 
  //end phone validation



 //start inputfield validation
    function applyValidation(inputElement, emptyErrorMsg, invalidErrorMsg, pattern = null) {
    let validImage = inputElement.parentNode.querySelector('.form_input-valid-image');
    let inValidImage = inputElement.parentNode.querySelector('.form_input-invalid-image');
    const errorMessageElement = document.createElement('span');        
  
    if (pattern !== null) {
      inputElement.setAttribute('pattern', pattern);
    }
      errorMessageElement.id = 'error_message';
      errorMessageElement.style.color = '#9d367a';
      errorMessageElement.style.display = 'none';
      errorMessageElement.style.marginTop = '-0.625rem';
      errorMessageElement.style.fontFamily = 'Roboto, sans-serif';
      errorMessageElement.style.fontSize = '0.8rem';
      inputElement.parentNode.insertBefore(errorMessageElement, inputElement.nextSibling);
  
    
  
      inputElement.addEventListener("change", function() {
        if (inputElement.value.trim() === '') {
          errorMessageElement.innerHTML = emptyErrorMsg;
          errorMessageElement.style.display = 'block';
          inputElement.style.borderColor = '#9e367a';
          inputElement.style.borderWidth = '1.5px';
          validImage.style.display = 'none';
          inValidImage.style.display = 'block';
          shakeOnInvalid(inputElement);
        } else if (inputElement.checkValidity()) {
          inputElement.style.borderColor = '#589b32';
          inputElement.style.borderWidth = '1.5px';
          validImage.style.display = 'block';
          inValidImage.style.display = 'none';
          errorMessageElement.style.display = 'none';
        } else {
          errorMessageElement.innerHTML = invalidErrorMsg;
          errorMessageElement.style.display = 'block';
          inputElement.style.borderColor = '#9e367a';
          inputElement.style.borderWidth = '1.5px';
          validImage.style.display = 'none';
          inValidImage.style.display = 'block';
          shakeOnInvalid(inputElement);
        }
      });
    }
  
  applyValidation(inputValidationFirstNameContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
  applyValidation(inputValidationSecondNameContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
  applyValidation(inputValidationEmailContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\S+@\\S+\\.\\S+$');
  applyValidation(inputValidationPhoneNumberContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^\\+49[1-9]\\d{1,}$');
  applyValidation(inputValidationZipCodeTeachingLocation, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '\\d+');
  applyValidation(inputValidationClassStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.'); 
 

    //end inputfield validation


    function validateOnButtonClick(inputElement, step) {
      nextBtn.addEventListener('click', function() {
        if (window.getComputedStyle(step, null).display === "block" && inputElement.value.trim() === '') {
          let errorMessageElement = inputElement.parentNode.querySelector('#error_message');
          let validImage = inputElement.parentNode.querySelector('.form_input-valid-image');
          let inValidImage = inputElement.parentNode.querySelector('.form_input-invalid-image');
    
          errorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
          errorMessageElement.style.display = 'block';
          inputElement.style.borderColor = '#9e367a'; // Set border color to red
          inputElement.style.borderWidth = '1.5px'; // Set border width to 1.5px
          validImage.style.display = 'none';
          inValidImage.style.display = 'block';
          shakeOnInvalid(inputElement);
        }
      });
    }
    
    // Anwenden der Funktion auf mehrere Eingabefelder:
    validateOnButtonClick(inputValidationFirstNameContactPerson, step8);
    validateOnButtonClick(inputValidationSecondNameContactPerson, step8);
    validateOnButtonClick(inputValidationPhoneNumberContactPerson, step8);
    validateOnButtonClick(inputValidationEmailContactPerson, step8);
    validateOnButtonClick(inputValidationClassStudent, step8);
    validateOnButtonClick(inputValidationZipCodeTeachingLocation, step8);
 






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

document.getElementById("coupon-code").oninput = function() {
    var input = this.value;
    var pattern = /lernen2023/i;
    var messageElement = document.getElementById("message_coupon-code");

    if (pattern.test(input)) {
        this.style.borderColor = "green";
        this.style.borderWidth = '1.5px';
        messageElement.textContent = "Gutscheincode akzeptiert. Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!";
        messageElement.style.display = "block";  // make the message visible
    } else {
        this.style.borderColor = "initial";
        messageElement.textContent = "Ungültiger Gutscheincode. Bitte versuchen Sie es erneut.";
        messageElement.style.display = "block";  // make the message visible
    }
};








