document.addEventListener("DOMContentLoaded", function() {
   
  const inputValidationFirstNameTutor = document.getElementById('first-name_tutor'); 
  const inputValidationSecondNameTutor = document.getElementById('second-name_tutor');
  const step1 = document.getElementById('form-item_closing');
  const submitBtn = document.getElementById('submit-btn');
  const requiredFields1 = document.querySelectorAll('#form-item_closing [required]');
  let isAllFieldsFilled1 = false;
  let filledFields1 = 0;

     
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

applyValidation(inputValidationFirstNameTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationSecondNameTutor, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
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
  validateOnButtonClick(inputValidationFirstNameTutor, step1);
  validateOnButtonClick(inputValidationSecondNameTutor, step1);
  });
  
