$(document).ready(function() {

    // start header animation
    $('#drop-down-desktop, #drop-down-mobile, #drop-down_overlay').hide();

    $('#trigger_drop-down-desktop').click(function() {
        if ($('#drop-down-desktop').is(':hidden') && $('#drop-down_overlay').is(':hidden')) {
            $('#drop-down-desktop').fadeIn(150);
            $('#drop-down_overlay').fadeIn(150);
            $('#drop-down_icon').css('transform', 'rotate(180deg)');
        } else if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
    });

    $('#trigger_drop-down-mobile').click(function() {
        if ($('#drop-down-mobile').is(':hidden') && $('#drop-down_overlay').is(':hidden')) {
            $('#drop-down-mobile').fadeIn(150);
            $('#drop-down_overlay').fadeIn(150);
            $(this).addClass('x');
        } else if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $(this).removeClass('x');
        }
    });

    $('#drop-down_overlay').click(function() {
        if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
        if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#trigger_drop-down-mobile').removeClass('x');
        }
    });

    $(document).scroll(function() {
        if ($('#drop-down-desktop').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-desktop').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#drop-down_icon').css('transform', 'rotate(0deg)');
        }
        if ($('#drop-down-mobile').is(':visible') && $('#drop-down_overlay').is(':visible')) {
            $('#drop-down-mobile').fadeOut(150);
            $('#drop-down_overlay').fadeOut(150);
            $('#trigger_drop-down-mobile').removeClass('x');
        }
    });
    // end header animation


    // start Dropdown
$(".drop-down_content-wrapper").hide();

$(".drop-down_component-wrapper").click(function() {
 
    var index = $('.drop-down_component-wrapper').index(this);
    var wrapper = $(this).closest('.drop-down_wrapper');

    if($(".drop-down_content-wrapper").eq(index).is(":visible")) {
        $(".drop-down_content-wrapper").eq(index).hide();
        $(this).find('.drop-down_image').removeClass('rotate');
        $(this).find('.text-drop-down').removeClass('change-text-color');
        wrapper.css('background-color', ''); 
    }
    else {
        $(".drop-down_content-wrapper").hide();
        $('.drop-down_image').removeClass('rotate');
        $('.change-text-color').removeClass('change-text-color');
        $('.drop-down_wrapper').css('background-color', '');
        $(".drop-down_content-wrapper").eq(index).show();
        $(this).find('.drop-down_image').addClass('rotate');
        $(this).find('.text-drop-down').addClass('change-text-color');
        wrapper.css('background-color', '#ffffff');
    }
}); 
    // end Dropdown

    // start Dropdown header
$(".drop-down-header_content-wrapper").hide();

$(".drop-down-header_component-wrapper").click(function() {
 
    var index = $('.drop-down-header_component-wrapper').index(this);
    var wrapper = $(this).closest('.drop-down_wrapper');

    if($(".drop-down-header_content-wrapper").eq(index).is(":visible")) {
        $(".drop-down-header_content-wrapper").eq(index).hide();
        $(this).find('.drop-down-header_image').removeClass('rotate');
    }
    else {
        $(".drop-down-header_content-wrapper").hide();
        $('.drop-down-header_image').removeClass('rotate');
        $('.drop-down_wrapper').css('background-color', '');
        $(".drop-down-header_content-wrapper").eq(index).show();
        $(this).find('.drop-down-header_image').addClass('rotate');
    }
}); 
 
// end Dropdown header
    
});

// start contact form
document.addEventListener("DOMContentLoaded", function() {
   
  const inputValidationFirstNameContactPerson = document.getElementById('first-name_contact-person'); 
  const inputValidationSecondNameContactPerson = document.getElementById('second-name_contact-person');
  const inputValidationPhoneNumberContactPerson = document.getElementById('phone-number_contact-person');
  const inputValidationEmailContactPerson = document.getElementById('email_contact-person');
  const inputValidationMessageContactPerson = document.getElementById('message_contact-person');
  const step1 = document.getElementById('form-item_closing');
  const submitBtn = document.getElementById('submit-btn');
  const requiredFields1 = document.querySelectorAll('#form-item_closing [required]');
  let isAllFieldsFilled1 = false;
  let filledFields1 = 0;


//start Validation Phone Number
inputValidationPhoneNumberContactPerson.addEventListener('focus', () => {
  if(inputValidationPhoneNumberContactPerson.value === '') {
    inputValidationPhoneNumberContactPerson.value = '+49';
  }
});
inputValidationPhoneNumberContactPerson.addEventListener('input', () => checkInputPhone(inputValidationPhoneNumberContactPerson));
function checkInputPhone(inputValidationPhoneNumberContactPerson) {
  if (inputValidationPhoneNumberContactPerson.value.substring(0, 3) !== '+49') {
    inputValidationPhoneNumberContactPerson.value = '+49';
    inputValidationPhoneNumberContactPerson.setSelectionRange(3,3);
  } else {
    // Remove any non-numeric characters after '+49'
    let numberPart = inputValidationPhoneNumberContactPerson.value.substring(3).replace(/\D/g, '');
    if (numberPart.startsWith('0')) {
      numberPart = numberPart.substring(1);
    }
    inputValidationPhoneNumberContactPerson.value = '+49' + numberPart;
  }
}
//end Validation Phone Number


    
     
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

applyValidation(inputValidationFirstNameContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationSecondNameContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^[A-Za-z ]+$');
applyValidation(inputValidationPhoneNumberContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\+49[1-9]\\d{1,}$');
applyValidation(inputValidationEmailContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.', '^\\S+@\\S+\\.\\S+$');
applyValidation(inputValidationMessageContactPerson, 'Dieses Feld muss ausgefüllt werden.', 'Ungültige Eingabe.');
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
  validateOnButtonClick(inputValidationFirstNameContactPerson, step1);
  validateOnButtonClick(inputValidationSecondNameContactPerson, step1);
  validateOnButtonClick(inputValidationPhoneNumberContactPerson, step1);
  validateOnButtonClick(inputValidationMessageContactPerson, step1);
  
  });
  // end contact form

