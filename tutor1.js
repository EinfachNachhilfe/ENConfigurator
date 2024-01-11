const subjectsOrder = ["Mathe", "Deutsch", "Englisch", "Französisch", "Latein", "Italienisch", "Spanisch", "Physik", "Chemie", "Biologie", "Geografie", "Geschichte", "Sozialkunde", "Informatik", "Sport und Fitness", "Wirtschaft", "Sonstiges"];
const addSubjectBtn = document.getElementById('addSubjectBtn');
const addSelectedSubjectBtn = document.getElementById('addSelectedSubjectBtn');
const subjectDropdown = document.getElementById('subjectDropdown');
const classFromDropdown = document.getElementById('classFromDropdown');
const classToDropdown = document.getElementById('classToDropdown');
const emailForm = document.getElementById('regform');
const addedSubjects = document.getElementById('addedSubjects');
const popup = document.getElementById('popup_subject-tutor');
const closePopupX = document.querySelector('.close-popup');
const background = document.getElementById('background');

popup.style.display = 'none';
background.style.display = 'none';

addSubjectBtn.addEventListener('click', function() {
    background.style.display = 'block';
    popup.style.display = 'block';
        subjectDropdown.selectedIndex = '0';
    classFromDropdown.selectedIndex = '0';
    classToDropdown.innerHTML = '';
let option = document.createElement("option");
option.text = "Bis Klasse";
option.value = '0'
classToDropdown.add(option);



});

closePopupX.addEventListener('click', function() {
    popup.style.display = 'none';
    popupExperienceTutor.style.display = 'none';
    background.style.display = 'none';

});

background.addEventListener('click', function() {
    popup.style.display = 'none';
    popupExperienceTutor.style.display = 'none';
    background.style.display = 'none';

});

function addSubjectToDropdown(subject) {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;

    let inserted = false;
    for (let i = 0; i < subjectsOrder.length; i++) {
        if (subjectsOrder[i] === subject) {
            for (let j = 0; j < subjectDropdown.options.length; j++) {
                if (subjectsOrder.indexOf(subjectDropdown.options[j].value) > i) {
                    subjectDropdown.insertBefore(option, subjectDropdown.options[j]);
                    inserted = true;
                    break;
                }
            }
            if (inserted) break;
        }
    }
    if (!inserted) {
        subjectDropdown.appendChild(option);
    }
}

classFromDropdown.addEventListener('change', function() {
    const classFrom = parseInt(this.value);

    // Löschen Sie alle aktuellen Optionen im "bis Klasse" Dropdown
    classToDropdown.innerHTML = '';

    // Fügen Sie Optionen hinzu, die höher sind als die ausgewählte "von Klasse"
    for (let i = classFrom + 1; i <= 13; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + ". Klasse"; // Hier wurde ". Klasse" hinzugefügt
        classToDropdown.appendChild(option);
    }
});

function areConditionsMet() {
    return subjectDropdown.value && parseInt(classFromDropdown.value) > 0 && parseInt(classToDropdown.value) > 0;
}


addSelectedSubjectBtn.addEventListener('click', function() {
    if (!areConditionsMet()) {
        return; // Breche die Ausführung der Funktion ab, wenn die Bedingungen nicht erfüllt sind
    }
    const subject = subjectDropdown.value;
    const classFrom = classFromDropdown.value;
    const classTo = classToDropdown.value;
    
    const newSubjectElement = document.createElement('div');
    newSubjectElement.style.backgroundColor = '#cfd9e6';
newSubjectElement.style.padding = '0.5rem 1rem 0.5rem 1rem';
    newSubjectElement.style.marginBottom = '0.75rem';
    newSubjectElement.style.color = 'black';
    newSubjectElement.style.borderRadius = '0.625rem';
    newSubjectElement.style.fontSize = '0.9rem';
    newSubjectElement.style.minHeight = '3rem';
    newSubjectElement.style.display = 'flex';
newSubjectElement.style.alignItems = 'center';




newSubjectElement.innerHTML = `${subject} (Klasse ${classFrom} bis ${classTo}) <button onclick="removeSubject(this, '${subject}', '${classFrom}', '${classTo}')" style="background-color: white; color: black; border: none; border-radius: 0.625rem; padding: 0.3rem 0.3rem; margin-left: 0.6rem; font-size: 0.9rem;">Fach entfernen</button>`;
addedSubjects.appendChild(newSubjectElement);




    // Erstellen von versteckten input-Elementen
    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = `subject_${subject}`;
    subjectInput.value = subject;
    emailForm.appendChild(subjectInput);

    const classFromInput = document.createElement('input');
    classFromInput.type = 'hidden';
    classFromInput.name = `classFrom_${subject}`;
    classFromInput.value = classFrom;
    emailForm.appendChild(classFromInput);

    const classToInput = document.createElement('input');
    classToInput.type = 'hidden';
    classToInput.name = `classTo_${subject}`;
    classToInput.value = classTo;
    emailForm.appendChild(classToInput);

    popup.style.display = 'none';
    background.style.display = 'none';
    
    const selectedOption = subjectDropdown.querySelector(`option[value="${subject}"]`);
    if (selectedOption) {
        subjectDropdown.removeChild(selectedOption);
    }
});

