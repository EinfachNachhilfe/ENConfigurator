document.addEventListener("DOMContentLoaded", function() {

  //add Subject
  const componentsubject2Tutor = document.getElementById("component-subject-2_tutor");
  const componentsubject3Tutor = document.getElementById("component-subject-3_tutor");
  const componentsubject4Tutor = document.getElementById("component-subject-4_tutor");
  const componentsubject5Tutor = document.getElementById("component-subject-5_tutor");
  const componentsubject6Tutor = document.getElementById("component-subject-6_tutor");
  const triggerOpenSubjectTutor = document.getElementById("trigger-open-subject_tutor");
  const triggerClosesubject2Tutor = document.getElementById("trigger-close-subject-2_tutor");
  const triggerClosesubject3Tutor = document.getElementById("trigger-close-subject-3_tutor");
  const triggerClosesubject4Tutor = document.getElementById("trigger-close-subject-4_tutor");
  const triggerClosesubject5Tutor = document.getElementById("trigger-close-subject-5_tutor");
  const triggerClosesubject6Tutor = document.getElementById("trigger-close-subject-6_tutor");
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
  componentsubject2Tutor.style.display = "none";
  componentsubject3Tutor.style.display = "none";
  componentsubject4Tutor.style.display = "none";
  componentsubject5Tutor.style.display = "none";
  componentsubject6Tutor.style.display = "none";

  triggerOpenExperienceTutor.addEventListener("click", function() {
      if (componentsubject2Tutor.style.display === "none") {
          componentsubject2Tutor.style.display = "block";
          triggerClosesubject2Tutor.style.display = "block";
      } else if (componentsubject2Tutor.style.display === "block" && componentsubject3Tutor.style.display === "none") {
          componentsubject3Tutor.style.display = "block";
          triggerClosesubject2Tutor.style.display = "none";
          triggerClosesubject3Tutor.style.display = "block";
      } else if (componentsubject3Tutor.style.display === "block" && componentsubject4Tutor.style.display === "none") {
          componentsubject4Tutor.style.display = "block";
          triggerClosesubject3Tutor.style.display = "none";
          triggerClosesubject4Tutor.style.display = "block";
      } else if (componentsubject4Tutor.style.display === "block" && componentsubject5Tutor.style.display === "none") {
          componentsubject5Tutor.style.display = "block";
          triggerClosesubject4Tutor.style.display = "none";
          triggerClosesubject5Tutor.style.display = "block";
      } else if (componentsubject5Tutor.style.display === "block" && componentsubject6Tutor.style.display === "none") {
          componentsubject6Tutor.style.display = "block";
          triggerClosesubject5Tutor.style.display = "none";
          triggerClosesubject6Tutor.style.display = "block";
          triggerOpenExperienceTutor.style.display = "none";
      }



      triggerClosesubject2Tutor.addEventListener("click", function() {
          subject2Tutor.selectedIndex = 0;
          classFrom2Tutor.selectedIndex = 0;
          classTo2Tutor.selectedIndex = 0;
          componentsubject2Tutor.style.display = "none";
      });

      triggerClosesubject3Tutor.addEventListener("click", function() {
          subject3Tutor.selectedIndex = 0;
          classFrom3Tutor.selectedIndex = 0;
          classTo3Tutor.selectedIndex = 0;
          componentsubject3Tutor.style.display = "none";
          componentsubject2Tutor.style.display = "block";
          triggerClosesubject2Tutor.style.display = "block";
      });

      triggerClosesubject4Tutor.addEventListener("click", function() {
          subject4Tutor.selectedIndex = 0;
          classFrom4Tutor.selectedIndex = 0;
          classTo4Tutor.selectedIndex = 0;
          componentsubject4Tutor.style.display = "none";
          componentsubject3Tutor.style.display = "block";
          triggerClosesubject3Tutor.style.display = "block";
      });

      triggerClosesubject5Tutor.addEventListener("click", function() {
          subject5Tutor.selectedIndex = 0;
          classFrom5Tutor.selectedIndex = 0;
          classTo5Tutor.selectedIndex = 0;
          componentsubject5Tutor.style.display = "none";
          componentsubject4Tutor.style.display = "block";
          triggerClosesubject4Tutor.style.display = "block";
      });

      triggerClosesubject6Tutor.addEventListener("click", function() {
          subject6Tutor.selectedIndex = 0;
          classFrom6Tutor.selectedIndex = 0;
          classTo6Tutor.selectedIndex = 0;
          componentsubject6Tutor.style.display = "none";
          componentsubject5Tutor.style.display = "block";
          triggerClosesubject5Tutor.style.display = "block";
          triggerOpenExperienceTutor.style.display = "flex";
      });


      //add experience
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
          triggerCloseExperience2Tutor.style.display = "block";
      });

      triggerCloseExperience4Tutor.addEventListener("click", function() {
          experience4Tutor.selectedIndex = 0;
          duration4Tutor.selectedIndex = 0;
          when4Tutor.selectedIndex = 0;
          componentExperience4Tutor.style.display = "none";
          componentExperience3Tutor.style.display = "block";
          triggerCloseExperience3Tutor.style.display = "block";
      });

      triggerCloseExperience5Tutor.addEventListener("click", function() {
          experience5Tutor.selectedIndex = 0;
          duration5Tutor.selectedIndex = 0;
          when5Tutor.selectedIndex = 0;
          componentExperience5Tutor.style.display = "none";
          componentExperience4Tutor.style.display = "block";
          triggerCloseExperience4Tutor.style.display = "block";
      });

      triggerCloseExperience6Tutor.addEventListener("click", function() {
          experience6Tutor.selectedIndex = 0;
          duration6Tutor.selectedIndex = 0;
          when6Tutor.selectedIndex = 0;
          componentExperience6Tutor.style.display = "none";
          componentExperience5Tutor.style.display = "block";
          triggerCloseExperience5Tutor.style.display = "block";
          triggerOpenExperienceTutor.style.display = "flex";
      });

      experience1Tutor.addEventListener("change", function() {
          if (experience1Tutor.selectedIndex === 1) {
              componentExperience1Tutor.style.display = "none";
              experience1Tutor.selectedIndex = 0;
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

  });

});
