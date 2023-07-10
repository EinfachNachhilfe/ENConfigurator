var step1 = document.getElementById('form-item_adress');
var step2 = document.getElementById('form-item_student');
var step3 = document.getElementById('form-item_payable');
var step4 = document.getElementById('form-item_closing');
var submitBtn = document.getElementById('submit-btn');
var backBtn = document.getElementById('back-btn');
var nextBtn = document.getElementById('next-btn');
var requiredFields1 = document.querySelectorAll('#form-item_adress [required]');
var requiredFields2 = document.querySelectorAll('#form-item_student [required]');
var requiredFields3 = document.querySelectorAll('#form-item_payable [required]');
var requiredFields4 = document.querySelectorAll('#form-item_closing [required]');
var isAllFieldsFilled1 = false;
var isAllFieldsFilled2 = false;
var isAllFieldsFilled3 = false;
var isAllFieldsFilled4 = false;
var isAnyCheckboxSelected1 = false;
var checkboxes1 = step4.querySelectorAll('input[type="checkbox"]');
var showStepNumber = document.getElementById('show-step_number');
var genderRadios1 = document.querySelectorAll('input[name="gender_student"]');
var genderRadios2 = document.querySelectorAll('input[name="gender_payable"]');
var genderRadios3 = document.querySelectorAll('input[name="trigger_billing-address"]');
var isAnyGenderRadioSelected1 = false;
var isAnyGenderRadioSelected2 = false;
var filledBillingFields = 0;
var isBillingAddressRequired = false;
var isAnyGenderRadioSelected3 = false;


const inputValidationStreetNameTeachingLocation = document.getElementById('street-name_teaching-location'); 
const inputValidationHouseNumberTeachingLocation = document.getElementById('house-number_teaching-location'); 
const inputValidationZipCodeTeachingLocation = document.getElementById('zip-code_teaching-location'); 
const inputValidationLocationTeachingLocation = document.getElementById('location_teaching-location'); 
const inputValidationFirstNameStudent = document.getElementById('first-name_student'); 
const inputValidationSecondNameStudent = document.getElementById('second-name_student'); 
const inputValidationSchoolNameStudent = document.getElementById('school-name_student'); 
const inputValidationSchoolTypeStudent = document.getElementById('school-type_student'); 
const inputValidationClassStudent = document.getElementById('class_student'); 
const inputValidationBdayStudent = document.getElementById('bday_student'); 
const inputValidationFirstNamePayable = document.getElementById('first-name_payable'); 
const inputValidationSecondNamePayable = document.getElementById('second-name_payable'); 
const inputValidationEmailPayable = document.getElementById('email_payable'); 
const inputValidationPhoneNumberPayable = document.getElementById('phone-number_payable'); 
const inputValidationIbanPayable = document.getElementById('iban_payable'); 
const inputValidationBankNamePayable = document.getElementById('bank-name_payable'); 
const inputValidationStreetNameBillingAddress = document.getElementById('street-name_billing-address'); 
const inputValidationHouseNumberBillingAddress = document.getElementById('house-number_billing-address'); 
const inputValidationZipCodeBillingAddress = document.getElementById('zip-code_billing-address'); 
const inputValidationCityNameBillingAddress = document.getElementById('city-name_billing-address'); 


const divBillingAddress = document.getElementById("content_billing-address");
const billingAddressPayable = document.getElementsByName("trigger_billing-address");
const streetNamePayable = document.getElementById("street-name_billing-address");
const houseNumberPayable = document.getElementById("house-number_billing-address");
const ZIPCodePayable = document.getElementById("zip-code_billing-address");
const cityNamePayable = document.getElementById("city-name_billing-address");
divBillingAddress.style.display = "none";

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

//start Validation Phone Number
inputValidationPhoneNumberPayable.addEventListener('focus', () => {
  if(inputValidationPhoneNumberPayable.value === '') {
    inputValidationPhoneNumberPayable.value = '+49';
  }
});

inputValidationPhoneNumberPayable.addEventListener('input', () => checkInput(inputValidationPhoneNumberPayable));

function checkInput(inputValidationPhoneNumberPayable) {
  if (inputValidationPhoneNumberPayable.value.substring(0, 3) !== '+49') {
    inputValidationPhoneNumberPayable.value = '+49';
    inputValidationPhoneNumberPayable.setSelectionRange(3,3);
  } else {
    // Remove any non-numeric characters after '+49'
    inputValidationPhoneNumberPayable.value = '+49' + inputValidationPhoneNumberPayable.value.substring(3).replace(/\D/g, '');
  }
}
//end Validation Phone Number


//start bday validation
inputValidationBdayStudent.addEventListener('input', function(e) {
    var value = e.target.value;
    
    // remove all non-digit characters
    value = value.replace(/\D/g, '');

    // add dots after day and month
    if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
    if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);

    e.target.value = value;
});
//end bday validation

//start Validation IBAN
 inputValidationIbanPayable.addEventListener('focus', () => {
    if(inputValidationIbanPayable.value === '') {
      inputValidationIbanPayable.value = 'DE';
    }
  });

  inputValidationIbanPayable.addEventListener('input', () => checkInput(inputValidationIbanPayable));


