//start general
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const submitBtn = document.querySelector('#submitBtn');
const allInputs = document.querySelectorAll('input, select, textarea');
let validationElements = {};
//end general

//start const registration 3 or better
const zipCodeTeachingLocation = document.getElementById('zip-code_teaching-location');
const bdayStudent = document.getElementById('bday_student');
const emailPayable = document.getElementById('email_payable');
const phoneNumberPayable = document.getElementById('phone-number_payable');
const ibanPayable = document.getElementById('iban_payable');
//end const registration 3 or better

//start cancel tutoring
const emailCustomer = document.getElementById('email_customer');
const phoneNumberCustomer = document.getElementById('phone-number_customer');
const contractTerminationCustomer = document.getElementById('contract-termination_customer');
//end cancel tutoring

    //start contact form
    const phoneNumberContactPerson = document.getElementById('phone-number_contact-person');
    const emailContactPerson = document.getElementById('email_contact-person');
//end contact form





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

if (phoneNumberPayable) {
    applyPhoneValidation(phoneNumberPayable);
}

if (phoneNumberCustomer) {
    applyPhoneValidation(phoneNumberCustomer);
}

        if (phoneNumberContactPerson) {
    applyPhoneValidation(phoneNumberContactPerson);
}

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

if (phoneNumberPayable) {
    applyDateInputFormat(bdayStudent);
}

if (contractTerminationCustomer) {
    applyDateInputFormat(contractTerminationCustomer);
}

//end bday validation

//start iban validation
function applyIbanValidation(inputElement, countryPrefix = 'DE') {
    inputElement.addEventListener('focus', function() {
        if (inputElement.value.trim() === '') {
            inputElement.value = countryPrefix;
        }
    });

    inputElement.addEventListener('input', function() {
        validateIbanInput(inputElement, countryPrefix);
    });
}

function validateIbanInput(inputElement, countryPrefix) {
    if (inputElement.value.substring(0, 2) !== countryPrefix) {
        inputElement.value = countryPrefix;
        inputElement.setSelectionRange(countryPrefix.length, countryPrefix.length);
    } else {
        // Remove any non-numeric characters after the country prefix
        let newValue = countryPrefix + inputElement.value.substring(2).replace(/\D/g, '');
        inputElement.value = newValue;
    }
}
if (phoneNumberPayable) {
    applyIbanValidation(ibanPayable);
}
//end iban validation



//start form validation
function isElementVisible(el) {
    if (!el || el === document.body) return true; // Wenn wir den Body erreichen, ist das Element sichtbar
    if (window.getComputedStyle(el, null).display === 'none') return false; // Das Element ist unsichtbar
    return isElementVisible(el.parentNode); // Überprüfen Sie das übergeordnete Element
}


function applyValidation(inputElement, emptyErrorMsg, invalidErrorMsg, pattern = null) {
    const errorMessageElement = document.createElement('span');
    const validSymbol = document.createElement('span');
    const invalidSymbol = document.createElement('span');

    validSymbol.textContent = '✓';
    validSymbol.style.color = '#589b32';
    validSymbol.style.display = 'none'; // Versteckt zu Beginn
    validSymbol.style.right = '1.2rem';
    validSymbol.style.top = '50%';
    validSymbol.style.transform = 'translateY(-50%)';
    validSymbol.style.zIndex = '3';
    validSymbol.style.position = 'absolute';
  
    invalidSymbol.textContent = '✗';
    invalidSymbol.style.color = '#9e367a';
    invalidSymbol.style.display = 'none'; // Versteckt zu Beginn
    invalidSymbol.style.position = 'absolute';
    invalidSymbol.style.right = '1.2rem';
    invalidSymbol.style.top = '50%';
    invalidSymbol.style.transform = 'translateY(-50%)';
    invalidSymbol.style.zIndex = '3';

    if (pattern !== null) {
        inputElement.setAttribute('pattern', pattern);
    }
    errorMessageElement.style.color = '#9d367a';
    errorMessageElement.style.display = 'none';
    errorMessageElement.style.marginTop = '-0.625rem';
    errorMessageElement.style.fontFamily = 'Roboto, sans-serif';
    errorMessageElement.style.fontSize = '0.8rem';

   let errorMessageWrapper;

if (inputElement.type === 'radio') {
    // Für Radiobuttons
    errorMessageWrapper = inputElement.parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
} else {
    // Für andere Eingabeelemente
    errorMessageWrapper = inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
}

// Weiterer Code, um mit dem errorMessageWrapper zu arbeiten...

    const validationImageWrapper = inputElement.closest('.form_input-validation-image-wrapper');

    if (errorMessageWrapper) {
        errorMessageWrapper.appendChild(errorMessageElement);
    }
    if (validationImageWrapper) {
        validationImageWrapper.appendChild(validSymbol);
        validationImageWrapper.appendChild(invalidSymbol);
    }

   inputElement.addEventListener("change", function() {
    if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
        errorMessageElement.innerHTML = emptyErrorMsg;
        errorMessageElement.style.display = 'block';
        inputElement.style.borderColor = '#9e367a';
        inputElement.style.borderWidth = '1.5px';
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'inline'; // Zeigt das X an
        shakeOnInvalid(inputElement);
    } else if (inputElement.value.trim() === '' && !inputElement.hasAttribute('required')) {
        // Setzen Sie den Standardzustand des Feldes zurück
        inputElement.style.borderColor = ''; // Oder setzen Sie es auf die ursprüngliche Farbe
        inputElement.style.borderWidth = ''; // Oder setzen Sie es auf die ursprüngliche Breite
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'none';
        errorMessageElement.style.display = 'none';
    } else if (inputElement.checkValidity()) {
        inputElement.style.borderColor = '#589b32';
        inputElement.style.borderWidth = '1.5px';
        validSymbol.style.display = 'inline'; // Zeigt das Häkchen an
        invalidSymbol.style.display = 'none';
        errorMessageElement.style.display = 'none';
    } else {
        errorMessageElement.innerHTML = invalidErrorMsg;
        errorMessageElement.style.display = 'block';
        inputElement.style.borderColor = '#9e367a';
        inputElement.style.borderWidth = '1.5px';
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'inline'; // Zeigt das X an
        shakeOnInvalid(inputElement);
    }     
});


