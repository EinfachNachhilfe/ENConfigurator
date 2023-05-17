document.addEventListener("DOMContentLoaded", function() {

  const componentExperience1Tutor = document.getElementById("component-experience-1_tutor");
  const componentExperience2Tutor = document.getElementById("component-experience-2_tutor");
  const componentExperience3Tutor = document.querySelector("#component-experience-3_tutor");
  const componentExperience4Tutor = document.querySelector("#component-experience-4_tutor");
  const componentExperience5Tutor = document.querySelector("#component-experience-5_tutor");
  const componentExperience6Tutor = document.querySelector("#component-experience-6_tutor");
  

  const triggerOpenExperienceTutor = document.querySelector("#trigger-open-experience_tutor");

  const triggerCloseExperience2Tutor = document.querySelector("#trigger-close-experience-2_tutor");
  const triggerCloseExperience3Tutor = document.querySelector("#trigger-close-experience-3_tutor");
  const triggerCloseExperience4Tutor = document.querySelector("#trigger-close-experience-4_tutor");
  const triggerCloseExperience5Tutor = document.querySelector("#trigger-close-experience-5_tutor");
  const triggerCloseExperience6Tutor = document.querySelector("#trigger-close-experience-6_tutor");
 
  const experience1Tutor = document.querySelector("#experience-1_tutor");
  const duration1Tutor = document.querySelector("#duration-1_tutor");
  const when1Tutor = document.querySelector("#when-1_tutor");

  const experience2Tutor = document.querySelector("#experience-2_tutor");
  const duration2Tutor = document.querySelector("#duration-2_tutor");
  const when2Tutor = document.querySelector("#when-2_tutor");

  const experience3Tutor = document.querySelector("#experience-3_tutor");
  const duration3Tutor = document.querySelector("#duration-3_tutor");
  const when3Tutor = document.querySelector("#when-3_tutor");

  const experience4Tutor = document.querySelector("#experience-4_tutor");
  const duration4Tutor = document.querySelector("#duration-4_tutor");
  const when4Tutor = document.querySelector("#when-4_tutor");

  const experience5Tutor = document.querySelector("#experience-5_tutor");
  const duration5Tutor = document.querySelector("#duration-5_tutor");
  const when5Tutor = document.querySelector("#when-5_tutor");

  const experience6Tutor = document.querySelector("#experience-6_tutor");
  const duration6Tutor = document.querySelector("#duration-6_tutor");
  const when6Tutor = document.querySelector("#when-6_tutor");

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
      triggerCloseExperience2Tutor ="block";
  });

  triggerCloseExperience4Tutor.addEventListener("click", function() {
    experience4Tutor.selectedIndex = 0;
    duration4Tutor.selectedIndex = 0;
    when4Tutor.selectedIndex = 0;
      componentExperience4Tutor.style.display = "none";
      componentExperience3Tutor.style.display = "block";
      triggerCloseExperience3Tutor ="block";
  });

  triggerCloseExperience5Tutor.addEventListener("click", function() {
    experience5Tutor.selectedIndex = 0;
    duration5Tutor.selectedIndex = 0;
    when5Tutor.selectedIndex = 0;
      componentExperience5Tutor.style.display = "none";
      componentExperience4Tutor.style.display = "block";
      triggerCloseExperience4Tutor ="block";
  });

  triggerCloseExperience6Tutor.addEventListener("click", function() {
    experience6Tutor.selectedIndex = 0;
    duration6Tutor.selectedIndex = 0;
    when6Tutor.selectedIndex = 0;
      componentExperience6Tutor.style.display = "none";
      componentExperience5Tutor.style.display = "block";
      triggerCloseExperience5Tutor ="block";
      triggerOpenExperienceTutor.style.display = "flex";
  });

  componentExperience1Tutor.addEventListener("change", function() {
      if (componentExperience1Tutor.selectedIndex === 1) {
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



});
