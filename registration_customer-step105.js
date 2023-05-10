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
var isAnyGenderRadioSelected3 = false;



const divBillingAddress = document.getElementById("content_billing-address");
@@ -160,6 +158,9 @@ requiredFields2.forEach(function(input) {


function checkAllFieldsFilled3() {
  var filledFields3 = 0;
  var isBillingAddressRequired = false;
  var filledBillingFields = 0;
var billingAddressFields = [
  { streetNamePayable: { required: true } },
  { houseNumberPayable: { required: true } },
  { ZIPCodePayable: { required: true } },
  { cityNamePayable: { required: true } }
];
  requiredFields3.forEach(function (field) {
    if (field.value && field.checkValidity()) {
      filledFields3++;
    }
  });
  if (filledFields3 === requiredFields3.length) {
    isAllFieldsFilled3 = true;
  
  }
  billingAddressPayable.forEach(function (input) {
    if (input.checked && input.value === "2") {
      isBillingAddressRequired = true;
       
    }
  });
  if (isBillingAddressRequired) {
    billingAddressFields.forEach(function (field) {
      if (field.value && field.checkValidity()) {
        filledBillingFields++;
      }
    });
  }
    if (filledBillingFields ===  billingAddressFields.length) {
     isAllFieldsbillingAddress = true;
  
  }
      genderRadios2.forEach(function(radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected2 = true;
    }
  });
  
        genderRadios3.forEach(function(radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected3 = true;
    }
  });
if (isAllFieldsFilled3 && isAnyGenderRadioSelected2 && isAnyGenderRadioSelected3 && (isBillingAddressRequired === false || (isBillingAddressRequired === true &&  isAllFieldsbillingAddress === true))) {
  nextBtn.classList.remove('disabled');
} else {
  nextBtn.classList.add('disabled');
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
}
requiredFields3.forEach(function(input) {
  input.addEventListener('input', function() {
    checkAllFieldsFilled3();
   
  });
});
 
    genderRadios2.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isAnyGenderRadioSelected2 = false;
    checkAllFieldsFilled3();
  });
});
  
      genderRadios3.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isAnyGenderRadioSelected3 = false;
    checkAllFieldsFilled3();
  });
});
  
        billingAddressPayable.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isBillingAddressRequired = false;
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
  } else if (isAllFieldsFilled3 && isAnyGenderRadioSelected2 && isAnyGenderRadioSelected3 && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none') {
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
