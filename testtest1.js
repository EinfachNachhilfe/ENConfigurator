function validateRadioOnButtonClick(radioName, step) {
  nextBtn.addEventListener('click', function() {
    // Wir suchen alle Radio-Buttons mit dem gegebenen Namen
    let radioButtons = Array.from(document.getElementsByName(radioName));

    // Wir überprüfen, ob einer von ihnen ausgewählt ist
    let isSelected = radioButtons.some(button => button.checked);

    let errorMessageContainer = document.querySelector('#error_message_container');
    let existingErrorMessage = errorMessageContainer.querySelector('#error_message');

    if (window.getComputedStyle(step, null).display === "block" && !isSelected && !existingErrorMessage) {
      let errorMessageElement = document.createElement('span');
      errorMessageElement.id = 'error_message';
      errorMessageElement.style.color = '#9d367a';
      errorMessageElement.style.marginTop = '-0.625rem';
      errorMessageElement.style.fontFamily = 'Roboto, sans-serif';
      errorMessageElement.style.fontSize = '0.8rem';
      errorMessageElement.innerHTML = 'Eine Option muss ausgewählt werden.';
      errorMessageContainer.appendChild(errorMessageElement);
    }
  });

  // Add event listeners to each radio button
  Array.from(document.getElementsByName(radioName)).forEach(button => {
    button.addEventListener('change', () => {
      let errorMessage = document.querySelector('#error_message');
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
    });
  });
}

const inputValidationGenderTutor = document.querySelector('input[name="gender_student"]');
validateRadioOnButtonClick(inputValidationGenderTutor.name, step1);
