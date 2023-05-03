var step1 = document.getElementById('form-item_name');
var step2 = document.getElementById('form-item_bank');
var step3 = document.getElementById('form-item_file');
var step4 = document.getElementById('form-item_closing');
var submitBtn = document.getElementById('submit-btn');
var backBtn = document.getElementById('back-btn');
var nextBtn = document.getElementById('next-btn');
var requiredFields1 = document.querySelectorAll('#form-item_name [required]');
var requiredFields2 = document.querySelectorAll('#form-item_bank [required]');
var requiredFields3 = document.querySelectorAll('#form-item_file [required]');
var requiredFields4 = document.querySelectorAll('#form-item_closing [required]');
var isAllFieldsFilled1 = false;
var isAllFieldsFilled2 = false;
var isAllFieldsFilled3 = false;
var isAllFieldsFilled4 = false;
var isAnyCheckboxSelected1 = false;
var checkboxes1 = step4.querySelectorAll('input[type="checkbox"]');
var showStepNumber = document.getElementById('show-step_number');




document.addEventListener("DOMContentLoaded", function() {
checkAllFieldsFilled1();
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
backBtn.style.display = 'none';
submitBtn.style.display = 'none';
showStepNumber.textContent = "Schritt 1 von 5";
  
  
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

 

  if (isAllFieldsFilled1) {
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
  if (isAllFieldsFilled1 && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none') {
    step1.style.display = 'none';
    step2.style.display = 'block';
    backBtn.style.display = 'flex';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 2 von 4";
    checkAllFieldsFilled2();
  } else if (isAllFieldsFilled2 && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none') {
    step2.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.classList.add('disabled');
    showStepNumber.textContent = "Schritt 3 von 4";
    checkAllFieldsFilled3()
  } else if (isAllFieldsFilled3 && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none') {
    step3.style.display = 'none';
    step4.style.display = 'block';
    nextBtn.classList.add('disabled');
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    showStepNumber.textContent = "Schritt 4 von 4";
    checkAllFieldsFilled4() 
  }

});

backBtn.addEventListener('click', function() {
  if (step2.style.display === 'block') {
    step2.style.display = 'none';
    step1.style.display = 'block';
    backBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 1 von 4";
    checkAllFieldsFilled1();
  } else if (step3.style.display === 'block') {
    step3.style.display = 'none';
    step2.style.display = 'block';
    showStepNumber.textContent = "Schritt 2 von 4";
    checkAllFieldsFilled2();
  } else if (step4.style.display === 'block') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.style.display = 'flex';
    submitBtn.style.display = 'none';
    showStepNumber.textContent = "Schritt 3 von 4";
    checkAllFieldsFilled3();
  }

});
