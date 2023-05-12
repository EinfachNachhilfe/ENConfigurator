
var selectedOption = "";

function updateInputValue() {
  var selectElement = document.getElementById("custom_form-input-is-select-input");
  selectedOption = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById("phone-number_payable").value = selectedOption;
}

document.getElementById("custom_form-input-is-select-input").addEventListener("change", function() {
  updateInputValue();
});

document.getElementById("phone-number_payable").addEventListener("input", function() {
  if (this.value.length < selectedOption.length) {
    this.value = selectedOption;
  }
});



//start Validation Phone
var ValidationInputFieldPhone1 = document.getElementById('input[name="phone-number_payable"]');

function applyValidation4(inputElement4) {
  inputElement4.setAttribute('pattern', '^[0-9]+$');
  inputElement4.setAttribute('minlength', '6');

  inputElement4.addEventListener('change', function() {
    if (inputElement4.checkValidity()) {
      // Das Input-Feld enthält gültige Daten
      applyValidBorderStyle(inputElement4);
    } else {
      // Das Input-Feld enthält ungültige Daten
      applyInvalidBorderStyle(inputElement4);
      shakeOnInvalid(inputElement4);
    }
  });
    
       inputElement4.addEventListener('input', function() {
    if (inputElement4.checkValidity()) {
      inputElement4.style.borderColor = '';
      inputElement4.style.borderWidth = '';
    }
  }); 
}

applyValidation4(ValidationInputFieldPhone1);

//end Validation Phone

  



//start function input validation

function applyInvalidBorderStyle(input) {
  input.style.borderColor = '#9d367a';
  input.style.borderWidth = '2px';
  input.style.borderWidth = '1.5px';
}

function shakeOnInvalid(input) {
  var originalPosition = input.getBoundingClientRect().left;
  input.style.transition = 'transform 0.1s ease-in-out';
  input.style.transform = 'translateX(3px)';
  setTimeout(function() {
    input.style.transform = '';
  }, 100);
}
//end function input validation




// Aufrufen der Funktion beim Laden der Seite
window.onload = updateInputValue;
