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



const divBillingAddress = document.getElementById("content_billing-address");
const billingAddressPayable = document.getElementsByName("trigger_billing-address");
const streetNamePayable = document.getElementById("street-name_billing-address");
const houseNumberPayable = document.getElementById("house-number_billing-address");
const ZIPCodePayable = document.getElementById("zip-code_billing-address");
const cityNamePayable = document.getElementById("city-name_billing-address");
divBillingAddress.style.display = "none";

//start Validation only number
var ValidationInputFieldNumber1 = document.querySelector('input[name="zip-code_teaching-location"]');
var ValidationInputFieldNumber2 = document.querySelector('input[name="zip-code_billing-address"]');

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
applyValidation1(ValidationInputFieldNumber2);

//end Validation only number


//start Validation only letter
var ValidationInputFieldLetter1 = document.querySelector('input[name="first-name_teaching-location"]');
var ValidationInputFieldLetter2 = document.querySelector('input[name="location_teaching-location"]');
var ValidationInputFieldLetter3 = document.querySelector('input[name="first-name_student"]');
var ValidationInputFieldLetter4 = document.querySelector('input[name="second-name_student"]');
var ValidationInputFieldLetter5 = document.querySelector('input[name="first-name_payable"]');
var ValidationInputFieldLetter6 = document.querySelector('input[name="second-name_payable"]');
var ValidationInputFieldLetter7 = document.querySelector('input[name="street-name_billing-address"]');
var ValidationInputFieldLetter8 = document.querySelector('input[name="city-name_billing-address"]');

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
applyValidation2(ValidationInputFieldLetter3);
applyValidation2(ValidationInputFieldLetter4);
applyValidation2(ValidationInputFieldLetter5);
applyValidation2(ValidationInputFieldLetter6);
applyValidation2(ValidationInputFieldLetter7);
applyValidation2(ValidationInputFieldLetter8);



//end Validation only letter


//start function input validation

function applyInvalidBorderStyle(input) {
  input.style.borderColor = '#9d367a';
  input.style.borderWidth = '2px';
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


  
  
  
