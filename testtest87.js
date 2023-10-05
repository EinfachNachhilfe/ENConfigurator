
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//start const registration 3 or better
 const step1Rt3ob = document.getElementById('step-1-rt3ob');
 const step2Rt3ob = document.getElementById('step-2-rt3ob');
 const step3Rt3ob = document.getElementById('step-3-rt3ob');
 const step4Rt3ob = document.getElementById('step-4-rt3ob');
  const streetNameTeachingLocationRt3ob = document.getElementById('street-name_teaching-location-rt3ob');
  const houseNumberTeachingLocationRt3ob = document.getElementById('house-number_teaching-location-rt3ob');
  const zipCodeTeachingLocationRt3ob = document.getElementById('zip-code_teaching-location-rt3ob');
  const locationTeachingLocationRt3ob = document.getElementById('location_teaching-location-rt3ob');
  const firstNameStudentRt3ob = document.getElementById('first-name_student-rt3ob');
  const secondNameStudentRt3ob = document.getElementById('second-name_student-rt3ob');
  const schoolNameStudentRt3ob = document.getElementById('school-name_student-rt3ob');
  const schoolTypeStudentRt3ob = document.getElementById('school-type_student-rt3ob');
  const classStudentRt3ob = document.getElementById('class_student-rt3ob');
  const bdayStudentRt3ob = document.getElementById('bday_student-rt3ob');
  const subjectStudentRt3ob = document.getElementById('subject_student-rt3ob');
  const gradeStudentRt3ob = document.getElementById('grade_student-rt3ob');
  const firstNamePayableRt3ob = document.getElementById('first-name_payable-rt3ob');
  const secondNamePayableRt3ob = document.getElementById('second-name_payable-rt3ob');
  const emailPayableRt3ob = document.getElementById('email_payable-rt3ob');
  const phoneNumberPayableRt3ob = document.getElementById('phone-number_payable-rt3ob');
  const ibanPayableRt3ob = document.getElementById('iban_payable-rt3ob');
  const bankNamePayableRt3ob = document.getElementById('bank-name_payable-rt3ob');
  const becomeAttentiveCustomerRt3ob = document.getElementById('become-attentive_customer-rt3ob');
  const messageCustomerRt3ob = document.getElementById('message_customer-rt3ob');
//end const registration 3 or better


//start stepchange with enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (!nextBtn.classList.contains('disabled')) {
        nextBtn.click();
        event.preventDefault();
      }
    }
  });
  
  //end stepchange with enter


//start Validation Phone Number
function applyPhoneValidation(inputElement) {
inputElement.addEventListener('focus', () => {
if(inputElement.value === '') {
inputElement.value = '+49';
}
});
inputElement.addEventListener('input', () => checkInputPhone(inputElement));
}

function checkInputPhone(inputElement) {
if (inputElement.value.substring(0, 3) !== '+49') {
inputElement.value = '+49';
inputElement.setSelectionRange(3,3);
} else {
// Remove any non-numeric characters after '+49'
let numberPart = inputElement.value.substring(3).replace(/\D/g, '');
if (numberPart.startsWith('0')) {
numberPart = numberPart.substring(1);
}
inputElement.value = '+49' + numberPart;
}
}
applyPhoneValidation(phoneNumberPayableRt3ob);

//end Validation Phone Number


//start bday validation
function applyDateInputFormat(inputElement) {
inputElement.addEventListener('input', function(e) {
let value = e.target.value;

// remove all non-digit characters
value = value.replace(/\D/g, '');

// add dots after day and month
if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);

e.target.value = value;
});
}
applyDateInputFormat(bdayStudentRt3ob);
//end bday validation

//start iban validation
function addIbanValidation(inputElement) {
    inputElement.addEventListener('input', function() {
      checkIbanInput(inputElement);
    });
  }
  
  function checkIbanInput(inputElement) {
    if (inputElement.value.substring(0, 2) !== 'DE') {
      inputElement.value = 'DE';
      inputElement.setSelectionRange(2,2);
    } else {
      // Remove any non-numeric characters after 'DE'
      inputElement.value = 'DE' + inputElement.value.substring(2).replace(/\D/g, '');
    }
  }
  
//end iban validation
  
function applyValidation(inputElement, step, emptyErrorMsg, invalidErrorMsg, pattern = null) {
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


nextBtn.addEventListener('click', function() {
    if (isStepVisible(step) && nextBtn.classList.contains('disabled')) { 
      if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
          errorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
          errorMessageElement.style.display = 'block';
          inputElement.style.borderColor = '#9e367a'; 
          inputElement.style.borderWidth = '1.5px';
          validImage.style.display = 'none';
          inValidImage.style.display = 'block';
          shakeOnInvalid(inputElement);
      }
  }
  });

}


