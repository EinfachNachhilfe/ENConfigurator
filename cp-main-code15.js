
// Define constants
const formElements = {
    nextBtn: document.querySelector('#nextBtn'),
    prevBtn: document.querySelector('#prevBtn'),
    submitBtn: document.querySelector('#submitBtn'),
    allInputs: document.querySelectorAll("input, select, textarea"),
    formItems: document.getElementsByClassName('form_item-input-wrapper-tab'),
};

const form = {
    applicationTutorForm: document.getElementById('applicationTutor'),
};

const subjectsOrder = ["Mathe", "Deutsch", "Englisch", "Französisch", "Latein", "Italienisch", "Spanisch", "Physik", "Chemie", "Biologie", "Geografie", "Geschichte", "Sozialkunde", "Informatik", "Sport und Fitness", "Wirtschaft", "Sonstiges"];
const experienceOrder = ["Keine Erfahrung", "Einzelunterricht", "Gruppenunterricht", "Hausaufgabenbetreuung", "Prüfungsvorbereitung", "Sprachunterricht"];

const elements = {
    addSubjectBtn: document.getElementById('addSubjectBtn'),
    addSelectedSubjectBtn: document.getElementById('addSelectedSubjectBtn'),
    subjectDropdown: document.getElementById('subjectDropdown'),
    classFromDropdown: document.getElementById('classFromDropdown'),
    classToDropdown: document.getElementById('classToDropdown'),
    addedSubjects: document.getElementById('addedSubjects'),
    popupSubject: document.getElementById('popup_subject-tutor'),
    closePopupElements: document.querySelectorAll('.close-popup'),
    background: document.getElementById('background'),
    showFirstNames: document.querySelectorAll('.show_first-name'),
    firstNameInput: document.getElementById('firstNameTutor'),
    addExperienceBtn: document.getElementById('addexperienceBtn'),
    addSelectedExperienceBtn: document.getElementById('addSelectedexperienceBtn'),
    experienceTutor: document.getElementById('experience_tutor'),
    durationTutor: document.getElementById('duration_tutor'),
    whenTutor: document.getElementById('when_tutor'),
    addedExperience: document.getElementById('addedExperience'),
    popupExperienceTutor: document.getElementById('popup_experience-tutor')
};

// Defining global functions to ensure availability
window.removeSubject = (btn, subject, classFrom, classTo) => {
    const combinedValue = `${subject}:${classFrom}-${classTo}`;
    const combinedInputs = Array.from(form.applicationTutorForm.querySelectorAll(`input[name^="combined_"]`)).filter(input => input.value === combinedValue);
    if (combinedInputs.length > 0) combinedInputs[0].remove();
    btn.parentElement.remove();
    addOptionToDropdown(elements.subjectDropdown, subject, subjectsOrder);
    validateForm();
};

window.removeExperience = (btn, experience, duration, when) => {
    const combinedValue = `${experience}:${duration}:${when}`;
    const combinedInputs = Array.from(form.applicationTutorForm.querySelectorAll(`input[name^="combined_"]`)).filter(input => input.value === combinedValue);
    if (combinedInputs.length > 0) combinedInputs[0].remove();
    btn.parentElement.remove();
    addOptionToDropdown(elements.experienceTutor, experience, experienceOrder);
    validateForm();
};

const initializeDropdown = (dropdown, placeholder) => {
    dropdown.innerHTML = '';
    const option = document.createElement('option');
    option.text = placeholder;
    option.value = '0';
    dropdown.add(option);
};

const togglePopup = (popup, display) => {
    elements.background.style.display = display;
    popup.style.display = display;
};

const addOptionToDropdown = (dropdown, optionText, orderArray) => {
    const option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;

    let inserted = false;
    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i] === optionText) {
            for (let j = 0; j < dropdown.options.length; j++) {
                if (orderArray.indexOf(dropdown.options[j].value) > i) {
                    dropdown.insertBefore(option, dropdown.options[j]);
                    inserted = true;
                    break;
                }
            }
            if (inserted) break;
        }
    }
    if (!inserted) dropdown.appendChild(option);
};

const handleFirstNameInput = () => {
    elements.showFirstNames.forEach(element => {
        element.textContent = elements.firstNameInput.value;
    });
};

