//start Validation Phone
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

updateInputValue();

function checkInput2() {
  const input2 = document.getElementById('phone-number_payable');
  if (input2.value.substring(0, selectedOption.length) !== selectedOption) {
    input2.value = selectedOption;
    input2.setSelectionRange(selectedOption.length, selectedOption.length);
  } else {
    // Remove any non-numeric characters after 'selectedOption'
    input2.value = selectedOption + input2.value.substring(selectedOption.length).replace(/\D/g, '');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const input2 = document.getElementById('phone-number_payable');
  input2.value = selectedOption;
  input2.addEventListener('input', checkInput2);
  updateInputValue();
});


    var ValidationInputFieldPhone1 = document.getElementById('phone-number_payable');

    function applyValidation4(inputElement4) {
      inputElement4.setAttribute('pattern', '^.{8,}$');
      
     inputElement4.addEventListener('change', function() {
    if (inputElement4.checkValidity()) {
      
      applyValidBorderStyle(inputElement4);
    } else {
     
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


document.addEventListener("DOMContentLoaded", function() {

//start stepchange with enter
document.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
  // Überprüfen, ob der nextBtn die Klasse 'disabled' nicht hat
  if (!nextBtn.classList.contains('disabled')) {
    nextBtn.click();
    event.preventDefault(); // Verhindert das Absenden des Formulars oder andere Standardaktionen
  }
}
});

//end stepchange with enter


//start Validation only number
var validImage = document.querySelector('.form_input-valid-image');
var ValidationInputFieldNumber1 = document.querySelector('input[name="zip-code_tutor"]');


function applyValidation1(inputElement1) {
inputElement1.setAttribute('pattern', '\\d+');



inputElement1.addEventListener('invalid', function() {
  applyInvalidBorderStyle(inputElement1);
    shakeOnInvalid(inputElement1);
    validImage.style.display = 'none';
});

inputElement1.addEventListener('change', function() {
  if (inputElement1.checkValidity()) {
      inputElement1.style.borderColor = '#599b1f'; // Set border color to green
      inputElement1.style.borderWidth = '1.5px'; // Set border width to 3px
      validImage.style.display = 'block';
  }
}); 
}

applyValidation1(ValidationInputFieldNumber1);

//end Validation only number



//start Validation only letter
var ValidationInputFieldLetter1 = document.querySelector('input[name="first-name_tutor"]');
var ValidationInputFieldLetter2 = document.querySelector('input[name="second-name_tutor"]');


function applyValidation2(inputElement2) {
inputElement2.setAttribute('pattern', '^[A-Za-z ]+$');




inputElement2.addEventListener('invalid', function() {
  applyInvalidBorderStyle(inputElement2);
    shakeOnInvalid(inputElement2);
});

inputElement2.addEventListener('input', function() {
  if (inputElement2.checkValidity()) {
    inputElement2.style.borderColor = '';
    inputElement2.style.borderWidth = '';
  }
}); 
}

applyValidation2(ValidationInputFieldLetter1);
applyValidation2(ValidationInputFieldLetter2);
//end Validation only letter




//start Validation Mail

var ValidationInputFieldMail1 = document.getElementById('email_tutor');

function applyValidation5(inputElement5) {


inputElement5.addEventListener('change', function() {
if (inputElement5.checkValidity()) {
// Das Input-Feld enthält gültige Daten
applyValidBorderStyle(inputElement5);
} else {
// Das Input-Feld enthält ungültige Daten
applyInvalidBorderStyle(inputElement5);
shakeOnInvalid(inputElement5);
}
});

inputElement5.addEventListener('input', function() {
if (inputElement5.checkValidity()) {
inputElement5.style.borderColor = '';
inputElement5.style.borderWidth = '';
}
}); 
}

applyValidation5(ValidationInputFieldMail1);

//end Validation Mail



//start function input validation

function applyInvalidBorderStyle(input) {
input.style.borderColor = '#9d367a';
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











const componentSubject2Tutor = document.getElementById("component-subject-2_tutor");
const componentSubject3Tutor = document.getElementById("component-subject-3_tutor");
const componentSubject4Tutor = document.getElementById("component-subject-4_tutor");
const componentSubject5Tutor = document.getElementById("component-subject-5_tutor");
const componentSubject6Tutor = document.getElementById("component-subject-6_tutor");


const triggerOpenSubjectTutor = document.getElementById("trigger-open-subject_tutor");

const triggerClosesubject2Tutor = document.getElementById("trigger-close-subject-2_tutor");
const triggerClosesubject3Tutor = document.getElementById("trigger-close-subject-3_tutor");
const triggerClosesubject4Tutor = document.getElementById("trigger-close-subject-4_tutor");
const triggerClosesubject5Tutor = document.getElementById("trigger-close-subject-5_tutor");
const triggerClosesubject6Tutor = document.getElementById("trigger-close-subject-6_tutor");

const subject1Tutor = document.getElementById("subject-1_tutor");
const classFrom1Tutor = document.getElementById("class-from-1_tutor");
const classTo1Tutor = document.getElementById("class-to-1_tutor");

const subject2Tutor = document.getElementById("subject-2_tutor");
const classFrom2Tutor = document.getElementById("class-from-2_tutor");
const classTo2Tutor = document.getElementById("class-to-2_tutor");

const subject3Tutor = document.getElementById("subject-3_tutor");
const classFrom3Tutor = document.getElementById("class-from-3_tutor");
const classTo3Tutor = document.getElementById("class-to-3_tutor");

const subject4Tutor = document.getElementById("subject-4_tutor");
const classFrom4Tutor = document.getElementById("class-from-4_tutor");
const classTo4Tutor = document.getElementById("class-to-4_tutor");

const subject5Tutor = document.getElementById("subject-5_tutor");
const classFrom5Tutor = document.getElementById("class-from-5_tutor");
const classTo5Tutor = document.getElementById("class-to-5_tutor");

const subject6Tutor = document.getElementById("subject-6_tutor");
const classFrom6Tutor = document.getElementById("class-from-6_tutor");
const classTo6Tutor = document.getElementById("class-to-6_tutor");

componentSubject2Tutor.style.display = "none";
componentSubject3Tutor.style.display = "none";
componentSubject4Tutor.style.display = "none";
componentSubject5Tutor.style.display = "none";
componentSubject6Tutor.style.display = "none";


triggerOpenSubjectTutor.addEventListener("click", function() {
    if (componentSubject2Tutor.style.display === "none") {
        componentSubject2Tutor.style.display = "block";
        triggerClosesubject2Tutor.style.display = "block";
    } else if (componentSubject2Tutor.style.display === "block" && componentSubject3Tutor.style.display === "none") {
        componentSubject3Tutor.style.display = "block";
        triggerClosesubject2Tutor.style.display = "none";
        triggerClosesubject3Tutor.style.display = "block";
    } else if (componentSubject3Tutor.style.display === "block" && componentSubject4Tutor.style.display === "none") {
        componentSubject4Tutor.style.display = "block";
        triggerClosesubject3Tutor.style.display = "none";
        triggerClosesubject4Tutor.style.display = "block";
    } else if (componentSubject4Tutor.style.display === "block" && componentSubject5Tutor.style.display === "none") {
        componentSubject5Tutor.style.display = "block";
        triggerClosesubject4Tutor.style.display = "none";
        triggerClosesubject5Tutor.style.display = "block";
    } else if (componentSubject5Tutor.style.display === "block" && componentSubject6Tutor.style.display === "none") {
        componentSubject6Tutor.style.display = "block";
        triggerClosesubject5Tutor.style.display = "none";
        triggerClosesubject6Tutor.style.display = "block";
        triggerOpenSubjectTutor.style.display = "none";
    }
});


triggerClosesubject2Tutor.addEventListener("click", function() {
    subject2Tutor.selectedIndex = 0;
    classFrom2Tutor.selectedIndex = 0;
    classTo2Tutor.selectedIndex = 0;
    componentSubject2Tutor.style.display = "none";
});

triggerClosesubject3Tutor.addEventListener("click", function() {
  subject3Tutor.selectedIndex = 0;
  classFrom3Tutor.selectedIndex = 0;
  classTo3Tutor.selectedIndex = 0;
    componentSubject3Tutor.style.display = "none";
    componentSubject2Tutor.style.display = "block";
    triggerClosesubject2Tutor.style.display ="block";
});

triggerClosesubject4Tutor.addEventListener("click", function() {
  subject4Tutor.selectedIndex = 0;
  classFrom4Tutor.selectedIndex = 0;
  classTo4Tutor.selectedIndex = 0;
    componentSubject4Tutor.style.display = "none";
    componentSubject3Tutor.style.display = "block";
    triggerClosesubject3Tutor.style.display ="block";
});

triggerClosesubject5Tutor.addEventListener("click", function() {
  subject5Tutor.selectedIndex = 0;
  classFrom5Tutor.selectedIndex = 0;
  classTo5Tutor.selectedIndex = 0;
    componentSubject5Tutor.style.display = "none";
    componentSubject4Tutor.style.display = "block";
    triggerClosesubject4Tutor.style.display ="block";
});

triggerClosesubject6Tutor.addEventListener("click", function() {
  subject6Tutor.selectedIndex = 0;
  classFrom6Tutor.selectedIndex = 0;
  classTo6Tutor.selectedIndex = 0;
    componentSubject6Tutor.style.display = "none";
    componentSubject5Tutor.style.display = "block";
    triggerClosesubject5Tutor.style.display ="block";
    triggerOpenSubjectTutor.style.display = "flex";
});


const componentExperience1Tutor = document.getElementById("component-experience-1_tutor");
const componentExperience2Tutor = document.getElementById("component-experience-2_tutor");
const componentExperience3Tutor = document.getElementById("component-experience-3_tutor");
const componentExperience4Tutor = document.getElementById("component-experience-4_tutor");
const componentExperience5Tutor = document.getElementById("component-experience-5_tutor");
const componentExperience6Tutor = document.getElementById("component-experience-6_tutor");


const triggerOpenExperienceTutor = document.getElementById("trigger-open-experience_tutor");

const triggerCloseExperience2Tutor = document.getElementById("trigger-close-experience-2_tutor");
const triggerCloseExperience3Tutor = document.getElementById("trigger-close-experience-3_tutor");
const triggerCloseExperience4Tutor = document.getElementById("trigger-close-experience-4_tutor");
const triggerCloseExperience5Tutor = document.getElementById("trigger-close-experience-5_tutor");
const triggerCloseExperience6Tutor = document.getElementById("trigger-close-experience-6_tutor");

const experience1Tutor = document.getElementById("experience-1_tutor");
const duration1Tutor = document.getElementById("duration-1_tutor");
const when1Tutor = document.getElementById("when-1_tutor");

const experience2Tutor = document.getElementById("experience-2_tutor");
const duration2Tutor = document.getElementById("duration-2_tutor");
const when2Tutor = document.getElementById("when-2_tutor");

const experience3Tutor = document.getElementById("experience-3_tutor");
const duration3Tutor = document.getElementById("duration-3_tutor");
const when3Tutor = document.getElementById("when-3_tutor");

const experience4Tutor = document.getElementById("experience-4_tutor");
const duration4Tutor = document.getElementById("duration-4_tutor");
const when4Tutor = document.getElementById("when-4_tutor");

const experience5Tutor = document.getElementById("experience-5_tutor");
const duration5Tutor = document.getElementById("duration-5_tutor");
const when5Tutor = document.getElementById("when-5_tutor");

const experience6Tutor = document.getElementById("experience-6_tutor");
const duration6Tutor = document.getElementById("duration-6_tutor");
const when6Tutor = document.getElementById("when-6_tutor");



componentExperience2Tutor.style.display = "none";
componentExperience3Tutor.style.display = "none";
componentExperience4Tutor.style.display = "none";
componentExperience5Tutor.style.display = "none";
componentExperience6Tutor.style.display = "none";


triggerOpenExperienceTutor.addEventListener("click", function() {
    if (componentExperience2Tutor.style.display === "none") {
        componentExperience2Tutor.style.display = "block";
        triggerCloseExperience2Tutor.style.display = "block";
    } else if (componentExperience2Tutor.style.display === "block" && componentExperience3Tutor.style.display === "none") {
        componentExperience3Tutor.style.display = "block";
        triggerCloseExperience2Tutor.style.display = "none";
        triggerCloseExperience3Tutor.style.display = "block";
    } else if (componentExperience3Tutor.style.display === "block" && componentExperience4Tutor.style.display === "none") {
        componentExperience4Tutor.style.display = "block";
        triggerCloseExperience3Tutor.style.display = "none";
        triggerCloseExperience4Tutor.style.display = "block";
    } else if (componentExperience4Tutor.style.display === "block" && componentExperience5Tutor.style.display === "none") {
        componentExperience5Tutor.style.display = "block";
        triggerCloseExperience4Tutor.style.display = "none";
        triggerCloseExperience5Tutor.style.display = "block";
    } else if (componentExperience5Tutor.style.display === "block" && componentExperience6Tutor.style.display === "none") {
        componentExperience6Tutor.style.display = "block";
        triggerCloseExperience5Tutor.style.display = "none";
        triggerCloseExperience6Tutor.style.display = "block";
        triggerOpenExperienceTutor.style.display = "none";
    }
});


triggerCloseExperience2Tutor.addEventListener("click", function() {
    experience2Tutor.selectedIndex = 0;
    duration2Tutor.selectedIndex = 0;
    when2Tutor.selectedIndex = 0;
    componentExperience2Tutor.style.display = "none";
});

triggerCloseExperience3Tutor.addEventListener("click", function() {
  experience3Tutor.selectedIndex = 0;
  duration3Tutor.selectedIndex = 0;
  when3Tutor.selectedIndex = 0;
    componentExperience3Tutor.style.display = "none";
    componentExperience2Tutor.style.display = "block";
    triggerCloseExperience2Tutor.style.display ="block";
});

triggerCloseExperience4Tutor.addEventListener("click", function() {
  experience4Tutor.selectedIndex = 0;
  duration4Tutor.selectedIndex = 0;
  when4Tutor.selectedIndex = 0;
    componentExperience4Tutor.style.display = "none";
    componentExperience3Tutor.style.display = "block";
    triggerCloseExperience3Tutor.style.display ="block";
});

triggerCloseExperience5Tutor.addEventListener("click", function() {
  experience5Tutor.selectedIndex = 0;
  duration5Tutor.selectedIndex = 0;
  when5Tutor.selectedIndex = 0;
    componentExperience5Tutor.style.display = "none";
    componentExperience4Tutor.style.display = "block";
    triggerCloseExperience4Tutor.style.display ="block";
});

triggerCloseExperience6Tutor.addEventListener("click", function() {
  experience6Tutor.selectedIndex = 0;
  duration6Tutor.selectedIndex = 0;
  when6Tutor.selectedIndex = 0;
    componentExperience6Tutor.style.display = "none";
    componentExperience5Tutor.style.display = "block";
    triggerCloseExperience5Tutor.style.display ="block";
    triggerOpenExperienceTutor.style.display = "flex";
});

experience1Tutor.addEventListener("change", function() {
    if (experience1Tutor.selectedIndex === 1) {
        componentExperience1Tutor.style.display = "none";
        duration1Tutor.selectedIndex = 0;
        when1Tutor.selectedIndex = 0;
        experience2Tutor.selectedIndex = 0;
        duration2Tutor.selectedIndex = 0;
        when2Tutor.selectedIndex = 0;
        experience3Tutor.selectedIndex = 0;
        duration3Tutor.selectedIndex = 0;
        when3Tutor.selectedIndex = 0;
        experience4Tutor.selectedIndex = 0;
        duration4Tutor.selectedIndex = 0;
        when4Tutor.selectedIndex = 0;
        experience5Tutor.selectedIndex = 0;
        duration5Tutor.selectedIndex = 0;
        when5Tutor.selectedIndex = 0;
        experience6Tutor.selectedIndex = 0;
        duration6Tutor.selectedIndex = 0;
        when6Tutor.selectedIndex = 0;
        componentExperience2Tutor.style.display = "none";
        componentExperience3Tutor.style.display = "none";
        componentExperience4Tutor.style.display = "none";
        componentExperience5Tutor.style.display = "none";
        componentExperience6Tutor.style.display = "none";
        triggerOpenExperienceTutor.style.display = "none";
    } else {
      componentExperience1Tutor.style.display = "grid";
      triggerOpenExperienceTutor.style.display = "flex";

    }
});


    //step
    const step1 = document.getElementById('form-item_name');
    const step2 = document.getElementById('form-item_subjects');
    const step3 = document.getElementById('form-item_experience');
    const step4 = document.getElementById('form-item_personal');
    const step5 = document.getElementById('form-item_closing');
    const submitBtn = document.getElementById('submit-btn');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    const requiredFields1 = document.querySelectorAll('#form-item_name [required]');
    const requiredFields2 = document.querySelectorAll('#form-item_subjects [required]');
    const requiredFields4 = document.querySelectorAll('#form-item_personal [required]');
    const requiredFields5 = step5.querySelectorAll('input[type="checkbox"]');
    const showStepNumber = document.getElementById('show-step_number');
    const firstNameInput = document.getElementById('first-name_tutor');
    const showFirstNames = document.querySelectorAll('.show_first-name');
    const genderRadios1 = document.querySelectorAll('input[name="gender_tutor"]');





    var isAllFieldsFilled1 = false;
    var isAllFieldsFilled2 = false;
    var isAllFieldsFilled4 = false;
    var isAllFieldsFilled5 = false;
    var isAnyCheckboxSelected1 = false;
    var componentSubject2TutorVisible = false;
    var isTrueComponentSubject2Tutor = false;
    var componentSubject3TutorVisible = false;
    var isTrueComponentSubject3Tutor = false;
    var componentSubject4TutorVisible = false;
    var isTrueComponentSubject4Tutor = false;
    var componentSubject5TutorVisible = false;
    var isTrueComponentSubject5Tutor = false;
    var componentSubject6TutorVisible = false;
    var isTrueComponentSubject6Tutor = false;

    var isTrueComponentExperience1Tutor = false;
    var isTrueComponentNoExperience1Tutor = false;
    var componentExperience2TutorVisible = false;
    var isTrueComponentExperience2Tutor = false;
    var componentExperience3TutorVisible = false;
    var isTrueComponentExperience3Tutor = false;
    var componentExperience4TutorVisible = false;
    var isTrueComponentExperience4Tutor = false;
    var componentExperience5TutorVisible = false;
    var isTrueComponentExperience5Tutor = false;
    var componentExperience6TutorVisible = false;
    var isTrueComponentExperience6Tutor = false;

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




    function checkAllFieldsFilled1() {
        var filledFields1 = 0;
        isAllFieldsFilled1 = false;


        requiredFields1.forEach(function(field) {
            if (field.value && field.checkValidity()) {
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
            checkAllFieldsFilled1();

        });
    });



    function observeStyleChanges(element, callback) {
      let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "style") {
            callback();
          }
        });
      });
    
      observer.observe(element, { attributes: true });
    }
    
    observeStyleChanges(componentSubject2Tutor, checkAllFieldsFilled2);
    observeStyleChanges(componentSubject3Tutor, checkAllFieldsFilled2);
    observeStyleChanges(componentSubject4Tutor, checkAllFieldsFilled2);
    observeStyleChanges(componentSubject5Tutor, checkAllFieldsFilled2);
    observeStyleChanges(componentSubject6Tutor, checkAllFieldsFilled2);
    observeStyleChanges(componentExperience1Tutor, checkAllFieldsFilled3);
    observeStyleChanges(componentExperience2Tutor, checkAllFieldsFilled3);
    observeStyleChanges(componentExperience3Tutor, checkAllFieldsFilled3);
    observeStyleChanges(componentExperience4Tutor, checkAllFieldsFilled3);
    observeStyleChanges(componentExperience5Tutor, checkAllFieldsFilled3);
    observeStyleChanges(componentExperience6Tutor, checkAllFieldsFilled3);


    function checkAllFieldsFilled2() {   
      isAllFieldsFilled2 = false;  
      var filledFields2 = 0;

        componentSubject2TutorVisible = false;
        isTrueComponentSubject2Tutor = false;
        componentSubject3TutorVisible = false;
        isTrueComponentSubject3Tutor = false;
        componentSubject4TutorVisible = false;
        isTrueComponentSubject4Tutor = false;
        componentSubject5TutorVisible = false;
        isTrueComponentSubject5Tutor = false;
        componentSubject6TutorVisible = false;
        isTrueComponentSubject6Tutor = false;


        requiredFields2.forEach(function(field) {
            if (field.value && field.checkValidity()) {
                filledFields2++;
            }
        });

        if (filledFields2 === requiredFields2.length) {
            isAllFieldsFilled2 = true;
        }

        if (getComputedStyle(componentSubject2Tutor).display == "block") {
          componentSubject2TutorVisible = true;
          if (
            subject2Tutor.value && subject2Tutor.checkValidity() &&
            classFrom2Tutor.value && classFrom2Tutor.checkValidity() &&
            classTo2Tutor.value && classTo2Tutor.checkValidity()
          ) {
            isTrueComponentSubject2Tutor = true;
          }
        } 

        if (getComputedStyle(componentSubject3Tutor).display == "block") {
          componentSubject3TutorVisible = true;
          if (
            subject3Tutor.value && subject3Tutor.checkValidity() &&
            classFrom3Tutor.value && classFrom3Tutor.checkValidity() &&
            classTo3Tutor.value && classTo3Tutor.checkValidity()
          ) {
            isTrueComponentSubject3Tutor = true;
          }
        } 

        if (getComputedStyle(componentSubject4Tutor).display == "block") {
          componentSubject4TutorVisible = true;
          if (
            subject4Tutor.value && subject4Tutor.checkValidity() &&
            classFrom4Tutor.value && classFrom4Tutor.checkValidity() &&
            classTo4Tutor.value && classTo4Tutor.checkValidity()
          ) {
            isTrueComponentSubject4Tutor = true;
          }
        } 

        if (getComputedStyle(componentSubject5Tutor).display == "block") {
          componentSubject5TutorVisible = true;
          if (
            subject5Tutor.value && subject5Tutor.checkValidity() &&
            classFrom5Tutor.value && classFrom5Tutor.checkValidity() &&
            classTo5Tutor.value && classTo5Tutor.checkValidity()
          ) {
            isTrueComponentSubject5Tutor = true;
          }
        } 

        if (getComputedStyle(componentSubject6Tutor).display == "block") {
          componentSubject6TutorVisible = true;
          if (
            subject6Tutor.value && subject6Tutor.checkValidity() &&
            classFrom6Tutor.value && classFrom6Tutor.checkValidity() &&
            classTo6Tutor.value && classTo6Tutor.checkValidity()
          ) {
            isTrueComponentSubject6Tutor = true;
          }
        } 

        if (isAllFieldsFilled2 && 
          (!componentSubject2TutorVisible || (componentSubject2TutorVisible && isTrueComponentSubject2Tutor)&& 
          (!componentSubject3TutorVisible || (componentSubject3TutorVisible && isTrueComponentSubject3Tutor)&& 
          (!componentSubject4TutorVisible || (componentSubject4TutorVisible && isTrueComponentSubject4Tutor)&& 
          (!componentSubject5TutorVisible || (componentSubject5TutorVisible && isTrueComponentSubject5Tutor)&& 
          (!componentSubject6TutorVisible || (componentSubject6TutorVisible && isTrueComponentSubject6Tutor))))))) {
          nextBtn.classList.remove('disabled');
        } else {
          nextBtn.classList.add('disabled');
        }
      } 
      
    requiredFields2.forEach(function(input) {
        input.addEventListener('input', function() {
            checkAllFieldsFilled2();

        });
    });

    [subject2Tutor, classFrom2Tutor, classTo2Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled2();
      });
    });

    [subject3Tutor, classFrom3Tutor, classTo3Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled2();
      });
    });

    [subject4Tutor, classFrom4Tutor, classTo4Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled2();
      });
    });

    [subject5Tutor, classFrom5Tutor, classTo5Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled2();
      });
    });

    [subject6Tutor, classFrom6Tutor, classTo6Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled2();
      });
    });

   

    function checkAllFieldsFilled3() {

        isTrueComponentExperience1Tutor = false;
        isTrueComponentNoExperience1Tutor = false;
        componentExperience2TutorVisible = false;
        isTrueComponentExperience2Tutor = false;
        componentExperience3TutorVisible = false;
        isTrueComponentExperience3Tutor = false;
        componentExperience4TutorVisible = false;
        isTrueComponentExperience4Tutor = false;
        componentExperience5TutorVisible = false;
        isTrueComponentExperience5Tutor = false;
        componentExperience6TutorVisible = false;
        isTrueComponentExperience6Tutor = false;



        if (experience1Tutor.selectedIndex === 1) {

          if (experience1Tutor.value && experience1Tutor.checkValidity()) {
              isTrueComponentExperience1Tutor = true;
          }
      } else {

          if (
              experience1Tutor.value && experience1Tutor.checkValidity() &&
              duration1Tutor.value && duration1Tutor.checkValidity() &&
              when1Tutor.value && when1Tutor.checkValidity()
          ) {
              isTrueComponentExperience1Tutor = true;
          }
      }
      
      


        if (getComputedStyle(componentExperience2Tutor).display == "block") {
          componentExperience2TutorVisible = true;
          if (
            experience2Tutor.value && experience2Tutor.checkValidity() &&
            duration2Tutor.value && duration2Tutor.checkValidity() &&
            when2Tutor.value && when2Tutor.checkValidity()
          ) {
            isTrueComponentExperience2Tutor = true;
          }
        } 

        if (getComputedStyle(componentExperience3Tutor).display == "block") {
          componentExperience3TutorVisible = true;
          if (
            experience3Tutor.value && experience3Tutor.checkValidity() &&
            duration3Tutor.value && duration3Tutor.checkValidity() &&
            when3Tutor.value && when3Tutor.checkValidity()
          ) {
            isTrueComponentExperience3Tutor = true;
          }
        } 

        if (getComputedStyle(componentExperience4Tutor).display == "block") {
          componentExperience4TutorVisible = true;
          if (
            experience4Tutor.value && experience4Tutor.checkValidity() &&
            duration4Tutor.value && duration4Tutor.checkValidity() &&
            when4Tutor.value && when4Tutor.checkValidity()
          ) {
            isTrueComponentExperience4Tutor = true;
          }
        } 

        if (getComputedStyle(componentExperience5Tutor).display == "block") {
          componentExperience5TutorVisible = true;
          if (
            experience5Tutor.value && experience5Tutor.checkValidity() &&
            duration5Tutor.value && duration5Tutor.checkValidity() &&
            when5Tutor.value && when5Tutor.checkValidity()
          ) {
            isTrueComponentExperience5Tutor = true;
          }
        } 

        if (getComputedStyle(componentExperience6Tutor).display == "block") {
          componentExperience6TutorVisible = true;
          if (
            experience6Tutor.value && experience6Tutor.checkValidity() &&
            duration6Tutor.value && duration6Tutor.checkValidity() &&
            when6Tutor.value && when6Tutor.checkValidity()
          ) {
            isTrueComponentExperience6Tutor = true;
          }
        } 


        if ((isTrueComponentExperience1Tutor || isTrueComponentNoExperience1Tutor) &&  
          (!componentExperience2TutorVisible || (componentExperience2TutorVisible && isTrueComponentExperience2Tutor)&&
          (!componentExperience3TutorVisible || (componentExperience3TutorVisible && isTrueComponentExperience3Tutor)&&
          (!componentExperience4TutorVisible || (componentExperience4TutorVisible && isTrueComponentExperience4Tutor)&&
          (!componentExperience5TutorVisible || (componentExperience5TutorVisible && isTrueComponentExperience5Tutor)&&
          (!componentExperience6TutorVisible || (componentExperience6TutorVisible && isTrueComponentExperience6Tutor))))))) {     
            nextBtn.classList.remove('disabled');
        } else {
            nextBtn.classList.add('disabled');
        }
    }

    [experience1Tutor, when1Tutor, duration1Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });

    [experience2Tutor, when2Tutor, duration2Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });

    [experience3Tutor, when3Tutor, duration3Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });

    [experience4Tutor, when4Tutor, duration4Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });

    [experience5Tutor, when5Tutor, duration5Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });

    [experience6Tutor, when6Tutor, duration6Tutor].forEach(function(input) {
      input.addEventListener('input', function() {
        checkAllFieldsFilled3();
      });
    });


    function checkAllFieldsFilled4() {
        isAllFieldsFilled4 = false;
        var filledFields4 = 0;

        requiredFields4.forEach(function(field) {
            if (field.value && field.checkValidity()) {
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
            checkAllFieldsFilled4();

        });
    });

    function checkAllFieldsFilled5() {
      isAllFieldsFilled5 = false;
      var filledFields5 = 0;

      requiredFields5.forEach(function(field) {
          if (field.value && field.checkValidity()) {
              filledFields5++;
          }
      });

      if (filledFields5 === requiredFields5.length) {
          isAllFieldsFilled5 = true;

      }

      if (isAllFieldsFilled5) {
          submitBtn.classList.remove('disabled');
      } else {
          submitBtn.classList.add('disabled');
      }
  }

  requiredFields5.forEach(function(input) {
      input.addEventListener('input', function() {
          checkAllFieldsFilled5();

      });
  });



    nextBtn.addEventListener('click', function() {
        if (isAllFieldsFilled1 && step2.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
            step1.style.display = 'none';
            step2.style.display = 'block';
            backBtn.style.display = 'flex';
            nextBtn.classList.add('disabled');
            showStepNumber.textContent = "Schritt 2 von 5";
            checkAllFieldsFilled2();
        } else if (isAllFieldsFilled2 && 
          (!componentSubject2TutorVisible || (componentSubject2TutorVisible && isTrueComponentSubject2Tutor)&& 
          (!componentSubject3TutorVisible || (componentSubject3TutorVisible && isTrueComponentSubject3Tutor)&& 
          (!componentSubject4TutorVisible || (componentSubject4TutorVisible && isTrueComponentSubject4Tutor)&& 
          (!componentSubject5TutorVisible || (componentSubject5TutorVisible && isTrueComponentSubject5Tutor)&& 
          (!componentSubject6TutorVisible || (componentSubject6TutorVisible && isTrueComponentSubject6Tutor)))))) && step1.style.display == 'none' && step3.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
            step2.style.display = 'none';
            step3.style.display = 'block';
            nextBtn.classList.add('disabled');
            showStepNumber.textContent = "Schritt 3 von 5";
            checkAllFieldsFilled3()
        } else if ((isTrueComponentExperience1Tutor || isTrueComponentNoExperience1Tutor) && 
            (!componentExperience2TutorVisible || (componentExperience2TutorVisible && isTrueComponentExperience2Tutor)&&
            (!componentExperience3TutorVisible || (componentExperience3TutorVisible && isTrueComponentExperience3Tutor)&&
            (!componentExperience4TutorVisible || (componentExperience4TutorVisible && isTrueComponentExperience4Tutor)&&
            (!componentExperience5TutorVisible || (componentExperience5TutorVisible && isTrueComponentExperience5Tutor)&&
            (!componentExperience6TutorVisible || (componentExperience6TutorVisible && isTrueComponentExperience6Tutor))))))
           && step1.style.display == 'none' && step2.style.display == 'none' && step4.style.display == 'none' && step5.style.display == 'none') {
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
            checkAllFieldsFilled5()
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



    classFrom1Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom1Tutor.value);
  
      for (let i = 0; i < classTo1Tutor.options.length; i++) {
        const optionValue = parseInt(classTo1Tutor.options[i].value);
  
        if (optionValue <= selectedValue) {
          classTo1Tutor.options[i].style.display = "none";
        } else {
          classTo1Tutor.options[i].style.display = "block";
        }
      }
      classTo1Tutor.value = '';
    });
  
    classFrom2Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom2Tutor.value);
    
      for (let i = 0; i < classTo2Tutor.options.length; i++) {
        const optionValue = parseInt(classTo2Tutor.options[i].value);
    
        if (optionValue <= selectedValue) {
          classTo2Tutor.options[i].style.display = "none";
        } else {
          classTo2Tutor.options[i].style.display = "block";
        }
      }
      classTo2Tutor.value = '';
    });
    
   
    classFrom3Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom3Tutor.value);
    
      for (let i = 0; i < classTo3Tutor.options.length; i++) {
        const optionValue = parseInt(classTo3Tutor.options[i].value);
    
        if (optionValue <= selectedValue) {
          classTo3Tutor.options[i].style.display = "none";
        } else {
          classTo3Tutor.options[i].style.display = "block";
        }
      }
      classTo3Tutor.value = '';
    });
    
    
    classFrom4Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom4Tutor.value);
    
      for (let i = 0; i < classTo4Tutor.options.length; i++) {
        const optionValue = parseInt(classTo4Tutor.options[i].value);
    
        if (optionValue <= selectedValue) {
          classTo4Tutor.options[i].style.display = "none";
        } else {
          classTo4Tutor.options[i].style.display = "block";
        }
      }
      classTo4Tutor.value = '';
    });
    
    
    classFrom5Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom5Tutor.value);
    
      for (let i = 0; i < classTo5Tutor.options.length; i++) {
        const optionValue = parseInt(classTo5Tutor.options[i].value);
    
        if (optionValue <= selectedValue) {
          classTo5Tutor.options[i].style.display = "none";
        } else {
          classTo5Tutor.options[i].style.display = "block";
        }
      }
      classTo5Tutor.value = '';
    });
    
    classFrom6Tutor.addEventListener("change", function() {
      const selectedValue = parseInt(classFrom6Tutor.value);
    
      for (let i = 0; i < classTo6Tutor.options.length; i++) {
        const optionValue = parseInt(classTo6Tutor.options[i].value);
    
        if (optionValue <= selectedValue) {
          classTo6Tutor.options[i].style.display = "none";
        } else {
          classTo6Tutor.options[i].style.display = "block";
        }
      }
      classTo6Tutor.value = '';
    });
});