function checkInput(inputValidationIbanPayable) {
  if (inputValidationIbanPayable.value.substring(0, 2) !== 'DE') {
    inputValidationIbanPayable.value = 'DE';
    inputValidationIbanPayable.setSelectionRange(2,2);
  } else {
    // Remove any non-numeric characters after 'DE'
    inputValidationIbanPayable.value = 'DE' + inputValidationIbanPayable.value.substring(2).replace(/\D/g, '');
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

applyValidation(inputValidationStreetNameTeachingLocation, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationHouseNumberTeachingLocation, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationZipCodeTeachingLocation, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationLocationTeachingLocation, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationFirstNameStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationSecondNameStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationSchoolNameStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationSchoolTypeStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationClassStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationBdayStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationFirstNamePayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationSecondNamePayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationEmailPayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationPhoneNumberPayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationIbanPayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationBankNamePayable, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationStreetNameBillingAddress, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationHouseNumberBillingAddress, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationZipCodeBillingAddress, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationCityNameBillingAddress, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');


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
validateOnButtonClick(inputValidationStreetNameTeachingLocation, step1);
validateOnButtonClick(inputValidationHouseNumberTeachingLocation, step1);
validateOnButtonClick(inputValidationZipCodeTeachingLocation, step1);
validateOnButtonClick(inputValidationLocationTeachingLocation, step1);
validateOnButtonClick(inputValidationFirstNameStudent, step2);
validateOnButtonClick(inputValidationSecondNameStudent, step2);
validateOnButtonClick(inputValidationSchoolNameStudent, step2);
validateOnButtonClick(inputValidationSchoolTypeStudent, step2);
validateOnButtonClick(inputValidationClassStudent, step2);
validateOnButtonClick(inputValidationBdayStudent, step2);
validateOnButtonClick(inputValidationFirstNamePayable, step3);
validateOnButtonClick(inputValidationSecondNamePayable, step3);
validateOnButtonClick(inputValidationEmailPayable, step3);
validateOnButtonClick(inputValidationPhoneNumberPayable, step3);
validateOnButtonClick(inputValidationIbanPayable, step3);
validateOnButtonClick(inputValidationBankNamePayable, step3);
validateOnButtonClick(inputValidationStreetNameBillingAddress, step3);
validateOnButtonClick(inputValidationHouseNumberBillingAddress, step3);
validateOnButtonClick(inputValidationZipCodeBillingAddress, step3);
validateOnButtonClick(inputValidationCityNameBillingAddress, step3);







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
  
    genderRadios1.forEach(function(radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected1 = true;
    }
  });

  if (isAllFieldsFilled2 && isAnyGenderRadioSelected1) {
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

  genderRadios1.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isAnyGenderRadioSelected1 = false;
    checkAllFieldsFilled2();
  });
});



function checkAllFieldsFilled3() {
  var filledFields3 = 0;
  filledBillingFields = 0;
  filledBillingFields = 0;
  isBillingAddressRequired = false;
  isAnyGenderRadioSelected3 = false;
   isAnyGenderRadioSelected3 = false;
   isAnyGenderRadioSelected2 = false;
   isAllFieldsFilled3 = false;

  
  requiredFields3.forEach(function (field) {
    if (field.value && field.checkValidity()) {
      filledFields3++;
    }
  });

  if (filledFields3 === requiredFields3.length) {
    isAllFieldsFilled3 = true;
  }

  genderRadios2.forEach(function (radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected2 = true;
    }
  });

  genderRadios3.forEach(function(radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected3 = true;
      if (radio.value === "2") {
        isBillingAddressRequired = true;
        if (
          streetNamePayable.value && streetNamePayable.checkValidity() &&
          houseNumberPayable.value && houseNumberPayable.checkValidity() &&
          ZIPCodePayable.value && ZIPCodePayable.checkValidity() &&
          cityNamePayable.value && cityNamePayable.checkValidity()
        ) {
          filledBillingFields = 4;
        }
      }
    }
  });

  if (
    isAllFieldsFilled3 && isAnyGenderRadioSelected2 && isAnyGenderRadioSelected3 && (!isBillingAddressRequired || (isBillingAddressRequired && filledBillingFields === 4))
  ) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}
  
  billingAddressPayable.forEach(function(input) {
    input.addEventListener("change", function() {
      if (input.value === "1") {
        divBillingAddress.style.display = "none";
        streetNamePayable.value = "";
        houseNumberPayable.value = "";
        ZIPCodePayable.value = "";
        cityNamePayable.value = "";
      } else if (input.value === "2") {
        divBillingAddress.style.display = "block";
      
      }
    });
  });


requiredFields3.forEach(function(input) {
  input.addEventListener('input', function() {
    checkAllFieldsFilled3();
   
  });
});
  
    genderRadios2.forEach(function(radio) {
  radio.addEventListener('change', function() {
    checkAllFieldsFilled3();
  });
});
  
      genderRadios3.forEach(function(radio) {
  radio.addEventListener('change', function() {
    checkAllFieldsFilled3();
  });
});

billingAddressPayable.forEach(function(radio) {
  radio.addEventListener('change', function() {
    checkAllFieldsFilled3();
  });
});

  [streetNamePayable, houseNumberPayable, ZIPCodePayable, cityNamePayable].forEach(function(input) {
  input.addEventListener('input', function() {
    checkAllFieldsFilled3();
  });
});

  
  function checkCheckboxSelected1() {
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
      checkCheckboxSelected1();
    });
  });
  
  checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected1 = false;
    checkCheckboxSelected1();
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
  } else if (isAllFieldsFilled2 && isAnyGenderRadioSelected1 && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none') {
    step2.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 3 von 4";
    checkAllFieldsFilled3()
  } else if (isAllFieldsFilled3 && isAnyGenderRadioSelected2 && isAnyGenderRadioSelected3 && (!isBillingAddressRequired || (isBillingAddressRequired && filledBillingFields === 4)) && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none') {
    step3.style.display = 'none';
    step4.style.display = 'block';
    nextBtn.classList.add('disabled');
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    showStepNumber.textContent = "Schritt 4 von 4";
    checkCheckboxSelected1()
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
});


  
  
  
