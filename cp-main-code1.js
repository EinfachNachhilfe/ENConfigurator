// Define constants
const formElements = {
    nextBtn: document.querySelector('#nextBtn'),
    prevBtn: document.querySelector('#prevBtn'),
    submitBtn: document.querySelector('#submitBtn'),
    allInputs: document.querySelectorAll('.form_input'),
    configuratorForm: document.getElementById('configurator'),
    applicationTutorForm: document.getElementById('applicationTutor'),
    welcomeMeeting: document.getElementById('welcomeMeeting'),
    regForm: document.getElementById('regForm'),
    formItems: document.getElementsByClassName('form_item-input-wrapper-tab'),
  };
  
  const validationElements = {};
  let currentTab = 0;
  
  // Helper Functions
  const isElementVisible = (el) => !el || el === document.body || window.getComputedStyle(el, null).display !== 'none' && isElementVisible(el.parentNode);
  
  
  const createInputField = (container, labelId, labelText, inputClass, inputPlaceholder) => {
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
  
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = `form_input ${inputClass}`;
    inputField.placeholder = inputPlaceholder;
    inputField.required = true;
    container.appendChild(inputField);
    inputField.addEventListener("input", validateForm);
    applyValidation(inputField, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
  };
  
  const removeInputField = (labelId, inputClass) => {
    const label = document.getElementById(labelId);
    const input = document.querySelector(`.${inputClass}`);
    label?.remove();
    input?.remove();
  
    const elements = validationElements[inputClass];
    if (elements) {
      elements.validSymbol.remove();
      elements.invalidSymbol.remove();
      elements.errorMessageElement.remove();
      delete validationElements[inputClass];
    }
  };
  
// Apply Date Input Format and Validation
const applyDateInputFormat = (inputElement) => {
  const datePattern = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;
  
  inputElement.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
    if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);
    e.target.value = value;

    // Validate date pattern
    const isValid = datePattern.test(inputElement.value);
    if (isValid) {
      inputElement.setCustomValidity('');
    } else {
      inputElement.setCustomValidity('Bitte geben Sie ein gültiges Datum ein.');
    }
  });

  inputElement.addEventListener('change', () => {
    inputElement.reportValidity();
  });
};

document.querySelectorAll('.form_input.bday').forEach(el => {
  if (el) applyDateInputFormat(el);
});

  
// Apply IBAN Validation and Pattern
const applyIbanValidation = (inputElement, countryPrefix = 'DE') => {
  const ibanPattern = new RegExp(`^${countryPrefix}[0-9]{20}$`);
  
  inputElement.addEventListener('focus', () => {
    if (inputElement.value.trim() === '') inputElement.value = countryPrefix;
  });

  inputElement.addEventListener('input', () => {
    if (inputElement.value.substring(0, 2) !== countryPrefix) {
      inputElement.value = countryPrefix;
      inputElement.setSelectionRange(countryPrefix.length, countryPrefix.length);
    } else {
      inputElement.value = countryPrefix + inputElement.value.substring(2).replace(/\D/g, '');
    }

    // Validate IBAN pattern
    const isValid = ibanPattern.test(inputElement.value);
    if (isValid) {
      inputElement.setCustomValidity('');
    } else {
      inputElement.setCustomValidity('Die IBAN ist falsch.');
    }
  });

  inputElement.addEventListener('change', () => {
    inputElement.reportValidity();
  });
};

document.querySelectorAll('.form_input.iban').forEach(el => {
  if (el) applyIbanValidation(el);
});


// Apply PLZ Validation and Pattern
const applyPlzValidation = (inputElement) => {
  const plzPattern = /^\d{5}$/;

  inputElement.addEventListener('input', () => {
    const isValid = plzPattern.test(inputElement.value);
    if (isValid) {
      inputElement.setCustomValidity('');
    } else {
      inputElement.setCustomValidity('Bitte geben Sie eine gültige PLZ ein.');
    }
  });

  inputElement.addEventListener('change', () => {
    inputElement.reportValidity();
  });
};

