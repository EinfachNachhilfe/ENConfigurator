document.getElementById('IhrInputElementID').oninvalid = function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars
    var tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'red';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.innerText = 'Ihre benutzerdefinierte Fehlermeldung hier';
    this.parentNode.appendChild(tooltip);
}


const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const allInputs = document.querySelectorAll('input, select');


//start const registration 3 or better
  const zipCode = document.getElementById('zip-code_teaching-location-rt3ob');
  const firstNameSecondName = document.getElementById('first-name_student-rt3ob');
  const bday = document.getElementById('bday_student-rt3ob');
  const email = document.getElementById('email_payable-rt3ob');
  const phoneNumber = document.getElementById('phone-number_payable-rt3ob');
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
applyPhoneValidation(phoneNumber);

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
applyDateInputFormat(bday);
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

const specificElements = [
    {element: firstNameSecondName, pattern: '^[A-Za-zäöüÄÖÜß ]+$', invalidErrorMsg: 'Bitte geben Sie einen gültigen Namen ein.'},
    {element: zipCode, pattern: '\\d+', invalidErrorMsg: 'Bitte geben Sie eine gültige PLZ ein.'},
    {element: bday, pattern: '^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$', invalidErrorMsg: 'Bitte geben Sie ein gültiges Geburtsdatum ein.'},
    {element: email, pattern: '^\\S+@\\S+\\.\\S+$', invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'},
    {element: phoneNumber, pattern: '^\\+49[1-9]\\d{4,}$', invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'}
];

allInputs.forEach(inputElement => {
    // Überprüfen, ob das aktuelle Element in der Liste der spezifischen Elemente ist
    if (!specificElements.some(e => e.element === inputElement)) {
        let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
        let invalidErrorMsg = 'Ungültige Eingabe.';
        applyValidation(inputElement, emptyErrorMsg, invalidErrorMsg);
    }
});

// Jetzt wenden Sie die applyValidation-Funktion mit benutzerdefinierten Mustern und Fehlermeldungen auf die spezifischen Elemente an
specificElements.forEach(({element, pattern, invalidErrorMsg}) => {
    let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
    applyValidation(element, emptyErrorMsg, invalidErrorMsg, pattern);
});





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





const formItems = document.getElementsByClassName("form_item-input-wrapper-tab");
const currentStepElem = document.getElementById("currentStep");
const totalStepsElem = document.getElementById("totalSteps");
const regForm = document.getElementById("regForm");
let currentTab = 0;

nextBtn.classList.add("disabled");


nextBtn.addEventListener("click", function() {
    nextPrev(1);
});
prevBtn.addEventListener("click", function() {
    nextPrev(-1);
});

showTab(currentTab);

function showTab(n) {
    formItems[n].style.display = "block";

    const inputs = formItems[n].querySelectorAll("input, select");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", validateForm);
    }

    validateForm();

    if (n === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "flex";
    }
    if (n === (formItems.length - 1)) {
     nextBtn.value = "Abschicken";
    } else {
        nextBtn.value = "Weiter"; 
    }

    currentStepElem.textContent = n + 1;
    totalStepsElem.textContent = formItems.length;

    fixStepIndicator(n);
}

function nextPrev(n) {
    if (n == 1 && !validateForm()) {
        nextBtn.classList.add("disabled");
        return false;
    } else {
        nextBtn.classList.remove("disabled");
    }

    formItems[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= formItems.length) {
        regForm.submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let valid = true;
    const inputs = formItems[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && (!inputs[i].checkValidity() || inputs[i].value == "")) {
          inputs[i].className += " invalid";
          valid = false;
        }
        }
        
        // Validierung für Radio-Buttons
        const radios = formItems[currentTab].querySelectorAll("input[type='radio'][required]");
        let radioGroups = {};
        for (let j = 0; j < radios.length; j++) {
        let name = radios[j].getAttribute("name");
        radioGroups[name] = radioGroups[name] || [];
        radioGroups[name].push(radios[j]);
        }
        for (let groupName in radioGroups) {
        if (radioGroups.hasOwnProperty(groupName)) {
          let radioChecked = false;
          for (let k = 0; k < radioGroups[groupName].length; k++) {
            if (radioGroups[groupName][k].checked) {
              radioChecked = true;
              break;
            }
          }
          if (!radioChecked) {
            valid = false;
          }
        }
        }
        
        // Validierung für Checkboxen
        const checkboxes = formItems[currentTab].querySelectorAll("input[type='checkbox'][required]");
        if (checkboxes.length > 0) {
        let checkboxChecked = false;
        for (let l = 0; l < checkboxes.length; l++) {
          if (checkboxes[l].checked) {
            checkboxChecked = true;
            break;
          }
        }
        if (!checkboxChecked) {
          valid = false;
        }
        }
        
        // Validierung für <select>-Felder
        const selects = formItems[currentTab].querySelectorAll("select[required]");
        for (let m = 0; m < selects.length; m++) {
        if (!selects[m].value) {
          selects[m].className += " invalid";
          valid = false;
        }
        }

    if (valid) {
        formItems[currentTab].className += " finish";
        nextBtn.classList.remove("disabled");
    } else {
        nextBtn.classList.add("disabled");
    }
    return valid;
}

function fixStepIndicator(n) {
    for (let i = 0; i < formItems.length; i++) {
        formItems[i].className = formItems[i].className.replace(" active", "");
    }
    formItems[n].className += " active";
}



// Überwachen Sie den Radio-Button "ja" für Lernstörung
const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder-rt3ob'][value='1']");
const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder-rt3ob'][value='2']");
const containerLearningDisorder = document.getElementById("create-learning-disorder_student");

radioLearningDisorderNein.addEventListener("change", function() {
if (radioLearningDisorderNein.checked) {
    createInputField(containerLearningDisorder, "infoText", "Welche Lernstörung?", "learning-disorder_student", "Lernstörung eingeben");
  validateForm();
}
});

radioLearningDisorderJa.addEventListener("change", function() {
removeInputField("infoText", "learning-disorder_student");
  validateForm();
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
  validateForm();
}
});

radioBillingAddressJa.addEventListener("change", function() {
billingDetails.forEach(detail => {
    removeInputField(detail.labelId, detail.inputId);
});
  validateForm();
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
