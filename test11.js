document.addEventListener("DOMContentLoaded", function() {
   
   
   
        const inputValidationFirstNames = document.querySelectorAll('#first-name_customer, #first-name_tutor, #first-name_student'); 
        const inputValidationSecondNames = document.querySelectorAll('#second-name_customer, #second-name_tutor, #second-name_student');
        const inputValidationPhoneNumbers = document.querySelectorAll('#phone-number_customer');
        const inputValidationReasonForTerminationCustomer = document.querySelector('#reason-for-termination_customer');
        const inputValidationContractTerminationCustomer = document.querySelector('#contract-termination_customer');
        const inputValidationEmails = document.querySelectorAll('#email_customer');
        const steps1 = document.querySelectorAll('#form-item_customer, #form-item_closing');
        const submitBtn = document.querySelector('#submit-btn');
        const requiredFields1 = document.querySelectorAll('#form-item_closing [required], #form-item_customer [required]');
        let isAllFieldsFilled1 = false;
        let filledFields1 = 0; 
        
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
  
  inputValidationPhoneNumbers.forEach(input => {
    applyPhoneValidation(input);
});
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
  applyDateInputFormat(inputValidationContractTerminationCustomer);
  //end bday validation
  
  
  
    //start inputfield validation
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
    

        submitBtn.addEventListener('click', function() {
            if (window.getComputedStyle(step, null).display === "block" && inputElement.value.trim() === '') {
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
    
    // Anwenden der kombinierten Funktion auf mehrere Eingabefelder:
    inputValidationFirstNames.forEach(input => {
        steps1.forEach(step => {
            applyValidation(input, step, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
        });
    });
    inputValidationSecondNames.forEach(input => {
        steps1.forEach(step => {
            applyValidation(input, step, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
        });
    });
    inputValidationPhoneNumbers.forEach(input => {
        steps1.forEach(step => {
            applyValidation(input, step, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\+49[1-9]\\d{1,}$');
        });
    });
   
    applyValidation(inputValidationReasonForTerminationCustomer, step1, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
    applyValidation(inputValidationContractTerminationCustomer, step1, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$');
  
   inputValidationEmails.forEach(input => {
        steps1.forEach(step => {
            applyValidation(input, step, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\S+@\\S+\\.\\S+$');
        });
    });


    //end inputfield validation
  
  
    
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
  
  
        //step      
        function checkAllFieldsFilled1() {
  
             isAllFieldsFilled1 = false;
             filledFields1 = 0;
           
            requiredFields1.forEach(function(field) {
                if (field.value && field.checkValidity()) {
                    filledFields1++;
                }
            });
            if (filledFields1 === requiredFields1.length) {
                isAllFieldsFilled1 = true;
            }
      
            if (isAllFieldsFilled1) {
              submitBtn.classList.remove('disabled');
            } else {
              submitBtn.classList.add('disabled');
            }
        }
        requiredFields1.forEach(function(input) {
            input.addEventListener('input', function() {
                checkAllFieldsFilled1();
            });
        });
    
    });
    