const handleClassFromChange = () => {
    const classFrom = parseInt(elements.classFromDropdown.value);
    initializeDropdown(elements.classToDropdown, "Bis Klasse");
    for (let i = classFrom + 1; i <= 13; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}. Klasse`;
        elements.classToDropdown.appendChild(option);
    }
};

const areConditionsMet = (dropdown1, dropdown2, dropdown3) => {
    return dropdown1.value !== '0' && dropdown2.value !== '0' && dropdown3.value !== '0';
};

const addNewSubject = () => {
    if (!areConditionsMet(elements.subjectDropdown, elements.classFromDropdown, elements.classToDropdown)) return;

    const subject = elements.subjectDropdown.value;
    const classFrom = elements.classFromDropdown.value;
    const classTo = elements.classToDropdown.value;

    const newSubjectElement = document.createElement('div');
    newSubjectElement.className = 'subject-element';
    newSubjectElement.innerHTML = `${subject} (Klasse ${classFrom} bis ${classTo}) <button onclick="removeSubject(this, '${subject}', '${classFrom}', '${classTo}')" class="remove-btn">Fach entfernen</button>`;
    elements.addedSubjects.appendChild(newSubjectElement);

    const combinedValue = `${subject}:${classFrom}-${classTo}`;
    const combinedInput = document.createElement('input');
    combinedInput.type = 'hidden';
    combinedInput.name = `combined_${subject}`;
    combinedInput.value = combinedValue;
    form.applicationTutorForm.appendChild(combinedInput);

    togglePopup(elements.popupSubject, 'none');
    const selectedOption = elements.subjectDropdown.querySelector(`option[value="${subject}"]`);
    if (selectedOption) elements.subjectDropdown.removeChild(selectedOption);

    validateForm();
};

const addNewExperience = () => {
    if (!areConditionsMet(elements.experienceTutor, elements.durationTutor, elements.whenTutor)) {
        return;
    }

    const experience = elements.experienceTutor.value;
    const duration = elements.durationTutor.value;
    const when = elements.whenTutor.value;

    const newExperienceElement = document.createElement('div');
    newExperienceElement.className = 'experience-element';
    newExperienceElement.innerHTML = `${experience} (Mit ${duration} Erfahrung, ${when}) <button onclick="removeExperience(this, '${experience}', '${duration}', '${when}')" class="remove-btn">Fach entfernen</button>`;
    elements.addedExperience.appendChild(newExperienceElement);

    const combinedValue = `${experience}:${duration}:${when}`;
    const combinedInput = document.createElement('input');
    combinedInput.type = 'hidden';
    combinedInput.name = `combined_${experience}`;
    combinedInput.value = combinedValue;
    form.applicationTutorForm.appendChild(combinedInput);

    togglePopup(elements.popupExperienceTutor, 'none');
    const selectedOption = elements.experienceTutor.querySelector(`option[value="${experience}"]`);
    if (selectedOption) elements.experienceTutor.removeChild(selectedOption);

    validateForm();
};

// Event listeners initialization with existence checks
if (elements.firstNameInput) {
    elements.firstNameInput.addEventListener('input', handleFirstNameInput);
}

if (elements.addSubjectBtn) {
    elements.addSubjectBtn.addEventListener('click', () => {
        togglePopup(elements.popupSubject, 'block');
        initializeDropdown(elements.classToDropdown, "Bis Klasse");
    });
}

if (elements.classFromDropdown) {
    elements.classFromDropdown.addEventListener('change', handleClassFromChange);
}

if (elements.addSelectedSubjectBtn) {
    elements.addSelectedSubjectBtn.addEventListener('click', addNewSubject);
}

if (elements.addExperienceBtn) {
    elements.addExperienceBtn.addEventListener('click', () => {
        togglePopup(elements.popupExperienceTutor, 'block');
    });
}

if (elements.addSelectedExperienceBtn) {
    elements.addSelectedExperienceBtn.addEventListener('click', addNewExperience);
}

elements.closePopupElements.forEach(element => {
    element.addEventListener('click', () => {
        togglePopup(elements.popupSubject, 'none');
        togglePopup(elements.popupExperienceTutor, 'none');
    });
});

if (elements.background) {
    elements.background.addEventListener('click', () => {
        togglePopup(elements.popupSubject, 'none');
        togglePopup(elements.popupExperienceTutor, 'none');
    });
}



const validationElements = {};
let currentTab = 0;
const currentTabElement = formElements.formItems[currentTab];

function isElementVisibleInTab(el) {
    if (!el || el === document.body) return true; // Wenn wir den Body erreichen, ist das Element sichtbar
    if (window.getComputedStyle(el, null).display === 'none') return false; // Das Element ist unsichtbar
    return isElementVisibleInTab(el.parentNode); // Überprüfen Sie das übergeordnete Element
}


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



const createValidationElements = () => {
    const errorMessageElement = document.createElement('span');
    const validSymbol = document.createElement('span');
    const invalidSymbol = document.createElement('span');

    validSymbol.textContent = '✓';
    invalidSymbol.textContent = '✗';

    const setInitialStyles = () => {
        validSymbol.style.cssText = `color: ${COLORS.valid}; display: none; position: absolute; right: 1.2rem; top: 50%; transform: translateY(-50%); z-index: 3;`;
        invalidSymbol.style.cssText = `color: ${COLORS.invalid}; display: none; position: absolute; right: 1.2rem; top: 50%; transform: translateY(-50%); z-index: 3;`;
        errorMessageElement.style.cssText = `color: ${COLORS.errorText}; display: none; margin-top: -0.625rem; font-family: Roboto, sans-serif; font-size: 0.8rem;`;
    };

    setInitialStyles();

    return { errorMessageElement, validSymbol, invalidSymbol };
};

// Apply Validation
const COLORS = {
    valid: '#78b8bf',
    invalid: '#d9544f',
    errorText: '#d9544f'
};

const STYLES = {
    borderWidth: '2px'
};

const applyValidation = (inputElement, emptyErrorMsg, invalidErrorMsg, pattern = null) => {
    const { errorMessageElement, validSymbol, invalidSymbol } = createValidationElements();

    if (pattern !== null) inputElement.setAttribute('pattern', pattern);

    const validationImageWrapper = inputElement.closest('.form_input-validation-image-wrapper');
    const errorMessageWrapper = inputElement.type === 'checkbox'
        ? inputElement.parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper')
        : inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');

    if (errorMessageWrapper) {
        errorMessageWrapper.appendChild(errorMessageElement);
    }
    if (validationImageWrapper) {
        validationImageWrapper.appendChild(validSymbol);
        validationImageWrapper.appendChild(invalidSymbol);
    }

    const handleValidation = () => {
        if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
            errorMessageElement.innerHTML = emptyErrorMsg;
            errorMessageElement.style.display = 'block';
            inputElement.style.borderColor = COLORS.invalid;
            inputElement.style.borderWidth = STYLES.borderWidth;
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'inline';
            errorMessageWrapper.appendChild(errorMessageElement);
        } else if (inputElement.value.trim() === '' && !inputElement.hasAttribute('required')) {
            inputElement.style.borderColor = '';
            inputElement.style.borderWidth = '';
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'none';
            errorMessageElement.style.display = 'none';
        } else if (inputElement.checkValidity()) {
          if (inputElement.type !== 'radio' && inputElement.type !== 'checkbox') {
            inputElement.style.borderColor = COLORS.valid;
            inputElement.style.borderWidth = STYLES.borderWidth;
            validSymbol.style.display = 'inline';
            invalidSymbol.style.display = 'none';
        }
        errorMessageElement.style.display = 'none';
        } else {
            if(inputElement.type !== 'checkbox'){
            
            inputElement.style.borderColor = COLORS.invalid;
            inputElement.style.borderWidth = STYLES.borderWidth;
            validSymbol.style.display = 'none';
            invalidSymbol.style.display = 'inline';
            errorMessageWrapper.appendChild(errorMessageElement);
            }
           errorMessageElement.innerHTML = invalidErrorMsg;
            errorMessageElement.style.display = 'block';
        }
    };

    inputElement.addEventListener("change", handleValidation);

    const buttons = [formElements.nextBtn, formElements.submitBtn];
    buttons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                if (button.classList.contains('disabled')) {
                    const isCheckboxInvalid = (inputElement.type === 'checkbox') && !inputElement.checkValidity() && isElementVisibleInTab(inputElement);
                    const isRequiredFieldEmpty = inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisibleInTab(inputElement);
                    
                    if (isCheckboxInvalid || isRequiredFieldEmpty) {
                        if(inputElement.type !== 'checkbox') {
                        inputElement.style.borderColor = COLORS.invalid;
                        inputElement.style.borderWidth = STYLES.borderWidth;
                        validSymbol.style.display = 'none';
                        invalidSymbol.style.display = 'inline';
                        errorMessageWrapper.appendChild(errorMessageElement);
                        }
                        errorMessageElement.innerHTML = emptyErrorMsg;
                        errorMessageElement.style.display = 'block';
                    }
                }
            });
        }
    });

    validationElements[inputElement.className] = {
        validSymbol,
        invalidSymbol,
        errorMessageElement
    };
};

// Definiere einmalig die Fehlermeldung und Symbole
const { errorMessageElement: radioErrorMessageElement, invalidSymbol: radioInvalidSymbol } = createValidationElements();

const validateRadio = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const groups = {};
    let radioValid = true;

    // Gruppiere Radio-Buttons nach ihrem Namen
    radioButtons.forEach((radio) => {
        if (!isElementVisibleInTab(radio)) {
            return;
        }

        if (!groups[radio.name]) {
            groups[radio.name] = false;
        }
        if (radio.checked) {
            groups[radio.name] = true;
        }
    });

    const validationImageWrapper = radioButtons[0].closest('.form_input-validation-image-wrapper');
    const errorMessageWrapper = radioButtons[0].parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');

    if (validationImageWrapper && !validationImageWrapper.contains(radioInvalidSymbol)) {
        validationImageWrapper.appendChild(radioInvalidSymbol);
    }

    // Überprüfe, ob alle Gruppen eine Auswahl haben
    for (const group in groups) {
        if (!groups[group]) {
            radioErrorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
            radioErrorMessageElement.style.display = 'block';
            if (!errorMessageWrapper.contains(radioErrorMessageElement)) {
                errorMessageWrapper.appendChild(radioErrorMessageElement);
            }
            radioValid = false;
        }
    }

    // Add event listener to each radio button to remove error message on change
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                radioErrorMessageElement.style.display = 'none';
                if (errorMessageWrapper.contains(radioErrorMessageElement)) {
                    errorMessageWrapper.removeChild(radioErrorMessageElement);
                }
                if (validationImageWrapper.contains(radioInvalidSymbol)) {
                    validationImageWrapper.removeChild(radioInvalidSymbol);
                }
            }
        });
    });

    return radioValid;
};



const specificElements = [
    { selector: '.form_input.availability-tutor', pattern: '\\d+', invalidErrorMsg: 'Bitte gib eine Zahl ein.' },
];

const allInputsArray = Array.from(formElements.allInputs);
allInputsArray.forEach(inputElement => {
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

    if (formElements.prevBtn){
    formElements.prevBtn.style.display = n === 0 ? "none" : "flex";}
    
    if (formElements.nextBtn){
        formElements.nextBtn.style.display = n === (formElements.formItems.length - 1) ? "none" : "flex";
    }

    
    if (formElements.submitBtn){
    formElements.submitBtn.style.display = n === (formElements.formItems.length - 1) ? "block" : "none";}

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
        return false;
    }
    showTab(currentTab);
};

const validateForm = () => {
    let valid = true;
    const inputs = formElements.formItems[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && (!inputs[i].checkValidity() || inputs[i].value == "")) {
            inputs[i].className += " invalid";
            valid = false;
        }
    }

    if ([1, 2].includes(currentTab)) {
        const buttons = formElements.formItems[currentTab].querySelectorAll("button");
        valid = Array.from(buttons).some(button => button.textContent === 'Fach entfernen');
    }

    if (formElements.nextBtn){
        formElements.nextBtn.classList.toggle("disabled", !valid);
    }
    if (formElements.submitBtn){
    formElements.submitBtn.classList.toggle("disabled", !valid);
    }
    return valid;
};

const fixStepIndicator = (n) => {
    for (const formItem of formElements.formItems) {
        formItem.classList.remove("active");
    }
    formElements.formItems[n].classList.add("active");
};

// Event Listeners
formElements.nextBtn?.addEventListener("click", () => {
    validateRadio(); // Call validateRadio function
    nextPrev(1); // Proceed to the next tab
});

if(formElements.prevBtn){
formElements.prevBtn?.addEventListener("click", () => nextPrev(-1));}
if(formElements.submitBtn){
formElements.submitBtn?.addEventListener("click", () =>  validateRadio());}

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
