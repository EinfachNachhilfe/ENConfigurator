document.addEventListener("DOMContentLoaded", function() {


  const componentsubject2Tutor = document.getElementById("component-subject-2_tutor");
  const componentsubject3Tutor = document.getElementById("component-subject-3_tutor");
  const componentsubject4Tutor = document.getElementById("component-subject-4_tutor");
  const componentsubject5Tutor = document.getElementById("component-subject-5_tutor");
  const componentsubject6Tutor = document.getElementById("component-subject-6_tutor");
  

  const triggerOpenExperienceTutor = document.getElementById("trigger-open-subject_tutor");

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
  });


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
      triggerClosesubject2Tutor.style.display ="block";
  });

  triggerClosesubject4Tutor.addEventListener("click", function() {
    subject4Tutor.selectedIndex = 0;
    classFrom4Tutor.selectedIndex = 0;
    classTo4Tutor.selectedIndex = 0;
      componentsubject4Tutor.style.display = "none";
      componentsubject3Tutor.style.display = "block";
      triggerClosesubject3Tutor.style.display ="block";
  });

  triggerClosesubject5Tutor.addEventListener("click", function() {
    subject5Tutor.selectedIndex = 0;
    classFrom5Tutor.selectedIndex = 0;
    classTo5Tutor.selectedIndex = 0;
      componentsubject5Tutor.style.display = "none";
      componentsubject4Tutor.style.display = "block";
      triggerClosesubject4Tutor.style.display ="block";
  });

  triggerClosesubject6Tutor.addEventListener("click", function() {
    subject6Tutor.selectedIndex = 0;
    classFrom6Tutor.selectedIndex = 0;
    classTo6Tutor.selectedIndex = 0;
      componentsubject6Tutor.style.display = "none";
      componentsubject5Tutor.style.display = "block";
      triggerClosesubject5Tutor.style.display ="block";
      triggerOpenExperienceTutor.style.display = "flex";
  });

});
