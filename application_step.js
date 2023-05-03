var step1 = document.getElementById('form-item_name');
var step2 = document.getElementById('form-item_subjects');
var step3 = document.getElementById('form-item_experience');
var step4 = document.getElementById('form-item_personal');
var step5 = document.getElementById('form-item_closing');
var submitBtn = document.getElementById('submit-btn');
var backBtn = document.getElementById('back-btn');
var nextBtn = document.getElementById('next-btn');
var requiredFields1 = document.querySelectorAll('#form-item_name [required]');
var requiredFields2 = document.querySelectorAll('#form-item_subjects [required]');
var requiredFields3 = document.querySelectorAll('#form-item_experience [required]');
var requiredFields4 = document.querySelectorAll('#form-item_personal [required]');
var requiredFields5 = document.querySelectorAll('#form-item_closing [required]');
var isAllFieldsFilled1 = false;
var isAllFieldsFilled2 = false;
var isAllFieldsFilled3 = false;
var isAllFieldsFilled4 = false;
var isAllFieldsFilled5 = false;
var isAnyCheckboxSelected1 = false;
var checkboxes1 = step5.querySelectorAll('input[type="checkbox"]');
var showStepNumber = document.getElementById('show-step_number');
var firstNameInput = document.getElementById('first-name_tutor');
var showFirstNames = document.querySelectorAll('.show_first-name');
var genderRadios1 = document.querySelectorAll('input[name="gender_tutor"]');
var isAnyGenderRadioSelected1 = false;



document.addEventListener("DOMContentLoaded", function() {
checkAllFieldsFilled1();
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
step5.style.display = 'none';
backBtn.style.display = 'none';
submitBtn.style.display = 'none';
showStepNumber.textContent = "Schritt 1 von 5";
  
  
firstNameInput.addEventListener('input', function() {
  showFirstNames.forEach(function(element) {
    element.textContent = firstNameInput.value;
  });
});
});




function checkAllFieldsFilled1() {
  var filledFields1 = 0;
  requiredFields1.forEach(function(field) {
    if (field.value) {
      filledFields1++;
    }
  });

  if (filledFields1 === requiredFields1.length) {
    isAllFieldsFilled1 = true;
  
  }

  genderRadios1.forEach(function(radio) {
    if (radio.checked) {
      isAnyGenderRadioSelected1 = true;
    }
  });

  if (isAllFieldsFilled1 && isAnyGenderRadioSelected1) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }

  
}
requiredFields1.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled1 = false;
    checkAllFieldsFilled1();
   
  });
});

genderRadios1.forEach(function(radio) {
  radio.addEventListener('change', function() {
    isAnyGenderRadioSelected1 = false;
    checkAllFieldsFilled1();
  });
});



function checkAllFieldsFilled2() {
  var filledFields2 = 0;
  requiredFields2.forEach(function(field) {
    if (field.value) {
      filledFields2++;
    }
  });

  if (filledFields2 === requiredFields2.length) {
    isAllFieldsFilled2 = true;
  
  }

  if (isAllFieldsFilled2) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  } 
}
requiredFields2.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled2 = false;
    checkAllFieldsFilled2();
   
  });
});




function checkAllFieldsFilled3() {
  var filledFields3 = 0;
  requiredFields3.forEach(function(field) {
    if (field.value) {
      filledFields3++;
    }
  });

  if (filledFields3 === requiredFields3.length) {
    isAllFieldsFilled3 = true;
  
  }

  if (isAllFieldsFilled3) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  } 
}

requiredFields3.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled3 = false;
    checkAllFieldsFilled3();
   
  });
});


function checkAllFieldsFilled4() {
  var filledFields4 = 0;
  requiredFields4.forEach(function(field) {
    if (field.value) {
      filledFields4++;
    }
  });

  if (filledFields4 === requiredFields4.length) {
    isAllFieldsFilled4 = true;
  
  }

  if (isAllFieldsFilled4) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  } 
}

requiredFields4.forEach(function(input) {
  input.addEventListener('input', function() {
    isAllFieldsFilled4 = false;
    checkAllFieldsFilled4();
   
  });
});


function checkCheckboxSelected1() {
  checkboxes1.forEach(function(checkbox) {
    if (checkbox.checked) {
      isAnyCheckboxSelected1 = true;
    }
  });
  
  if (isAnyCheckboxSelected1) {
    submitBtn.classList.remove('disabled');
  } else {
    submitBtn.classList.add('disabled');
  }
}

checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    isAnyCheckboxSelected1 = false;
    checkCheckboxSelected1();
  });
});


nextBtn.addEventListener('click', function() {
  if (isAllFieldsFilled1 && isAnyGenderRadioSelected1 && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
    step1.style.display = 'none';
    step2.style.display = 'block';
    backBtn.style.display = 'flex';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 2 von 5";
    checkAllFieldsFilled2();
  } else if (isAllFieldsFilled2 && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
    step2.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 3 von 5";
    checkAllFieldsFilled3()
  } else if (isAllFieldsFilled3 && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
    step3.style.display = 'none';
    step4.style.display = 'block';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 4 von 5";
    checkAllFieldsFilled4() 
  } else if (isAllFieldsFilled4 && step1.style.display == 'none' && step2.style.display == 'none' && step3.style.display == 'none' && step5.style.display == 'none') {
    step4.style.display = 'none';
    step5.style.display = 'block';
    nextBtn.classList.add('disabled');
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    showStepNumber.textContent = "Schritt 5 von 5";
    checkCheckboxSelected1()
  }

});

backBtn.addEventListener('click', function() {
  if (step2.style.display === 'block') {
    step2.style.display = 'none';
    step1.style.display = 'block';
    backBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 1 von 5";
    checkAllFieldsFilled1();
  } else if (step3.style.display === 'block') {
    step3.style.display = 'none';
    step2.style.display = 'block';
    showStepNumber.textContent = "Schritt 2 von 5";
    checkAllFieldsFilled2();
  } else if (step4.style.display === 'block') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    showStepNumber.textContent = "Schritt 3 von 5";
    checkAllFieldsFilled3();
  } else if (step5.style.display === 'block') {
    step5.style.display = 'none';
    step4.style.display = 'block';
    nextBtn.style.display = 'flex';
    submitBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 4 von 5";
    checkAllFieldsFilled4();
  }

});