// Funktion, um den Fehlerstatus zu überprüfen und entsprechend zu aktualisieren
function checkRadioErrorStatus(group) {
    let radioButtons = group.querySelectorAll("input[type='radio']");
    let isSelected = Array.from(radioButtons).some(radio => radio.checked);
    let groupErrorMessageElement = group.nextElementSibling;
    if (!isSelected && groupErrorMessageElement && groupErrorMessageElement.classList.contains('form_input-error-message-wrapper') && isElementVisible(group)) {
        groupErrorMessageElement.innerHTML = emptyErrorMsg;
        groupErrorMessageElement.style.display = 'block';
        groupErrorMessageElement.style.color = '#9e367a';
        radioButtons.forEach(radio => {
            radio.style.borderColor = '#9e367a';
        });
    } else if (groupErrorMessageElement) {
        groupErrorMessageElement.style.display = 'none';
        groupErrorMessageElement.style.color = '';
        radioButtons.forEach(radio => {
            radio.style.borderColor = '';
        });
    }
}

// Event-Listener für den Next-Button
if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        if (nextBtn.classList.contains('disabled')) {
            // Überprüfen Sie, ob das Eingabefeld und seine übergeordneten Elemente sichtbar sind
            if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
                errorMessageElement.innerHTML = emptyErrorMsg;
                errorMessageElement.style.display = 'block';
                inputElement.style.borderColor = '#9e367a';
                inputElement.style.borderWidth = '1.5px';
                validSymbol.style.display = 'none';
                invalidSymbol.style.display = 'inline';
                shakeOnInvalid(inputElement);
            } else {
                let radioGroups = document.querySelectorAll(".form_item-input-bottom-gender");
                radioGroups.forEach(checkRadioErrorStatus);
            }
        }
    });
}

// Event-Listener für Änderungen an Radio-Buttons
let allRadioButtons = document.querySelectorAll(".form_item-input-bottom-gender input[type='radio']");
allRadioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        let group = radio.closest('.form_item-input-bottom-gender');
        checkRadioErrorStatus(group);
    });
});










if (submitBtn) {
    submitBtn.addEventListener('click', function() {
         if (submitBtn.classList.contains('disabled')) {
        // Überprüfen Sie, ob das Eingabefeld und seine übergeordneten Elemente sichtbar sind
        if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
            errorMessageElement.innerHTML = emptyErrorMsg;
            errorMessageElement.style.display = 'block';
            inputElement.style.borderColor = '#9e367a';
            inputElement.style.borderWidth = '1.5px';
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'inline'; // Zeigt das X an
            shakeOnInvalid(inputElement);
        }
    }
    });
}


    validationElements[inputElement.id] = {
        validSymbol: validSymbol,
        invalidSymbol: invalidSymbol,
        errorMessageElement: errorMessageElement
    };
  
}





const specificElements = [];

if (zipCodeTeachingLocation) {
  specificElements.push({
    element: zipCodeTeachingLocation,
    pattern: '\\d+',
    invalidErrorMsg: 'Bitte geben Sie eine gültige PLZ ein.'
  });
}

if (bdayStudent) {
  specificElements.push({
    element: bdayStudent,
    pattern: '^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$',
    invalidErrorMsg: 'Bitte geben Sie ein gültiges Geburtsdatum ein.'
  });
}

