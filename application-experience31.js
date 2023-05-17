document.addEventListener("DOMContentLoaded", function() {

  const experienceData = Array.from({ length: 6 }, (_, i) => ({
    component: document.getElementById(`component-experience-${i+1}_tutor`),
    triggerClose: document.getElementById(`trigger-close-experience-${i+1}_tutor`),
    experience: document.getElementById(`experience-${i+1}_tutor`),
    duration: document.getElementById(`duration-${i+1}_tutor`),
    when: document.getElementById(`when-${i+1}_tutor`),
  }));

  const triggerOpenExperienceTutor = document.getElementById("trigger-open-experience_tutor");

  // Initially hide all components except the first one
  experienceData.forEach((data, index) => {
    if (index > 0) {
      data.component.style.display = "none";
    }
  });

  triggerOpenExperienceTutor.addEventListener("click", function() {
    const nextHiddenExperience = experienceData.find(data => data.component.style.display === "none");

    if (nextHiddenExperience) {
      nextHiddenExperience.component.style.display = "block";
      nextHiddenExperience.triggerClose.style.display = "block";

      // Hide trigger of previous component
      const previousIndex = experienceData.indexOf(nextHiddenExperience) - 1;
      if (previousIndex >= 0) {
        experienceData[previousIndex].triggerClose.style.display = "none";
      }

      // Hide the "add experience" button if all experiences are visible
      if (!experienceData.some(data => data.component.style.display === "none")) {
        triggerOpenExperienceTutor.style.display = "none";
      }
    }
  });

  experienceData.forEach((data, index) => {
    data.triggerClose.addEventListener("click", function() {
      // Reset current component
      data.component.style.display = "none";
      data.experience.selectedIndex = 0;
      data.duration.selectedIndex = 0;
      data.when.selectedIndex = 0;

      // Show previous component trigger and "add experience" button
      if (index > 0) {
        experienceData[index - 1].triggerClose.style.display = "block";
      }
      triggerOpenExperienceTutor.style.display = "flex";
    });
  });

  experienceData[0].component.addEventListener("change", function() {
    if (experienceData[0].component.selectedIndex === 1) {
      // Reset all components
      experienceData.forEach(data => {
        data.component.style.display = (data === experienceData[0]) ? "grid" : "none";
        data.experience.selectedIndex = 0;
        data.duration.selectedIndex = 0;
        data.when.selectedIndex = 0;
        data.triggerClose.style.display = "none";
      });
      triggerOpenExperienceTutor.style.display = "none";
    } else {
      experienceData[0].component.style.display = "grid";
      triggerOpenExperienceTutor.style.display = "flex";
    }
  });

});
