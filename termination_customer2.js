document.addEventListener("DOMContentLoaded", function() {
   
  const inputValidationFirstNameCustomer = document.getElementById('first-name_customer'); 
  const inputValidationSecondNameCustomer = document.getElementById('second-name_customer');
  const inputValidationFirstNameStudent = document.getElementById('first-name_student');
  const inputValidationSecondNameStudent = document.getElementById('second-name_student');
  const inputValidationPhoneNumberCustomer = document.getElementById('phone-number_customer');
  const inputValidationReasonForTerminationCustomer = document.getElementById('reason-for-termination_customer');
  const inputValidationContractTerminationCustomer = document.getElementById('contract-termination_customer');
  const inputValidationEmailCustomer = document.getElementById('email_customer');
  const step1 = document.getElementById('form-item_customer');
  const submitBtn = document.getElementById('submit-btn');
  const requiredFields1 = document.querySelectorAll('#form-item_customer [required]');

     
  
//start Validation Phone Number
inputValidationPhoneNumberCustomer.addEventListener('focus', () => {
  if(inputValidationPhoneNumberCustomer.value === '') {
    inputValidationPhoneNumberCustomer.value = '+49';
  }
});
inputValidationPhoneNumberCustomer.addEventListener('input', () => checkInputPhone(inputValidationPhoneNumberCustomer));
function checkInputPhone(inputValidationPhoneNumberTutor) {
  if (inputValidationPhoneNumberTutor.value.substring(0, 3) !== '+49') {
    inputValidationPhoneNumberTutor.value = '+49';
    inputValidationPhoneNumberTutor.setSelectionRange(3,3);
  } else {
    // Remove any non-numeric characters after '+49'
    let numberPart = inputValidationPhoneNumberTutor.value.substring(3).replace(/\D/g, '');
    if (numberPart.startsWith('0')) {
      numberPart = numberPart.substring(1);
    }
    inputValidationPhoneNumberTutor.value = '+49' + numberPart;
  }
}
//end Validation Phone Number


//start bday validation
inputValidationContractTerminationCustomer.addEventListener('input', function(e) {
    var value = e.target.value;
    
    // remove all non-digit characters
    value = value.replace(/\D/g, '');

    // add dots after day and month
    if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
    if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);

    e.target.value = value;
});
//end bday validation



  //start inputfield validation
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

applyValidation(inputValidationFirstNameCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationSecondNameCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationFirstNameStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationSecondNameStudent, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationPhoneNumberCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\+49[1-9]\\d{1,}$');
applyValidation(inputValidationReasonForTerminationCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
applyValidation(inputValidationContractTerminationCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$');
applyValidation(inputValidationEmailCustomer, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\S+@\\S+\\.\\S+$');
  //end inputfield validation




  
  //start function shake
  function shakeOnInvalid(input) {
  var originalPosition = input.getBoundingClientRect().left;
  input.style.transition = 'transform 0.1s ease-in-out';
  input.style.transform = 'translateX(3px)';
  setTimeout(function() {
    input.style.transform = '';
  }, 100);
  }
  //end function shake


      //step      
      function checkAllFieldsFilled1() {

           let isAllFieldsFilled1 = false;
           let filledFields1 = 0;
         
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
   
        

  
  function validateOnButtonClick(inputElement, step) {
    submitBtn.addEventListener('click', function() {
      if (window.getComputedStyle(step, null).display === "block" && inputElement.value.trim() === '') {
        let errorMessageElement = inputElement.parentNode.querySelector('#error_message');
        let validImage = inputElement.parentNode.querySelector('.form_input-valid-image');
        let inValidImage = inputElement.parentNode.querySelector('.form_input-invalid-image');
  
        errorMessageElement.innerHTML = 'Dieses Feld muss ausgefüllt werden.';
        errorMessageElement.style.display = 'block';
        inputElement.style.borderColor = '#9e367a'; // Set border color to red
        inputElement.style.borderWidth = '1.5px'; // Set border width to 1.5px
        validImage.style.display = 'none';
        inValidImage.style.display = 'block';
        shakeOnInvalid(inputElement);
      }
    });
  }
  
  // Anwenden der Funktion auf mehrere Eingabefelder:
  validateOnButtonClick(inputValidationFirstNameCustomer, step1);
  validateOnButtonClick(inputValidationSecondNameCustomer, step1);
  validateOnButtonClick(inputValidationFirstNameStudent, step1);
  validateOnButtonClick(inputValidationSecondNameStudent, step1);
  validateOnButtonClick(inputValidationPhoneNumberCustomer, step1);
  validateOnButtonClick(inputValidationReasonForTerminationCustomer, step1);
  validateOnButtonClick(inputValidationContractTerminationCustomer, step1);
  validateOnButtonClick(inputValidationEmailCustomer, step1);
  
  });
  
