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


//start Validation only letter
var ValidationInputFieldLetter1 = document.querySelector('input[name="first-name_tutor"]');
var ValidationInputFieldLetter2 = document.querySelector('input[name="second-name_tutor"]');


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

//start Validation IBAN
document.addEventListener('DOMContentLoaded', (event) => {
  const input = document.getElementById('iban_tutor');
  input.value = 'DE';
  input.addEventListener('input', checkInput);
});

function checkInput() {
  const input = document.getElementById('iban_tutor');
  if (input.value.substring(0, 2) !== 'DE') {
    input.value = 'DE';
    input.setSelectionRange(2,2);
  } else {
    // Remove any non-numeric characters after 'DE'
    input.value = 'DE' + input.value.substring(2).replace(/\D/g, '');
  }
}

var ValidationInputFieldIban1 = document.querySelector('input[name="iban_tutor"]');

function applyValidation3(inputElement3) {
  inputElement3.setAttribute('pattern', '^DE[0-9]{22}$');
  inputElement3.setAttribute('maxlength', '22');

  inputElement3.addEventListener('change', function() {
    if (inputElement3.checkValidity()) {
      // Das Input-Feld enthält gültige Daten
      applyValidBorderStyle(inputElement3);
    } else {
      // Das Input-Feld enthält ungültige Daten
      applyInvalidBorderStyle(inputElement3);
      shakeOnInvalid(inputElement3);
    }
  });
  
   inputElement3.addEventListener('input', function() {
    if (inputElement3.checkValidity()) {
      inputElement3.style.borderColor = '';
      inputElement3.style.borderWidth = '';
    }
  }); 
}

applyValidation3(ValidationInputFieldIban1);
//end Validation IBAN

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
