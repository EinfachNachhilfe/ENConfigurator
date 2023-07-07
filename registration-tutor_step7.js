var step1 = document.getElementById('form-item_name');
var step2 = document.getElementById('form-item_bank');
var step3 = document.getElementById('form-item_file');
var step4 = document.getElementById('form-item_closing');
var submitBtn = document.getElementById('submit-btn');
var backBtn = document.getElementById('back-btn');
var nextBtn = document.getElementById('next-btn');
var requiredFields1 = document.querySelectorAll('#form-item_name [required]');
var requiredFields2 = document.querySelectorAll('#form-item_bank [required]');
var requiredFields3 = document.querySelectorAll('#form-item_file [required]');
var requiredFields4 = document.querySelectorAll('#form-item_closing [required]');
var isAllFieldsFilled1 = false;
var isAllFieldsFilled2 = false;
var isAllFieldsFilled3 = false;
var isAllFieldsFilled4 = false;
var checkboxes1 = step4.querySelectorAll('input[type="checkbox"]');
var showStepNumber = document.getElementById('show-step_number');
var certificateOfEnrollmentTutor = document.getElementById('certificate-of-enrollment_tutor');
var isUploadInputChangeV1 = document.getElementById('is-upload-input-change-v1');

  const inputValidationFirstNameTutor = document.getElementById('first-name_tutor');
  const inputValidationSecondNameTutor = document.getElementById('second-name_tutor');
  const inputValidationAttentiveTutor = document.getElementById('attentive_tutor');
  const inputValidationIbanTutor = document.getElementById('iban_tutor');
  const inputValidationNameBankTutor = document.getElementById('name-bank_tutor');

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



//start Validation IBAN
document.addEventListener('DOMContentLoaded', (event) => {
  const input = inputValidationIbanTutor;
  input.addEventListener('input', checkInput);
});

function checkInput() {
  const input = inputValidationIbanTutor;
  if (input.value.length > 0 && input.value.substring(0, 2) !== 'DE') {
    input.value = 'DE' + input.value;
    input.setSelectionRange(input.value.length,input.value.length);
  } else {
    // Remove any non-numeric characters after 'DE'
    input.value = 'DE' + input.value.substring(2).replace(/\D/g, '');
  }
}
//end Validation IBAN



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

applyValidation(inputValidationFirstNameTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationSecondNameTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationAttentiveTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationIbanTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^DE[0-9]{20}$');
applyValidation(inputValidationNameBankTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');


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
  validateOnButtonClick(inputValidationFirstNameTutor, step1);
  validateOnButtonClick(inputValidationSecondNameTutor, step1);
  validateOnButtonClick(inputValidationAttentiveTutor, step1);

  validateOnButtonClick(inputValidationNameBankTutor, step2);
  validateOnButtonClick(inputValidationIbanTutor, step2);



  //start function shake
  function shakeOnInvalid(input) {
  var originalPosition = input.getBoundingClientRect().left;
  input.style.transition = 'transform 0.1s ease-in-out';
  input.style.transform = 'translateX(3px)';
  setTimeout(function() {
    input.style.transform = '';
  }, 100);
  }
  //end function shake




document.addEventListener("DOMContentLoaded", function() {
checkAllFieldsFilled1();
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
backBtn.style.display = 'none';
submitBtn.style.display = 'none';
showStepNumber.textContent = "Schritt 1 von 5";
});


  
function checkAllFieldsFilled1() {
  var filledFields1 = 0;
  requiredFields1.forEach(function(field) {
    if (field.value && field.checkValidity()) {
      filledFields1++;
    }
  });

  if (filledFields1 === requiredFields1.length) {
    isAllFieldsFilled1 = true;
  
  }

 

  if (isAllFieldsFilled1) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }

  
}
requiredFields1.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled1 = false;
    checkAllFieldsFilled1();
   
  });
});


function checkAllFieldsFilled2() {
  var filledFields2 = 0;
  requiredFields2.forEach(function(field) {
    if (field.value && field.checkValidity()) {
      filledFields2++;
    }
  });

  if (filledFields2 === requiredFields2.length) {
    isAllFieldsFilled2 = true;
  
  }

  if (isAllFieldsFilled2) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  } 
}
requiredFields2.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled2 = false;
    checkAllFieldsFilled2();
   
  });
});



function checkAllFieldsFilled3() {
  var filledFields3 = 0;
  requiredFields3.forEach(function(field) {
    if (field.value || field.files.length > 0) {
      filledFields3++;
    }
  });

  if (filledFields3 === requiredFields3.length) {
    isAllFieldsFilled3 = true;
  } else {
    isAllFieldsFilled3 = false;
  }

  if (isAllFieldsFilled3) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}


 

var intervalTimer = setInterval(function() {
    var fieldsChanged = false;
    requiredFields3.forEach(function(input) {
      if (input.hasChanged || input.value !== input.lastValue) {
        fieldsChanged = true;
        input.hasChanged = false;
        input.lastValue = input.value;
      }
    });

  if (fieldsChanged) {
    isAllFieldsFilled3 = false;
    checkAllFieldsFilled3();
  }
});



function checkAllFieldsFilled4() {
    if (selectedCheckboxes === 2) {
      submitBtn.classList.remove('disabled');
    } else {
      submitBtn.classList.add('disabled');
    }
  }
  
  let selectedCheckboxes = 0;
  
  checkboxes1.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        selectedCheckboxes++;
      } else {
        selectedCheckboxes--;
      }
      checkAllFieldsFilled4();
    });
  });


nextBtn.addEventListener('click', function() {
  if (isAllFieldsFilled1 && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none') {
    step1.style.display = 'none';
    step2.style.display = 'block';
    backBtn.style.display = 'flex';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 2 von 4";
    checkAllFieldsFilled2();
  } else if (isAllFieldsFilled2 && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none') {
    step2.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 3 von 4";
    checkAllFieldsFilled3()
  } else if (isAllFieldsFilled3 && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none') {
    step3.style.display = 'none';
    step4.style.display = 'block';
    nextBtn.classList.add('disabled');
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    showStepNumber.textContent = "Schritt 4 von 4";
    checkAllFieldsFilled4() 
  }

});

backBtn.addEventListener('click', function() {
  if (step2.style.display === 'block') {
    step2.style.display = 'none';
    step1.style.display = 'block';
    backBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 1 von 4";
    checkAllFieldsFilled1();
  } else if (step3.style.display === 'block') {
    step3.style.display = 'none';
    step2.style.display = 'block';
    showStepNumber.textContent = "Schritt 2 von 4";
    checkAllFieldsFilled2();
  } else if (step4.style.display === 'block') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.style.display = 'flex';
    submitBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 3 von 4";
    checkAllFieldsFilled3();
}

});
