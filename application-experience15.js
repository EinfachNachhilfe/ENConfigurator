document.addEventListener("DOMContentLoaded", function() {

    var hideExperience1 = document.querySelector("#hide-experience-1");
    var hideExperience2 = document.querySelector("#hide-experience-2");
    var hideExperience3 = document.querySelector("#hide-experience-3");
    var hideExperience4 = document.querySelector("#hide-experience-4");
    var hideExperience5 = document.querySelector("#hide-experience-5");
    var hideExperience6 = document.querySelector("#hide-experience-6");
  
    var addExperience = document.querySelector("#add-experience");
    var closeExperience2 = document.querySelector("#close-experience-2");
    var closeExperience3 = document.querySelector("#close-experience-3");
    var closeExperience4 = document.querySelector("#close-experience-4");
    var closeExperience5 = document.querySelector("#close-experience-5");
    var closeExperience6 = document.querySelector("#close-experience-6");
    var experience1 = document.querySelector("#experience-1");

   
  
    hideExperience2.style.display = "none";
    hideExperience3.style.display = "none";
    hideExperience4.style.display = "none";
    hideExperience5.style.display = "none";
    hideExperience6.style.display = "none";

  
    addExperience.addEventListener("click", function() {
      if (hideExperience2.style.display === "none") {
        hideExperience2.style.display = "block";
      } else if (hideExperience2.style.display === "block" && hideExperience3.style.display === "none") {
        hideExperience3.style.display = "block";
        document.querySelector("#close-experience-2").style.display = "none";
      } else if (hideExperience3.style.display === "block" && hideExperience4.style.display === "none") {
        hideExperience4.style.display = "block";
        document.querySelector("#close-experience-3").style.display = "none";
      } else if (hideExperience4.style.display === "block" && hideExperience5.style.display === "none") {
        hideExperience5.style.display = "block";
        document.querySelector("#close-experience-4").style.display = "none";
      } else if (hideExperience5.style.display === "block" && hideExperience6.style.display === "none") {
        hideExperience6.style.display = "block";
        document.querySelector("#close-experience-5").style.display = "none";
        addExperience.style.display = "none";
      }
    });
  
    closeExperience2.addEventListener("click", function() {
      document.querySelector("#experience-2").selectedIndex = 0;
      document.querySelector("#duration-2").selectedIndex = 0;
      document.querySelector("#when-2").selectedIndex = 0;
      hideExperience2.style.display = "none";
    });
  
    closeExperience3.addEventListener("click", function() {
      document.querySelector("#experience-3").selectedIndex = 0;
      document.querySelector("#duration-3").selectedIndex = 0;
      document.querySelector("#when-3").selectedIndex = 0;
      hideExperience3.style.display = "none";
      document.querySelector("#close-experience-2").style.display = "block";
    });
  
    closeExperience4.addEventListener("click", function() {
      document.querySelector("#experience-4").selectedIndex = 0;
      document.querySelector("#duration-4").selectedIndex = 0;
      document.querySelector("#when-4").selectedIndex = 0;
      hideExperience4.style.display = "none";
      document.querySelector("#close-experience-3").style.display = "block";
    });
  
    closeExperience5.addEventListener("click", function() {
        document.querySelector("#experience-5").selectedIndex = 0;
        document.querySelector("#duration-5").selectedIndex = 0;
        document.querySelector("#when-5").selectedIndex = 0;
        hideExperience5.style.display = "none";
        document.querySelector("#close-experience-4").style.display = "block";
      });
    
      closeExperience6.addEventListener("click", function() {
        document.querySelector("#experience-6").selectedIndex = 0;
        document.querySelector("#duration-6").selectedIndex = 0;
        document.querySelector("#when-6").selectedIndex = 0;
        hideExperience6.style.display = "none";
        document.querySelector("#close-experience-5").style.display = "block";
        addExperience.style.display = "flex";
      });
    
experience1.addEventListener("change", function() {
  if (experience1.selectedIndex === 1) {
    hideExperience1.style.display = "none";
      document.querySelector("#experience-2").selectedIndex = 0;
      document.querySelector("#duration-2").selectedIndex = 0;
      document.querySelector("#when-2").selectedIndex = 0;
       document.querySelector("#experience-3").selectedIndex = 0;
      document.querySelector("#duration-3").selectedIndex = 0;
      document.querySelector("#when-3").selectedIndex = 0;
      document.querySelector("#experience-4").selectedIndex = 0;
      document.querySelector("#duration-4").selectedIndex = 0;
      document.querySelector("#when-4").selectedIndex = 0;
      document.querySelector("#experience-5").selectedIndex = 0;
        document.querySelector("#duration-5").selectedIndex = 0;
        document.querySelector("#when-5").selectedIndex = 0;
      document.querySelector("#experience-6").selectedIndex = 0;
        document.querySelector("#duration-6").selectedIndex = 0;
        document.querySelector("#when-6").selectedIndex = 0;
       hideExperience2.style.display = "none";
    hideExperience3.style.display = "none";
    hideExperience4.style.display = "none";
    hideExperience5.style.display = "none";
    hideExperience6.style.display = "none";
       addExperience.style.display = "none";
  } else {
    hideExperience1.style.display = "grid";
  }
});

    
    });      
    
