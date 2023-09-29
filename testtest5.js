

document.getElementById("nextBtn").classList.add("disabled");
document.getElementById("submitBtn").classList.add("disabled");

const formItems = document.getElementsByClassName("form_item-input-wrapper-tab");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const prevBtn = document.getElementById("prevBtn");
const currentStepElem = document.getElementById("currentStep");
const totalStepsElem = document.getElementById("totalSteps");
const regForm = document.getElementById("regForm");
let currentTab = 0;

showTab(currentTab);

function showTab(n) {
  formItems[n].style.display = "block";
  
  // Event-Listener für jedes Eingabeelement hinzufügen
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
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "flex";
    submitBtn.style.display = "none";
  }
  
  // Aktualisieren Sie den Schrittindikator
  currentStepElem.textContent = n + 1; // +1, weil n bei 0 beginnt
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
    document.getElementsByClassName("form_item-input-wrapper-tab")[currentTab].className += " finish";
    document.getElementById("nextBtn").classList.remove("disabled");
    
    // Wenn es der letzte Tab ist, aktiviere den submitBtn
    if (currentTab == document.getElementsByClassName("form_item-input-wrapper-tab").length - 1) {
      document.getElementById("submitBtn").classList.remove("disabled");
    }
  } else {
    document.getElementById("nextBtn").classList.add("disabled");
    document.getElementById("submitBtn").classList.add("disabled");
  }
  return valid;

}


function fixStepIndicator(n) {
  for (let i = 0; i < formItems.length; i++) {
    formItems[i].className = formItems[i].className.replace(" active", "");
  }
  formItems[n].className += " active";
}

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
        if (window.getComputedStyle(step, null).display === "block" && inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
            errorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
            errorMessageElement.style.display = 'block';
            inputElement.style.borderColor = '#9e367a'; 
            inputElement.style.borderWidth = '1.5px';
            validImage.style.display = 'none';
            inValidImage.style.display = 'block';
            shakeOnInvalid(inputElement);
        }
    });

    submitBtn.addEventListener('click', function() {
        if (window.getComputedStyle(step, null).display === "block" && inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
            errorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
            errorMessageElement.style.display = 'block';
            inputElement.style.borderColor = '#9e367a'; 
            inputElement.style.borderWidth = '1.5px';
            validImage.style.display = 'none';
            inValidImage.style.display = 'block';
            shakeOnInvalid(inputElement);
        }
    });
}



// Überwachen Sie den Radio-Button "ja" für Lernstörung
const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='1']");
const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='2']");
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
const radioBillingAddressJa = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='1']");
const radioBillingAddressNein = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='2']");

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