//start const registration 3 or better
applyValidation(streetNameTeachingLocationRt3ob, step1Rt3ob, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(houseNumberTeachingLocationRt3ob, step1Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(zipCodeTeachingLocationRt3ob, step1Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '\\d+');
applyValidation(locationTeachingLocationRt3ob, step1Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(firstNameStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^[A-Za-zäöüÄÖÜß ]+$');
applyValidation(secondNameStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^[A-Za-zäöüÄÖÜß ]+$');
applyValidation(schoolNameStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(schoolTypeStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(classStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(bdayStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$');
applyValidation(subjectStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(gradeStudentRt3ob, step2Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(firstNamePayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^[A-Za-zäöüÄÖÜß ]+$');
applyValidation(secondNamePayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^[A-Za-zäöüÄÖÜß ]+$');
applyValidation(emailPayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^\\S+@\\S+\\.\\S+$');
applyValidation(phoneNumberPayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.','^\\+49[1-9]\\d{4,}$');
applyValidation(ibanPayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(bankNamePayableRt3ob, step3Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(becomeAttentiveCustomerRt3ob, step4Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(messageCustomerRt3ob, step4Rt3ob,'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
//end const registration 3 or better


//start function shake
function shakeOnInvalid(input) {
let originalPosition = input.getBoundingClientRect().left;
input.style.transition = 'transform 0.1s ease-in-out';
input.style.transform = 'translateX(3px)';
setTimeout(function() {
input.style.transform = '';
}, 100);
}
//end function shake


nextBtn.classList.add("disabled");
nextBtn.addEventListener("click", function() {
    nextPrev(1);
});
prevBtn.addEventListener("click", function() {
    nextPrev(-1);
});


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("form_item-input-wrapper-tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("form_item-input-wrapper-tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("form_item-input-wrapper-tab")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("form_item-input-wrapper-tab");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// Überwachen Sie den Radio-Button "ja" für Lernstörung
const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder-rt3ob'][value='1']");
const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder-rt3ob'][value='2']");
const containerLearningDisorder = document.getElementById("create-learning-disorder_student");

radioLearningDisorderNein.addEventListener("change", function() {
if (radioLearningDisorderNein.checked) {
    createInputField(containerLearningDisorder, "infoText", "Welche Lernstörung?", "learning-disorder_student", "Lernstörung eingeben");
}
});

radioLearningDisorderJa.addEventListener("change", function() {
removeInputField("infoText", "learning-disorder_student");
});

// Überwachen Sie den Radio-Button "ja" für Rechnungsadresse
const radioBillingAddressJa = document.querySelector("input[type='radio'][name='trigger_billing-address-rt3ob'][value='1']");
const radioBillingAddressNein = document.querySelector("input[type='radio'][name='trigger_billing-address-rt3ob'][value='2']");

const billingDetails = [
{ containerId: "create-street-name_billing-address", labelId: "streetNameLabel", labelText: "Straßenname ", inputId: "street-name_billing-address", inputPlaceholder: "Straßenname eingeben" },
{ containerId: "create-house-number_billing-address", labelId: "houseNumberLabel", labelText: "Hausnummer ", inputId: "house-number_billing-address", inputPlaceholder: "Hausnummer eingeben" },
{ containerId: "create-zip-code_billing-address", labelId: "zipCodeLabel", labelText: "PLZ ", inputId: "zip-code_billing-address", inputPlaceholder: "PLZ eingeben" },
{ containerId: "create-city-name_billing-address", labelId: "cityNameLabel", labelText: "Ort ", inputId: "city-name_billing-address", inputPlaceholder: "Ort eingeben" }
];

radioBillingAddressNein.addEventListener("change", function() {
if (radioBillingAddressNein.checked) {
    billingDetails.forEach(detail => {
        createInputField(document.getElementById(detail.containerId), detail.labelId, detail.labelText, detail.inputId, detail.inputPlaceholder);
    });
}
});

radioBillingAddressJa.addEventListener("change", function() {
billingDetails.forEach(detail => {
    removeInputField(detail.labelId, detail.inputId);
});
});

function createInputField(container, labelId, labelText, inputId, inputPlaceholder) {
const textDiv = document.createElement("div");
textDiv.className = "form_label";
textDiv.id = labelId;
textDiv.textContent = labelText;
textDiv.style.marginBottom = "0.6rem"; 

const asteriskSpan = document.createElement("span");
asteriskSpan.className = "text-span_required";
asteriskSpan.textContent = "*";
textDiv.appendChild(asteriskSpan);

container.parentNode.insertBefore(textDiv, container);

const inputFeld = document.createElement("input");
inputFeld.type = "text";
inputFeld.id = inputId;
inputFeld.className = "form_input";
inputFeld.placeholder = inputPlaceholder;
inputFeld.required = true;
inputFeld.name = inputId;
  
container.appendChild(inputFeld);
inputFeld.addEventListener("input", validateForm);
}

function removeInputField(labelId, inputId) {
const vorhandenerText = document.getElementById(labelId);
if (vorhandenerText) {
    vorhandenerText.parentNode.removeChild(vorhandenerText);
}

const vorhandenesInputFeld = document.getElementById(inputId);
if (vorhandenesInputFeld) {
    vorhandenesInputFeld.parentNode.removeChild(vorhandenesInputFeld);
}
}