if (emailPayable) {
  specificElements.push({
    element: emailPayable,
    pattern: '^\\S+@\\S+\\.\\S+$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  });
}

if (phoneNumberPayable) {
  specificElements.push({
    element: phoneNumberPayable,
    pattern: '^\\+49[1-9]\\d{4,}$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
  });
}

if (emailCustomer) {
  specificElements.push({
    element: emailCustomer,
    pattern: '^\\S+@\\S+\\.\\S+$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  });
}

if (phoneNumberCustomer) {
  specificElements.push({
    element: phoneNumberCustomer,
    pattern: '^\\+49[1-9]\\d{4,}$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
  });
}

        if (phoneNumberContactPerson) {
  specificElements.push({
    element: phoneNumberContactPerson,
    pattern: '^\\+49[1-9]\\d{4,}$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
  });
}

if (emailContactPerson) {
  specificElements.push({
    element: emailContactPerson,
    pattern: '^\\S+@\\S+\\.\\S+$',
    invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  });
}




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

//end form validation



const formItems = document.getElementsByClassName("form_item-input-wrapper-tab");
const regForm = document.getElementById("regForm");

let currentTab = 0;

if (nextBtn) {
    nextBtn.classList.add("disabled");
    nextBtn.addEventListener("click", function() {
        nextPrev(1);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", function() {
        nextPrev(-1);
    });
}

showTab(currentTab);

function showTab(n) {
    formItems[n].style.display = "block";

    const inputs = formItems[n].querySelectorAll("input, select");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", validateForm);
    }

    validateForm();

    if (n === 0) {
        if (prevBtn) prevBtn.style.display = "none";
    } else {
        if (prevBtn) prevBtn.style.display = "flex";
    }
    
    if (n === (formItems.length - 1)) {
        if (submitBtn) submitBtn.style.display = "block";
        if (nextBtn) nextBtn.style.display = "none";
    } else {
        if (submitBtn) submitBtn.style.display = "none";
        if (nextBtn) nextBtn.style.display = "flex";
    }

    const currentStepElem = document.getElementById("currentStep");
    const totalStepsElem = document.getElementById("totalSteps");
    if (currentStepElem) currentStepElem.textContent = n + 1;
    if (totalStepsElem) totalStepsElem.textContent = formItems.length;

    fixStepIndicator(n);
}

function nextPrev(n) {
    if (nextBtn && n == 1 && !validateForm()) {
        nextBtn.classList.add("disabled");
        return false;
    } else if (nextBtn) {
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
        if(nextBtn) {
            nextBtn.classList.remove("disabled");
        }
        if(submitBtn) {
            submitBtn.classList.remove("disabled");
        }
    } else {
        if(nextBtn) {
            nextBtn.classList.add("disabled");
        }
        if(submitBtn) {
            submitBtn.classList.add("disabled");
        }
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
const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='1']");
const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='2']");
const containerLearningDisorder = document.getElementById("create-learning-disorder_student");

if (radioLearningDisorderJa) {
    radioLearningDisorderJa.addEventListener("change", function() {
        if (radioLearningDisorderJa.checked) {
            createInputField(containerLearningDisorder, "infoText", "Welche Lernstörung?", "learning-disorder_student", "Lernstörung eingeben");
            validateForm();
        }
    });
}

if (radioLearningDisorderNein) {
    radioLearningDisorderNein.addEventListener("change", function() {
        removeInputField("infoText", "learning-disorder_student");
        validateForm();
    });
}

const radioBillingAddressJa = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='1']");
const radioBillingAddressNein = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='2']");

const billingDetails = [
{ containerId: "create-street-name_billing-address", labelId: "streetNameLabel", labelText: "Straßenname ", inputId: "street-name_billing-address", inputPlaceholder: "Straßenname eingeben" },
{ containerId: "create-house-number_billing-address", labelId: "houseNumberLabel", labelText: "Hausnummer ", inputId: "house-number_billing-address", inputPlaceholder: "Hausnummer eingeben" },
{ containerId: "create-zip-code_billing-address", labelId: "zipCodeLabel", labelText: "PLZ ", inputId: "zip-code_billing-address", inputPlaceholder: "PLZ eingeben" },
{ containerId: "create-city-name_billing-address", labelId: "cityNameLabel", labelText: "Ort ", inputId: "city-name_billing-address", inputPlaceholder: "Ort eingeben" }
];

if (radioBillingAddressNein) {
    radioBillingAddressNein.addEventListener("change", function() {
        if (radioBillingAddressNein.checked) {
            billingDetails.forEach(detail => {
                const container = document.getElementById(detail.containerId);
                if (container) {
                    createInputField(container, detail.labelId, detail.labelText, detail.inputId, detail.inputPlaceholder);
                }
            });
            validateForm();
        }
    });
}

if (radioBillingAddressJa) {
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
 
  let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
    let invalidErrorMsg = 'Ungültige Eingabe.';
    applyValidation(inputFeld, emptyErrorMsg, invalidErrorMsg);
}

function removeInputField(labelId, inputId) {
    const vorhandenerText = document.getElementById(labelId);
    if (vorhandenerText) {
        vorhandenerText.parentNode.removeChild(vorhandenerText);
    }

    const vorhandenesInputFeld = document.getElementById(inputId);
    if (vorhandenesInputFeld) {
        // Entfernen Sie auch die zugehörigen Validierungselemente
        const elements = validationElements[inputId];
        if (elements) {
            elements.validSymbol.remove();
            elements.invalidSymbol.remove();
            elements.errorMessageElement.remove();
            delete validationElements[inputId];
        }

        vorhandenesInputFeld.parentNode.removeChild(vorhandenesInputFeld);
    }
}

}