document.querySelectorAll('.form_input.zip').forEach(el => {
  if (el) applyPlzValidation(el);
});



// Apply Email Pattern Validation
const applyEmailPatternValidation = (inputElement) => {
  const emailPattern = /^\S+@\S+\.\S+$/;
  
  inputElement.addEventListener('input', () => {
    const isValid = emailPattern.test(inputElement.value);
    if (isValid) {
      inputElement.setCustomValidity('');
    } else {
      inputElement.setCustomValidity('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  });
  
  inputElement.addEventListener('change', () => {
    inputElement.reportValidity();
  });
};

document.querySelectorAll('.form_input.email').forEach(el => {
  if (el) applyEmailPatternValidation(el);
});

  
  // Apply Validation
  const applyValidation = (inputElement, emptyErrorMsg, invalidErrorMsg, pattern = null) => {
    const errorMessageElement = document.createElement('span');
    const validSymbol = document.createElement('span');
    const invalidSymbol = document.createElement('span');
    validSymbol.textContent = '✓';
    validSymbol.style.cssText = 'color: #589b32; display: none; position: absolute; right: 1.2rem; top: 50%; transform: translateY(-50%); z-index: 3;';
    invalidSymbol.textContent = '✗';
    invalidSymbol.style.cssText = 'color: #9e367a; display: none; position: absolute; right: 1.2rem; top: 50%; transform: translateY(-50%); z-index: 3;';
    errorMessageElement.style.cssText = 'color: #9d367a; display: none; margin-top: -0.625rem; font-family: Roboto, sans-serif; font-size: 0.8rem;';
    if (pattern !== null) inputElement.setAttribute('pattern', pattern);
    const validationImageWrapper = inputElement.closest('.form_input-validation-image-wrapper');
    const errorMessageWrapper = inputElement.type === 'radio' ? inputElement.parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper') : inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
    if (errorMessageWrapper) errorMessageWrapper.appendChild(errorMessageElement);
    if (validationImageWrapper) {
      validationImageWrapper.appendChild(validSymbol);
      validationImageWrapper.appendChild(invalidSymbol);
    }
    inputElement.addEventListener("change", () => {
      if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
        errorMessageElement.innerHTML = emptyErrorMsg;
        errorMessageElement.style.display = 'block';
        inputElement.style.cssText = 'border-color: #9e367a; border-width: 1.5px;';
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'inline';
      } else if (inputElement.value.trim() === '' && !inputElement.hasAttribute('required')) {
        inputElement.style.cssText = '';
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'none';
        errorMessageElement.style.display = 'none';
      } else if (inputElement.checkValidity()) {
        inputElement.style.cssText = 'border-color: #589b32; border-width: 1.5px;';
        validSymbol.style.display = 'inline';
        invalidSymbol.style.display = 'none';
        errorMessageElement.style.display = 'none';
      } else {
        errorMessageElement.innerHTML = invalidErrorMsg;
        errorMessageElement.style.display = 'block';
        inputElement.style.cssText = 'border-color: #9e367a; border-width: 1.5px;';
        validSymbol.style.display = 'none';
        invalidSymbol.style.display = 'inline';

      }
    });
  
    const checkRadioErrorStatus = (group) => {
      const radioButtons = group.querySelectorAll("input[type='radio']");
      const isSelected = Array.from(radioButtons).some(radio => radio.checked);
      const groupErrorMessageElement = group.nextElementSibling;
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
    };
  
    const nextBtn = formElements.nextBtn;
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (nextBtn.classList.contains('disabled')) {
          if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
            errorMessageElement.innerHTML = emptyErrorMsg;
            errorMessageElement.style.display = 'block';
            inputElement.style.cssText = 'border-color: #9e367a; border-width: 1.5px;';
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'inline';
    
          } else {
            const radioGroups = document.querySelectorAll(".form_item-input-bottom-gender");
            radioGroups.forEach(checkRadioErrorStatus);
          }
        }
      });
    }
  
    const allRadioButtons = document.querySelectorAll(".form_item-input-bottom-gender input[type='radio']");
    allRadioButtons.forEach(radio => {
      radio.addEventListener('change', function () {
        const group = radio.closest('.form_item-input-bottom-gender');
        checkRadioErrorStatus(group);
      });
    });
  
    const submitBtn = formElements.submitBtn;
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (submitBtn.classList.contains('disabled')) {
          if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
            errorMessageElement.innerHTML = emptyErrorMsg;
            errorMessageElement.style.display = 'block';
            inputElement.style.cssText = 'border-color: #9e367a; border-width: 1.5px;';
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'inline';

          }
        }
      });
    }
  
    validationElements[inputElement.className] = {
      validSymbol,
      invalidSymbol,
      errorMessageElement
    };
  };
  
  const specificElements = [
    { selector: '.form_input.availability-tutor', pattern: '\\d+', invalidErrorMsg: 'Bitte gib eine Zahl ein.' },

  ];
  
  formElements.allInputs.forEach(inputElement => {
    if (!specificElements.some(e => e.selector === `.${inputElement.className}`)) {
      applyValidation(inputElement, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
    }
  });
  
  specificElements.forEach(({ selector, pattern, invalidErrorMsg }) => {
    document.querySelectorAll(selector).forEach(element => {
      applyValidation(element, 'Dieses Feld muss ausgefüllt werden.', invalidErrorMsg, pattern);
    });
  });
  
  // Tab Navigation Functions
  const showTab = (n) => {
    formElements.formItems[n].style.display = "block";
    const inputs = formElements.formItems[n].querySelectorAll(".form_input");
    inputs.forEach(input => input.addEventListener("input", validateForm));
    validateForm();
  
    formElements.prevBtn.style.display = n === 0 ? "none" : "flex";
    formElements.nextBtn.style.display = n === (formElements.formItems.length - 1) ? "none" : "flex";
    formElements.submitBtn.style.display = n === (formElements.formItems.length - 1) ? "block" : "none";
  
    const currentStepElem = document.getElementById("currentStep");
    const totalStepsElem = document.getElementById("totalSteps");
    if (currentStepElem) currentStepElem.textContent = n + 1;
    if (totalStepsElem) totalStepsElem.textContent = formElements.formItems.length;
  
    fixStepIndicator(n);
  };
  
  const nextPrev = (n) => {
    if (n === 1 && !validateForm()) {
      formElements.nextBtn.classList.add("disabled");
      return false;
    }
    formElements.nextBtn.classList.remove("disabled");
  
    formElements.formItems[currentTab].style.display = "none";
    currentTab += n;
    if (currentTab >= formElements.formItems.length) {
      formElements.regForm.submit();
      return false;
    }
    showTab(currentTab);
  };
  
  const validateForm = () => {
    let valid = true;
    const inputs = formElements.formItems[currentTab].getElementsByClassName("form_input");
    for (const input of inputs) {
      if (input.hasAttribute("required") && (!input.checkValidity() || input.value === "")) {
        input.classList.add("invalid");
        valid = false;
      }
    }
  
    // Radio Buttons Validation
    const radios = formElements.formItems[currentTab].querySelectorAll("input[type='radio'][required]");
    const radioGroups = {};
    for (const radio of radios) {
      const name = radio.getAttribute("name");
      radioGroups[name] = radioGroups[name] || [];
      radioGroups[name].push(radio);
    }
  
    for (const groupName in radioGroups) {
      if (radioGroups.hasOwnProperty(groupName)) {
        const radioChecked = radioGroups[groupName].some(radio => radio.checked);
        if (!radioChecked) valid = false;
      }
    }
  
    // Checkboxes Validation
    const checkboxes = formElements.formItems[currentTab].querySelectorAll("input[type='checkbox'][required]");
    if (checkboxes.length > 0 && !Array.from(checkboxes).some(checkbox => checkbox.checked)) valid = false;
  
    // Select Fields Validation
    const selects = formElements.formItems[currentTab].querySelectorAll("select[required]");
    for (const select of selects) {
      if (!select.value) {
        select.classList.add("invalid");
        valid = false;
      }
    }
  
    // Specific Form Validations
    if (formElements.configuratorForm && [0].includes(currentTab)) {
      if (!Array.from(formElements.formItems[currentTab].querySelectorAll("input[type='checkbox']")).some(checkbox => checkbox.checked)) valid = false;
    }
  
    if (formElements.configuratorForm && [1, 2, 3].includes(currentTab)) {
      for (const groupName in radioGroups) {
        if (radioGroups.hasOwnProperty(groupName)) {
          const radioChecked = radioGroups[groupName].some(radio => radio.checked);
          if (!radioChecked && radioGroups[groupName].length > 0) valid = false;
        }
      }
    }
  
    if (formElements.applicationTutorForm && [1, 2].includes(currentTab)) {
      const buttons = formElements.formItems[currentTab].querySelectorAll("button");
      valid = Array.from(buttons).some(button => button.textContent === 'Fach entfernen');
    }
  
    formElements.nextBtn.classList.toggle("disabled", !valid);
    formElements.submitBtn.classList.toggle("disabled", !valid);
  
    return valid;
  };
  
  const fixStepIndicator = (n) => {
    for (const formItem of formElements.formItems) {
      formItem.classList.remove("active");
    }
    formElements.formItems[n].classList.add("active");
  };
  
  // Event Listeners
  formElements.nextBtn?.addEventListener("click", () => nextPrev(1));
  formElements.prevBtn?.addEventListener("click", () => nextPrev(-1));
  
  // Initial Setup
  showTab(currentTab);
  
  // Additional functionality for dynamic input fields
  const setupDynamicFields = () => {
    // Lernstörung
    const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='1']");
    const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='2']");
    const containerLearningDisorder = document.getElementById("create-learning-disorder_student");
  
    if (radioLearningDisorderJa) {
      radioLearningDisorderJa.addEventListener("change", function () {
        if (radioLearningDisorderJa.checked) {
          createInputField(containerLearningDisorder, "infoText", "Welche Lernstörung?", "learning-disorder_student", "Lernstörung eingeben");
          validateForm();
        }
      });
    }
  
    if (radioLearningDisorderNein) {
      radioLearningDisorderNein.addEventListener("change", function () {
        removeInputField("infoText", "learning-disorder_student");
        validateForm();
      });
    }
  
    // Billing Address
    const radioBillingAddressJa = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='1']");
    const radioBillingAddressNein = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='2']");
  
    const billingDetails = [
      { containerId: "create-street-name_billing-address", labelId: "streetNameLabel", labelText: "Straßenname ", inputClass: "street-name_billing-address", inputPlaceholder: "Straßenname eingeben" },
      { containerId: "create-house-number_billing-address", labelId: "houseNumberLabel", labelText: "Hausnummer ", inputClass: "house-number_billing-address", inputPlaceholder: "Hausnummer eingeben" },
      { containerId: "create-zip-code_billing-address", labelId: "zipCodeLabel", labelText: "PLZ ", inputClass: "zip-code_billing-address", inputPlaceholder: "PLZ eingeben" },
      { containerId: "create-city-name_billing-address", labelId: "cityNameLabel", labelText: "Ort ", inputClass: "city-name_billing-address", inputPlaceholder: "Ort eingeben" }
    ];
  
    if (radioBillingAddressNein) {
      radioBillingAddressNein.addEventListener("change", function () {
        if (radioBillingAddressNein.checked) {
          billingDetails.forEach(detail => {
            const container = document.getElementById(detail.containerId);
            if (container) {
              createInputField(container, detail.labelId, detail.labelText, detail.inputClass, detail.inputPlaceholder);
            }
          });
          validateForm();
        }
      });
    }
  
    if (radioBillingAddressJa) {
      radioBillingAddressJa.addEventListener("change", function () {
        billingDetails.forEach(detail => {
          removeInputField(detail.labelId, detail.inputClass);
        });
        validateForm();
      });
    }
  };
  
  setupDynamicFields();
  
  