function removeSubject(btn, subject, classFrom, classTo) {
    // Finden der versteckten input-Elemente basierend auf ihren Werten
    const subjectInputs = Array.from(emailForm.querySelectorAll(`input[name="subject_${subject}"]`)).filter(input => input.value === subject);
    const classFromInputs = Array.from(emailForm.querySelectorAll(`input[name="classFrom_${subject}"]`)).filter(input => input.value === classFrom);
    const classToInputs = Array.from(emailForm.querySelectorAll(`input[name="classTo_${subject}"]`)).filter(input => input.value === classTo);

    // Das erste versteckte input-Element jedes Typs entfernen, das den spezifizierten Werten entspricht
    if (subjectInputs[0]) subjectInputs[0].remove();
    if (classFromInputs[0]) classFromInputs[0].remove();
    if (classToInputs[0]) classToInputs[0].remove();

    btn.parentElement.remove(); // Entfernen des sichtbaren Eintrags aus der Liste
    
    addSubjectToDropdown(subject);
}


const experienceOrder = ["Keine Erfahrung", "Einzelunterricht", "Gruppenunterricht", "Hausaufgabenbetreuung", "Prüfungsvorbereitung", "Sprachunterricht"];
const addExperienceBtn = document.getElementById('addexperienceBtn');
const addSelectedexperiencetBtn = document.getElementById('addSelectedexperienceBtn');
const experienceTutor = document.getElementById('experience_tutor');
const durationTutor = document.getElementById('duration_tutor');
const whenTutor = document.getElementById('when_tutor');
const regform = document.getElementById('regform');
const addedExperience = document.getElementById('addedExperience');
const popupExperienceTutor = document.getElementById('popup_experience-tutor');



popupExperienceTutor.style.display = 'none';
background.style.display = 'none';

addExperienceBtn.addEventListener('click', function() {
    background.style.display = 'block';
    popupExperienceTutor.style.display = 'block';
    experienceTutor.selectedIndex = '0';
    durationTutor.selectedIndex = '0';
    whenTutor.selectedIndex = '0';


});


function addExperienceToDropdown(experience) {
    const option = document.createElement('option');
    option.value = experience;
    option.textContent = experience;

    let inserted = false;
    for (let i = 0; i < experienceOrder.length; i++) {
        if (experienceOrder[i] === experience) {
            for (let j = 0; j < experienceTutor.options.length; j++) {
                if (experienceOrder.indexOf(experienceTutor.options[j].value) > i) {
                    experienceTutor.insertBefore(option, experienceTutor.options[j]);
                    inserted = true;
                    break;
                }
            }
            if (inserted) break;
        }
    }
    if (!inserted) {
        experienceTutor.appendChild(option);
    }
}



function areConditionsMet() {
    return experienceTutor.value !== '0' && durationTutor.value !== '0' && whenTutor.value !== '0';
}


addSelectedexperiencetBtn.addEventListener('click', function() {
    if (!areConditionsMet()) {
        return;
    }
    const experience = experienceTutor.value;
    const duration = durationTutor.value;
    const when = whenTutor.value;
    
    const newSubjectElement = document.createElement('div');
    newSubjectElement.style.backgroundColor = '#cfd9e6';
    newSubjectElement.style.padding = '0.5rem 1rem 0.5rem 1rem';
    newSubjectElement.style.marginBottom = '0.75rem';
    newSubjectElement.style.color = 'black';
    newSubjectElement.style.borderRadius = '0.625rem';
    newSubjectElement.style.fontSize = '0.9rem';
    newSubjectElement.style.minHeight = '3rem';
    newSubjectElement.style.display = 'flex';
    newSubjectElement.style.alignItems = 'center';




newSubjectElement.innerHTML = `${experience} (Mit ${duration} Erfahrung, ${when}) <button onclick="removeSubject(this, '${experience}', '${duration}', '${when}')" style="background-color: white; color: black; border: none; border-radius: 0.625rem; padding: 0.3rem 0.3rem; margin-left: 0.6rem; font-size: 0.9rem;">Fach entfernen</button>`;
addedExperience.appendChild(newSubjectElement);




    // Erstellen von versteckten input-Elementen
    const experienceInput = document.createElement('input');
    experienceInput.type = 'hidden';
    experienceInput.name = `experience_${experience}`;
    experienceInput.value = experience;
    regform.appendChild(experienceInput);

    const durationInput = document.createElement('input');
    durationInput.type = 'hidden';
    durationInput.name = `duration_${experience}`;
    durationInput.value = duration;
    regform.appendChild(durationInput);

    const whenInput = document.createElement('input');
    whenInput.type = 'hidden';
    whenInput.name = `when_${experience}`;
    whenInput.value = when;
    regform.appendChild(whenInput);

    popupExperienceTutor.style.display = 'none';
    background.style.display = 'none';
    
    const selectedOption = experienceTutor.querySelector(`option[value="${experience}"]`);
    if (selectedOption) {
        experienceTutor.removeChild(selectedOption);
    }
});

function removeSubject(btn, experience, duration, when) {
    // Finden der versteckten input-Elemente basierend auf ihren Werten
    const experienceInput = Array.from(regform.querySelectorAll(`input[name="experience_${experience}"]`)).filter(input => input.value === experience);
    const durationInput = Array.from(regform.querySelectorAll(`input[name="duration_${experience}"]`)).filter(input => input.value === duration);
    const whenInput = Array.from(regform.querySelectorAll(`input[name="whenInput_${experience}"]`)).filter(input => input.value === when);

    // Das erste versteckte input-Element jedes Typs entfernen, das den spezifizierten Werten entspricht
    if (experienceInput[0]) experienceInput[0].remove();
    if (durationInput[0]) durationInput[0].remove();
    if (whenInput[0]) whenInput[0].remove();

    btn.parentElement.remove(); // Entfernen des sichtbaren Eintrags aus der Liste
    
    addExperienceToDropdown(experience);
}
