

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

function shakeOnInvalid(input) {
    let originalPosition = input.getBoundingClientRect().left;
    input.style.transition = 'transform 0.1s ease-in-out';
    input.style.transform = 'translateX(3px)';
    setTimeout(function() {
        input.style.transform = '';
    }, 100);
}

function highlightEmptyFields() {
    const inputs = formItems[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        // Entfernen Sie vorhandene Fehlermeldungen
        const existingError = inputs[i].parentNode.querySelector(".input-error");
        if (existingError) {
            existingError.remove();
        }

        if (inputs[i].hasAttribute("required") && (!inputs[i].checkValidity() || inputs[i].value == "")) {
            inputs[i].style.border = "2px solid red";
            shakeOnInvalid(inputs[i]);
            
            // Fehlermeldung hinzufügen
            const errorMsg = document.createElement("div");
            errorMsg.className = "input-error";
            if (inputs[i].value == "") {
                errorMsg.textContent = "Dieses Feld ist erforderlich";
            } else {
                errorMsg.textContent = "Ungültiger Wert";
            }
            errorMsg.style.color = "red";
            errorMsg.style.fontSize = "12px";
            errorMsg.style.marginTop = "5px";
            inputs[i].parentNode.appendChild(errorMsg);
        } else {
            inputs[i].style.border = "2px solid green";
        }
    }
}

// Event-Listener zu jedem Eingabefeld hinzufügen, um den roten Rand zu entfernen, sobald das Feld ausgefüllt wird
for (let i = 0; i < formItems.length; i++) {
    const inputs = formItems[i].getElementsByTagName("input");
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].addEventListener("input", function() {
            if (inputs[j].value != "") {
                inputs[j].style.border = "";
            }
        });
    }
}

// Die Funktion highlightEmptyFields aufrufen, wenn auf die Schaltflächen "Next" oder "Submit" geklickt wird
nextBtn.addEventListener("click", highlightEmptyFields);
submitBtn.addEventListener("click", highlightEmptyFields);



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

