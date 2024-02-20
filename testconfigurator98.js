final final

 //start general
 const nextBtn = document.querySelector('#nextBtn');
 const prevBtn = document.querySelector('#prevBtn');
 const submitBtn = document.querySelector('#submitBtn');
 const allInputs = document.querySelectorAll('input, select, textarea');
 let validationElements = {};
 const zipCodeTeachingLocation = document.getElementById('zip-code_teaching-location');
 const bdayStudent = document.getElementById('bday_student');
 const emailPayable = document.getElementById('email_payable');
 const phoneNumberPayable = document.getElementById('phone-number_payable');
 const ibanPayable = document.getElementById('iban_payable');
 const emailCustomer = document.getElementById('email_customer');
 const phoneNumberCustomer = document.getElementById('phone-number_customer');
 const contractTerminationCustomer = document.getElementById('contract-termination_customer');
 const phoneNumberContactPerson = document.getElementById('phone-number_contact-person');
 const emailContactPerson = document.getElementById('email_contact-person');
 const configuratorForm = document.getElementById('configurator');
 const applicationTutorForm = document.getElementById('applicationTutor');
 const couponCode = document.getElementById('coupon-code');
 const couponCodeElement = document.getElementById('coupon-code');
 const phoneNumberTutor = document.getElementById('phone-number_tutor');
  const emailTutor = document.getElementById('email_tutor');
  const bdayTutor = document.getElementById('bday_tutor');
  const availabilityTutor = document.getElementById('availability_tutor');
 const couponCodes = {
     "lernen2023": { regex: /^lernen2023$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "herbst4": { regex: /^herbst4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "schulstart4": { regex: /^schulstart4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "schulstartg4": { regex: /^schulstartg4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "schulstart1b4": { regex: /^schulstart1b4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "schulstartz4": { regex: /^schulstartz4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "schulstartm4": { regex: /^schulstartm4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
     "freund100": { regex: /^freund100$/i, message: 'Sie und Ihr Freund erhalten jeweils 100€ Gutschrift!' },
 };
 
 if (applicationTutorForm){
 
 const subjectsOrder = ["Mathe", "Deutsch", "Englisch", "Französisch", "Latein", "Italienisch", "Spanisch", "Physik", "Chemie", "Biologie", "Geografie", "Geschichte", "Sozialkunde", "Informatik", "Sport und Fitness", "Wirtschaft", "Sonstiges"];
 const addSubjectBtn = document.getElementById('addSubjectBtn');
 const addSelectedSubjectBtn = document.getElementById('addSelectedSubjectBtn');
 const subjectDropdown = document.getElementById('subjectDropdown');
 const classFromDropdown = document.getElementById('classFromDropdown');
 const classToDropdown = document.getElementById('classToDropdown');
 const addedSubjects = document.getElementById('addedSubjects');
 const popup = document.getElementById('popup_subject-tutor');
 const closePopupXElements = document.querySelectorAll('.close-popup');
 const background = document.getElementById('background');
 const showFirstNames = document.querySelectorAll('.show_first-name');
  const firstNameInput = document.getElementById('first-name_tutor');
       firstNameInput.addEventListener('input', function() {
          showFirstNames.forEach(function(element) {
              element.textContent = firstNameInput.value;
          });
      });
 
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
 
 
 
 closePopupXElements.forEach(function(element) {
     element.addEventListener('click', function() {
         popup.style.display = 'none';
         popupExperienceTutor.style.display = 'none';
         background.style.display = 'none';
     });
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
 
 function areConditionsMetClass() {
     return subjectDropdown.value && parseInt(classFromDropdown.value) > 0 && parseInt(classToDropdown.value) > 0;
 }
 
 
 addSelectedSubjectBtn.addEventListener('click', function() {
     if (!areConditionsMetClass()) {
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
     applicationTutorForm.appendChild(subjectInput);
 
     const classFromInput = document.createElement('input');
     classFromInput.type = 'hidden';
     classFromInput.name = `classFrom_${subject}`;
     classFromInput.value = classFrom;
     applicationTutorForm.appendChild(classFromInput);
 
     const classToInput = document.createElement('input');
     classToInput.type = 'hidden';
     classToInput.name = `classTo_${subject}`;
     classToInput.value = classTo;
     applicationTutorForm.appendChild(classToInput);
 
     popup.style.display = 'none';
     background.style.display = 'none';
     
     const selectedOption = subjectDropdown.querySelector(`option[value="${subject}"]`);
     if (selectedOption) {
         subjectDropdown.removeChild(selectedOption);
     }
   validateForm();
 });
 
 function removeSubject(btn, subject, classFrom, classTo) {
     // Finden der versteckten input-Elemente basierend auf ihren Werten
     const subjectInputs = Array.from(applicationTutorForm.querySelectorAll(`input[name="subject_${subject}"]`)).filter(input => input.value === subject);
     const classFromInputs = Array.from(applicationTutorForm.querySelectorAll(`input[name="classFrom_${subject}"]`)).filter(input => input.value === classFrom);
     const classToInputs = Array.from(applicationTutorForm.querySelectorAll(`input[name="classTo_${subject}"]`)).filter(input => input.value === classTo);
 
     // Das erste versteckte input-Element jedes Typs entfernen, das den spezifizierten Werten entspricht
     if (subjectInputs[0]) subjectInputs[0].remove();
     if (classFromInputs[0]) classFromInputs[0].remove();
     if (classToInputs[0]) classToInputs[0].remove();
 
     btn.parentElement.remove(); // Entfernen des sichtbaren Eintrags aus der Liste
     addSubjectToDropdown(subject);
     validateForm();
 }
 
 
 const experienceOrder = ["Keine Erfahrung", "Einzelunterricht", "Gruppenunterricht", "Hausaufgabenbetreuung", "Prüfungsvorbereitung", "Sprachunterricht"];
 const addExperienceBtn = document.getElementById('addexperienceBtn');
 const addSelectedexperiencetBtn = document.getElementById('addSelectedexperienceBtn');
 const experienceTutor = document.getElementById('experience_tutor');
 const durationTutor = document.getElementById('duration_tutor');
 const whenTutor = document.getElementById('when_tutor');
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
 
 
 
 function areConditionsMetEx() {
     return experienceTutor.value !== '0' && durationTutor.value !== '0' && whenTutor.value !== '0';
 }
 
 
 addSelectedexperiencetBtn.addEventListener('click', function() {
     if (!areConditionsMetEx()) {
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
 
 
 
 
 newSubjectElement.innerHTML = `${experience} (Mit ${duration} Erfahrung, ${when}) <button onclick="removeExperience(this, '${experience}', '${duration}', '${when}')" style="background-color: white; color: black; border: none; border-radius: 0.625rem; padding: 0.3rem 0.3rem; margin-left: 0.6rem; font-size: 0.9rem;">Fach entfernen</button>`;
 addedExperience.appendChild(newSubjectElement);
 
 
 
 
     // Erstellen von versteckten input-Elementen
     const experienceInput = document.createElement('input');
     experienceInput.type = 'hidden';
     experienceInput.name = `experience_${experience}`;
     experienceInput.value = experience;
     applicationTutorForm.appendChild(experienceInput);
 
     const durationInput = document.createElement('input');
     durationInput.type = 'hidden';
     durationInput.name = `duration_${experience}`;
     durationInput.value = duration;
     applicationTutorForm.appendChild(durationInput);
 
     const whenInput = document.createElement('input');
     whenInput.type = 'hidden';
     whenInput.name = `when_${experience}`;
     whenInput.value = when;
     applicationTutorForm.appendChild(whenInput);
 
     popupExperienceTutor.style.display = 'none';
     background.style.display = 'none';
     
     const selectedOption = experienceTutor.querySelector(`option[value="${experience}"]`);
     if (selectedOption) {
         experienceTutor.removeChild(selectedOption);
     }
   validateForm();
 });
 
 function removeExperience(btn, experience, duration, when) {
     // Finden der versteckten input-Elemente basierend auf ihren Werten
     const experienceInput = Array.from(applicationTutorForm.querySelectorAll(`input[name="experience_${experience}"]`)).filter(input => input.value === experience);
     const durationInput = Array.from(applicationTutorForm.querySelectorAll(`input[name="duration_${experience}"]`)).filter(input => input.value === duration);
     const whenInput = Array.from(applicationTutorForm.querySelectorAll(`input[name="whenInput_${experience}"]`)).filter(input => input.value === when);
 
     // Das erste versteckte input-Element jedes Typs entfernen, das den spezifizierten Werten entspricht
     if (experienceInput[0]) experienceInput[0].remove();
     if (durationInput[0]) durationInput[0].remove();
     if (whenInput[0]) whenInput[0].remove();
 
     btn.parentElement.remove(); // Entfernen des sichtbaren Eintrags aus der Liste
     addExperienceToDropdown(experience);
   validateForm();
 }
 
  
 }
 
if (configuratorForm) {
	 
	const buttonTexts = {
         'btnAddTandemLesson': 'Hier können Sie für nur 10 EUR mehr pro Stunde noch ein zweites Kind in den Unterricht dazunehmen. Somit können Sie sich die Kosten für die Nachhilfe mit einem Klassenkamerad oder Nachbar teilen. Wir empfehlen auf ein gleiches Kompetenzniveau und Klassenstufe zu achten. ',
         'btnAddOnContractBreak': 'Mit diesem Add-On können Sie den Vertrag jederzeit pausieren und sparen somit in Ferienzeiten oder einem sonstigen beliebigen Zeitpunkt, an dem keine Nachhilfe stattfinden kann oder soll. In Summe können maximal 12 Wochen über 12 Monate pausiert werden. Der Vertrag verlängert sich entsprechend. ',
         'btnAddOnPremiumTutor': 'Hier garantieren wir Ihnen die Vermittlung an unsere besten Lehrkräfte mit besonders viel Erfahrung und wertvollen Kompetenzen. Eine Premiumlehrkraft hat mindestens 100 Schulstunden an Unterrichtserfahrung (in der Regel mehr) oder eine bereits abgeschlossene pädagogische Ausbildung, bei der ähnlich viel Praxiserfahrung abverlangt wurde. Darüber hinaus nimmt sie regelmäßig an professionellen Weiterbildungen teil und bringt so Kompetenzen für anspruchsvolle Förderbedarfe mit (Lern- und Sprachstörungen, LRS, Autismus, Dyskalkulie, HDS, usw. ...).',
         'btnAddOnExperiencedTutor': 'Hier garantieren wir Ihnen den Einsatz einer besonders erfahrenen Lehrkraft. Erfahrene Lehrkräfte haben mindestens 100 Unterrichtsstunden gehalten und dabei bereits die typischen Herausforderungen gemeistert. Sogar Personen mit einer abgeschlossenen pädagogischen Ausbildung mit einer ähnlichen Praxiserfahrung zählen dazu.',
         'btnAddOnAllRoundTutor': 'Alle Fächer aus einer Hand. Das Kind und Sie müssen sich nicht auf unterschiedliche Lehrkräfte einstellen. Hiermit garantieren wir, dass eine einzige Lehrkraft den Schüler in allen angefragten Fächern fördern kann und entsprechende Kompetenzen mitbringt. Das sorgt für ein noch vertrauteres Verhältnis zwischen Tutor und Lernendem und spart viel Zeit bei Absprachen und der Kommunikation.',
         'btnAddOnMale': 'Ihr Kind kommt besser mit einer männlichen Bezugsperson klar, kann sich ihr gegenüber besser öffnen, lernt mit ihr besser oder braucht dahingehend eine Vorbildfunktion? Mit diesem Add-On sichern wir Ihnen unter Berücksichtigung der vorausgesetzten Fach- und Sozialkompetenzen einen männlichen Nachhilfelehrer zu.',
         'btnAddOnFemale': 'Ihr Kind kommt besser mit einer weiblichen Bezugsperson klar, kann sich ihr gegenüber besser öffnen, lernt mit ihr besser oder braucht dahingehend eine Vorbildfunktion?Mit diesem Add-On sichern wir Ihnen unter Berücksichtigung der vorausgesetzten Fach- und Sozialkompetenzen eine weibliche Nachhilfelehrerin zu.',
         'btnContractLarge': 'Langfristige Förderung, wenn mehr als nur ein Schuljahr kontinuierlich gefördert werden soll. Für alle, die sich einen hervorragenden persönlichen Bezug zu einem langfristigen Lernpartner wünschen.',
         'btnContractMiddle': 'Sinnvollste Wahl für eine gründliche Förderung. Wir begleiten durch das ganze Schuljahr und arbeiten nachhaltig an guten Noten. Unser bisheriger Elternfavorit.',
         'btnContractSmall': 'Die Nachhilfe kann jederzeit zum Folgetag gekündigt werden. Für alle, die 100% flexibel sein möchten. Auch geeignet für Prüfungsvorbereitung oder Schulabgänger. Bei diesem Modell fällt ausnahmsweise eine Anmeldegebühr von 69,99 € an. Diese wird Ihnen nach 6 Monaten Vertragsverhältnis jedoch wieder gutgeschrieben.',
         'btnUnitLarge': 'Für jene, mit großen Schwierigkeiten in einem oder mehreren Fächern. Für schnelle Erfolge oder für Kinder mit einem langsamen Lerntempo, die viel Betreuung benötigen. Insbesondere geeignet für Prüfungsvorbereitung.',
         'btnUnitMiddle': 'Für alle mit einem ernsten Verbesserungswunsch in einem Fach. 2 Einheiten geben genügend Zeit, um Lerninhalte nachhaltig zu vertiefen.',
         'btnUnitSmall': 'Für alle, die ihre Note halten oder moderat verbessern möchten. Erfordert eine hohe Eigeninitiative, um auch außerhalb der Nachhilfestunde Aufgaben zu erledigen.',
         'btnTutoringOnline': 'Für maximale zeitliche und örtliche Flexibilität. Insbesondere für Sprachförderung und mediale Förderung geeignet. Ideal in den Alltag eines älteren Schülers integrierbar. Erhöht die Wahrscheinlichkeit, dass alle Wünsche zu Merkmalen der Lehrkraft erfüllt werden.',
         'btnTutoringHybrid': 'Das Beste aus beiden Welten. Mit allen Vorteilen aus Online- und Vor-Ort-Unterricht. Jeder zweite Unterricht findet bei Ihnen zuhause statt..',
         'btnTutoringAtHome': 'Die Förderung findet bei Ihnen zu Hause in gewohnter Umgebung statt. Ohne Fahrtaufwand für Sie. Für alle, die maximale persönliche Nähe vorziehen.'
     };
     	const popup = document.getElementById('popupInformation');
	const background = document.getElementById('background');
	const tripperClosePopupInformation = document.getElementById('tripperClosePopupInformation');
	const textPopupInformation = document.getElementById('textPopupInformation');
	const addOnPremiumTutor  = document.getElementById('addOnPremiumTutor');
	const addOnExperiencedTutor  = document.getElementById('addOnExperiencedTutor');
	const addOnMale  = document.getElementById('addOnMale');
	const addOnFemale  = document.getElementById('addOnFemale');
	var tutoring = document.querySelectorAll('input[name="tutoring"]');
	var unit = document.querySelectorAll('input[name="unit"]');
	var contract = document.querySelectorAll('input[name="contract"]');
	const addOnAllRoundTutor = document.getElementById('addOnAllRoundTutor');  
	const addOnContractBreak = document.getElementById('addOnContractBreak');
	const addTandemLesson = document.getElementById('addTandemLesson');
	const subjectMathematics = document.getElementById('subjectMathematics');
	const subjectGerman = document.getElementById('subjectGerman');
	const subjectEnglish = document.getElementById('subjectEnglish');
	const subjectFrench = document.getElementById('subjectFrench');
	const subjectLatin = document.getElementById('subjectLatin');
	const subjectItalian = document.getElementById('subjectItalian');
	const subjectSpanish = document.getElementById('subjectSpanish');
	const subjectPhysics = document.getElementById('subjectPhysics');
	const subjectChemistry = document.getElementById('subjectChemistry');
	const subjectBiology = document.getElementById('subjectBiology');
	const subjectGeography = document.getElementById('subjectGeography');
	const subjectHistory = document.getElementById('subjectHistory');
	const subjectSocialStudies = document.getElementById('subjectSocialStudies');
	const subjectComputerScience = document.getElementById('subjectComputerScience');
	const subjectPhysicalEducation = document.getElementById('subjectPhysicalEducation');
	const subjectEconomics = document.getElementById('subjectEconomics');
	const subjectOther = document.getElementById('subjectOther');
	const checkboxes = document.querySelectorAll('[type="checkbox"]');
	const radioBoxes = document.querySelectorAll('[type="radio"]');
	const textUnitSmall = document.querySelectorAll('.text-checkbox-unitsmall');
	const textUnitMiddle = document.querySelectorAll('.text-checkbox-unit-middle');
	const textUnitLarge = document.querySelectorAll('.text-checkbox-unit-large');
	const lessonValueGerman = 0;
	const lessonValueEnglish = 0;
	const lessonValueMathematics = 0.6;
	const lessonValueFrench = 1.2;
	const lessonValueLatin = 1.4;
	const lessonValueSpanish = 0.8;
	const lessonValueItalian = 1.2;
	const lessonValuePhysics = 1.2;
	const lessonValueChemistry = 1.4;
	const lessonValueBiology = 0.8;
	const lessonValueGeography = 0.2;
	const lessonValueHistory = 0.2;
	const lessonValueSocialStudies = 0.2;
	const lessonValueComputerScience = 1.6;
	const lessonValuePhysicalEducation = 0.8;
	const lessonValueEconomics = 1.4;
	const lessonValueOther = 2.2;
	const lessonValueAllRoundTutor = 0.6;
        const lessonValueExperiencedTutor = 1.2;
	const lessonValueContractBreak = 1.5;
	const lessonValueTandemLesson = 10;
	const lessonValuePremiumTutor = 2.6;
	const lessonValueMale = 0.4;
	const lessonValueFemale = 0.4;
	const lessonValueTutoringAtHome = 5;
	const lessonValueTutoringHybrid = 3;
	const lessonValueUnitSmall = 6;
	const lessonValueUnitMiddle = 2.6;
	const lessonValueContractSmall = 6.8;
	const lessonValueContractMiddle = 2;
	const tutorSalaryValueAllRoundTutor = 0;
	const tutorSalaryValueExperiencedTutor = 0.45;
	const tutorSalaryValueContractBreak = 0;
	const tutorSalaryValueTandemLesson = 1.5; 
	const tutorSalaryValuePremiumTutor = 0.75;
	const tutorSalaryValueMale = 0;
	const tutorSalaryValueFemale = 0;
   
	var letterValueGerman = "AA";
	var letterValueEnglish = "BA";
	var letterValueMathematics = "CA";
	var letterValueFrench = "DA";
	var letterValueLatin = "EA";
	var letterValueSpanish = "FA";
	var letterValueItalian = "GA";
	var letterValuePhysics = "HA";
	var letterValueChemistry = "IA";
	var letterValueBiology = "JA";
	var letterValueGeography = "KA";
	var letterValueHistory = "LA";
	var letterValueSocialStudies = "MA";
	var letterValueComputerScience = "NA";
	var letterValuePhysicalEducation = "OA";
	var letterValueEconomics = "PA";
	var letterValueOther = "QA";
	var letterValueAllRoundTutor = "DA";
	var letterValueExperiencedTutor = "QA";
	var letterValueContractBreak = "EB";
	var letterValueTandemLesson = "FA";
	var letterValuePremiumTutor = "MA";
	var letterValueMale = "BA";
	var letterValueFemale = "CA";
	var letterValueTutoringAtHome = "AA";
	var letterValueTutoringHybrid = "BB";
	var letterValueTutoringOnline = "CB";
	var letterValueUnitSmall = "FB";
	var letterValueUnitMiddle = "DB";
	var letterValueUnitLarge = "BB";
	var letterValueContractSmall = "CA";
	var letterValueContractMiddle = "BA";
	var letterValueContractLarge = "AA";
 //show "Mehr Infos" Popup
         Object.keys(buttonTexts).forEach(buttonId => {
             const button = document.getElementById(buttonId);
             button.addEventListener('click', () => {
                 background.style.display = 'block';
                 popup.style.display = 'block';
                 textPopupInformation.textContent = buttonTexts[buttonId];
             });
         });
 
         background.addEventListener('click', () => {
             popup.style.display = 'none';
             background.style.display = 'none';
         });
 
         tripperClosePopupInformation.addEventListener('click', () => {
             popup.style.display = 'none';
             background.style.display = 'none';
         });
	 //change event 
	function changeUpdateElement(elements) {
		elements.forEach(element => {
			element.addEventListener('change', updateElement);
		});
	}
	changeUpdateElement(checkboxes);
        changeUpdateElement(radioBoxes);  
	function isCondition1Met(baseCode) {
		return baseCode.substr(2, 2) === "0A";
	}
	function isCondition2Met(baseCode) {
		return baseCode.substr(4, 2) === "0A";
	}
	function isCondition3Met(baseCode) {
		return baseCode.substr(6, 2) === "0A";
	}
	function isCondition4Met(baseCode) {
		return baseCode.substr(18, 2) === "0A";
	}
	function isCondition5Met(baseCode) {
		return baseCode.substr(20, 2) === "0A";
	}
	function isCondition6Met(baseCode) {
		return baseCode.substr(22, 2) === "0A";
	}
	function isCondition7Met(baseCode) {
		return baseCode.substr(24, 2) === "0A";
	}
	function isCondition8Met(baseCode) {
		return baseCode.substr(26, 2) === "0A";
	}
	function isCondition9Met(baseCode) {
		return baseCode.substr(28, 2) === "0A";
	}
	function isCondition10Met(baseCode) {
		return baseCode.substr(30, 2) === "0A";
	}
	function isCondition11Met(baseCode) {
		return baseCode.substr(32, 2) === "0A";
	}
	function isCondition12Met(baseCode) {
		return baseCode.substr(34, 2) === "0A";
	}
	function isCondition13Met(baseCode) {
		return baseCode.substr(36, 2) === "0A";
	}
	function isCondition14Met(baseCode) {
		return baseCode.substr(38, 2) === "0A";
	}
	function isCondition15Met(baseCode) {
		return baseCode.substr(40, 2) === "0A";
	}
	function updateElement() {
		let baseLessonPrice = 20;
		let baseCode = "B-0A0A0A-0A-0A-0A-0A0A0A0A0A0A0A0A0A0A0A0A";
		let baseTutorSalary = 12;
const maxSelectedSubject = document.getElementById('maxSelectedSubject');
const maxSelectedAddOnTutor = document.getElementById('maxSelectedAddOnTutor');
const maxSelectedAddOnGender = document.getElementById('maxSelectedAddOnGender');
function handleMaxSelectedCheckboxes(checkboxWrapper, maxCount) {
    const checkboxes = checkboxWrapper.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const checkedCount = checkboxWrapper.querySelectorAll('input[type=checkbox]:checked').length;
            if (checkedCount > maxCount) {
                const firstChecked = checkboxWrapper.querySelector('input[type=checkbox]:checked');
                firstChecked.checked = false;
                firstChecked.closest('label').style.opacity = '';
                firstChecked.closest('label').style.pointerEvents = '';
            }
            if (checkedCount === maxCount) {
                checkboxes.forEach(function(cb) {
                    if (!cb.checked) {
                        cb.disabled = true;
                        cb.closest('label').style.opacity = '0.5';
                        cb.closest('label').style.pointerEvents = 'none';
                    }
                });
            } else {
                checkboxes.forEach(function(cb) {
                    cb.disabled = false;
                    cb.closest('label').style.opacity = '';
                    cb.closest('label').style.pointerEvents = '';
                });
            }
        });
    });
}
handleMaxSelectedCheckboxes(maxSelectedSubject, 3);
handleMaxSelectedCheckboxes(maxSelectedAddOnTutor, 1);
handleMaxSelectedCheckboxes(maxSelectedAddOnGender, 1);
	
function updateSubject(element, lessonValue, letterValue) {
    const summaryId = element.id + 'Summary';
   const summaryField = document.getElementById(summaryId);
    if (element.checked) {
        baseLessonPrice += lessonValue; 
      summaryField.style.display = 'flex';
        if (isCondition1Met(baseCode )) {
            baseCode  = baseCode .substr(0, 2) + letterValue + baseCode .substr(4);
        } else if (isCondition2Met(baseCode )) {
            baseCode  = baseCode .substr(0, 4) + letterValue + baseCode .substr(6);
        } else if (isCondition3Met(baseCode )) {
            baseCode  = baseCode .substr(0, 6) + letterValue + baseCode .substr(8);
        }
    } else {
       summaryField.style.display = 'none';
    }
}
		
		updateSubject(subjectGerman, lessonValueGerman, letterValueGerman);
		updateSubject(subjectEnglish, lessonValueEnglish, letterValueEnglish);
		updateSubject(subjectMathematics, lessonValueMathematics, letterValueMathematics);
		updateSubject(subjectFrench, lessonValueFrench, letterValueFrench);
		updateSubject(subjectLatin, lessonValueLatin, letterValueLatin);
		updateSubject(subjectSpanish, lessonValueSpanish, letterValueSpanish);
		updateSubject(subjectItalian, lessonValueItalian, letterValueItalian);
		updateSubject(subjectPhysics, lessonValuePhysics, letterValuePhysics);
		updateSubject(subjectChemistry, lessonValueChemistry, letterValueChemistry);
		updateSubject(subjectBiology, lessonValueBiology, letterValueBiology);
		updateSubject(subjectGeography, lessonValueGeography, letterValueGeography);
		updateSubject(subjectHistory, lessonValueHistory, letterValueHistory);
		updateSubject(subjectSocialStudies, lessonValueSocialStudies, letterValueSocialStudies);
		updateSubject(subjectComputerScience, lessonValueComputerScience, letterValueComputerScience);
		updateSubject(subjectPhysicalEducation, lessonValuePhysicalEducation, letterValuePhysicalEducation);
		updateSubject(subjectEconomics, lessonValueEconomics, letterValueEconomics);
		updateSubject(subjectOther, lessonValueOther, letterValueOther);
		
	 
		 
		
function updateAddOn(element, lessonValue, letterValue, tutorSalaryValue) {
    const summaryId = element.id + 'Summary';
    const summaryField = document.getElementById(summaryId);
    if (element.checked) {
        baseLessonPrice += lessonValue; 
        baseTutorSalary += tutorSalaryValue;
        summaryField.style.display = 'flex';
        if (isCondition4Met(baseCode )) {
            baseCode  = baseCode .substr(0, 18) + letterValue + baseCode .substr(20);
        } else if (isCondition5Met(baseCode )) {
            baseCode  = baseCode .substr(0, 20) + letterValue + baseCode .substr(22);
        } else if (isCondition6Met(baseCode )) {
            baseCode  = baseCode .substr(0, 22) + letterValue + baseCode .substr(24);
        } else if (isCondition7Met(baseCode )) {
            baseCode  = baseCode .substr(0, 24) + letterValue + baseCode .substr(26);
        } else if (isCondition8Met(baseCode )) {
            baseCode  = baseCode .substr(0, 26) + letterValue + baseCode .substr(28);
        } else if (isCondition9Met(baseCode )) {
            baseCode  = baseCode .substr(0, 28) + letterValue + baseCode .substr(30);
        } else if (isCondition10Met(baseCode )) {
            baseCode  = baseCode .substr(0, 30) + letterValue + baseCode .substr(32);
        } else if (isCondition11Met(baseCode )) {
            baseCode  = baseCode .substr(0, 32) + letterValue + baseCode .substr(34);
        } else if (isCondition12Met(baseCode )) {
            baseCode  = baseCode .substr(0, 34) + letterValue + baseCode .substr(36);
        } else if (isCondition13Met(baseCode )) {
            baseCode  = baseCode .substr(0, 36) + letterValue + baseCode .substr(38);
        } else if (isCondition14Met(baseCode )) {
            baseCode  = baseCode .substr(0, 38) + letterValue + baseCode .substr(40);
        } else if (isCondition15Met(baseCode )) {
            baseCode  = baseCode .substr(0, 40) + letterValue + baseCode .substr(42);
        }
    } else {
        summaryField.style.display = 'none'; // Ausblenden, wenn die Checkbox nicht aktiviert ist
    }
}
		
		updateAddOn(addOnAllRoundTutor, lessonValueAllRoundTutor, letterValueAllRoundTutor, tutorSalaryValueAllRoundTutor);
		updateAddOn(addOnExperiencedTutor, lessonValueExperiencedTutor, letterValueExperiencedTutor, tutorSalaryValueExperiencedTutor);
		updateAddOn(addOnContractBreak, lessonValueContractBreak, letterValueContractBreak, tutorSalaryValueContractBreak);
		updateAddOn(addTandemLesson, lessonValueTandemLesson, letterValueTandemLesson, tutorSalaryValueTandemLesson);
		updateAddOn(addOnPremiumTutor, lessonValuePremiumTutor, letterValuePremiumTutor, tutorSalaryValuePremiumTutor);
		updateAddOn(addOnMale, lessonValueMale, letterValueMale, tutorSalaryValueMale);
		updateAddOn(addOnFemale, lessonValueFemale, letterValueFemale, tutorSalaryValueFemale);
		



	tutoring.forEach(function(radio) {
			const tutoringAtHomeSummary = document.getElementById('tutoringAtHomeSummary');
			const tutoringHybridSummary = document.getElementById('tutoringHybridSummary');
			const tutoringOnlineSummary = document.getElementById('tutoringOnlineSummary');
				
			if (radio.checked) {
				if (radio.value == 'atHome') {
                                	tutoringAtHomeSummary.style.display = 'flex';
		      			tutoringHybridSummary.style.display = 'none';
		       			tutoringOnlineSummary.style.display = 'none';
					baseLessonPrice += lessonValueTutoringAtHome;
					textUnitSmall.forEach(element => {
						element.textContent = '1x90min';
					});
					textUnitMiddle.forEach(element => {
						element.textContent = '2x90min';
					});
					textUnitLarge.forEach(element => {
						element.textContent = '3x90min';
					});
					baseCode  = baseCode .substr(0, 9) + letterValueTutoringAtHome + baseCode .substr(11);
				} else if (radio.value == 'hybrid') {
					baseLessonPrice += lessonValueTutoringHybrid;
                              	        tutoringHybridSummary.style.display = 'flex';
					tutoringAtHomeSummary.style.display = 'none';
		        		tutoringOnlineSummary.style.display = 'none';
					textUnitSmall.forEach(element => {
						element.textContent = '2x45min';
					});
					textUnitMiddle.forEach(element => {
						element.textContent = '4x45min';
					});
					textUnitLarge.forEach(element => {
						element.textContent = '6x45min';
					});
					baseCode  = baseCode .substr(0, 9) + letterValueTutoringHybrid + baseCode .substr(11);
				} else if (radio.value == 'online') {
                              		tutoringOnlineSummary.style.display = 'flex';
					tutoringAtHomeSummary.style.display = 'none';
		        		tutoringHybridSummary.style.display = 'none';
					textUnitSmall.forEach(element => {
						element.textContent = '2x45min';
					});
					textUnitMiddle.forEach(element => {
						element.textContent = '4x45min';
					});
					textUnitLarge.forEach(element => {
						element.textContent = '6x45min';
					});
					baseCode  = baseCode .substr(0, 9) + letterValueTutoringOnline + baseCode .substr(11);
				}
			}
		});
		let multiplierUnit = 2;
		let multiplierContract = 1;
		let  setUpFee = 0;
		const textTotalMonthPrice = document.getElementById('textTotalMonthPrice');
		contract.forEach(function(radio) {
			const contractSmallSummary = document.getElementById('contractSmallSummary');
			const contractMiddleSummary = document.getElementById('contractMiddleSummary');
			const contractLargeSummary = document.getElementById('contractLargeSummary');
			if (radio.checked) {
				if (radio.value == 'small') {
                                	contractSmallSummary.style.display = 'flex';
					contractMiddleSummary.style.display = 'none';
					contractLargeSummary.style.display = 'none';
					baseLessonPrice += lessonValueUnitSmall;
					multiplierContract = 4;
					setUpFee = 69.99;
					baseCode  = baseCode .substr(0, 12) + letterValueUnitSmall + baseCode .substr(14);
				} else if (radio.value == 'middle') {
					contractSmallSummary.style.display = 'none';
                                        contractMiddleSummary.style.display = 'flex';
					contractLargeSummary.style.display = 'none';
					baseLessonPrice += lessonValueUnitMiddle;
					multiplierContract = 12;
					baseCode  = baseCode .substr(0, 12) + letterValueUnitMiddle + baseCode .substr(14);
				} else if (radio.value == 'large') {
                                	contractLargeSummary.style.display = 'flex';
					contractSmallSummary.style.display = 'none';
					contractMiddleSummary.style.display = 'none';
					multiplierContract = 24;
					baseCode  = baseCode .substr(0, 12) + letterValueUnitLarge + baseCode .substr(14);
				}
			}
		});
		unit.forEach(function(radio) {
			const unitSmallSummary = document.getElementById('unitSmallSummary');
			const unitMiddleSummary = document.getElementById('unitMiddleSummary');
			const unitLargeSummary = document.getElementById('unitLargeSummary');
			if (radio.checked) {
				if (radio.value == 'small') {
                                	unitSmallSummary.style.display = 'flex';
					unitMiddleSummary.style.display = 'none';
					unitLargeSummary.style.display = 'none';
					baseLessonPrice += lessonValueContractSmall;
					baseCode  = baseCode .substr(0, 15) + letterValueContractSmall + baseCode .substr(17);
				} else if (radio.value == 'middle') {
					unitSmallSummary.style.display = 'none';
                                	unitMiddleSummary.style.display = 'flex';
					unitLargeSummary.style.display = 'none';
					baseLessonPrice += lessonValueContractMiddle;
					multiplierUnit = 4;
					baseCode  = baseCode .substr(0, 15) + letterValueContractMiddle + baseCode .substr(17);
				} else if (radio.value == 'large') {
                                	unitLargeSummary.style.display = 'flex';
					unitMiddleSummary.style.display = 'none';
					unitSmallSummary.style.display = 'none';
					multiplierUnit = 6;
					baseCode  = baseCode .substr(0, 15) + letterValueContractLarge + baseCode .substr(17);
					
				}
			}
		});
	
		let totalMonthPrice = baseLessonPrice * multiplierUnit * 4.3333333333;
    
		//calculation months salary tutor
		let monthlyTutorCost = baseTutorSalary * multiplierUnit * 4.3333333333;
		
		//calculation LTV
		let valueTotalLtv = (totalMonthPrice - monthlyTutorCost) * multiplierContract + setUpFee;
	
		let totalTutorSalary = (baseTutorSalary / 45) * 60;
		 textTotalMonthPrice.textContent = totalMonthPrice.toFixed(2).replace('.', ',');
 
		//send value to form
		document.querySelector('.send-lessonPrice').value = baseLessonPrice.toFixed(2);
		document.querySelector('.send-totalLtv').value = valueTotalLtv.toFixed(2);
		document.querySelector('.send-totalTutorSalary').value = baseTutorSalary.toFixed(2);
		document.querySelector('.send-totalMonthPrice').value = totalMonthPrice.toFixed(2);
		document.querySelector('.send-codeGenerator').value = baseCode;
	}
	updateElement()
	
 }
 
 //start stepchange with enter
 document.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
       if (!nextBtn.classList.contains('disabled')) {
         nextBtn.click();
         event.preventDefault();
       }
     }
   });
   
   //end stepchange with enter
 
 
 //start Validation Phone Number
 function applyPhoneValidation(inputElement) {
 inputElement.addEventListener('focus', () => {
 if(inputElement.value === '') {
 inputElement.value = '+49';
 }
 });
 inputElement.addEventListener('input', () => checkInputPhone(inputElement));
 }
 
 function checkInputPhone(inputElement) {
 if (inputElement.value.substring(0, 3) !== '+49') {
 inputElement.value = '+49';
 inputElement.setSelectionRange(3,3);
 } else {
 // Remove any non-numeric characters after '+49'
 let numberPart = inputElement.value.substring(3).replace(/\D/g, '');
 if (numberPart.startsWith('0')) {
 numberPart = numberPart.substring(1);
 }
 inputElement.value = '+49' + numberPart;
 }
 }
 
 if (phoneNumberPayable) {
     applyPhoneValidation(phoneNumberPayable);
 }
 
 if (phoneNumberCustomer) {
     applyPhoneValidation(phoneNumberCustomer);
 }
 
         if (phoneNumberContactPerson) {
     applyPhoneValidation(phoneNumberContactPerson);
 }
         if (phoneNumberTutor) {
     applyPhoneValidation(phoneNumberTutor);
 }
 
 
 //end Validation Phone Number
 
 
 //start bday validation
 function applyDateInputFormat(inputElement) {
 inputElement.addEventListener('input', function(e) {
 let value = e.target.value;
 
 // remove all non-digit characters
 value = value.replace(/\D/g, '');
 
 // add dots after day and month
 if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
 if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);
 
 e.target.value = value;
 });
 }
 
 if (phoneNumberPayable) {
     applyDateInputFormat(bdayStudent);
 }
 
 if (contractTerminationCustomer) {
     applyDateInputFormat(contractTerminationCustomer);
 }
 if (bdayTutor) {
     applyDateInputFormat(bdayTutor);
 }
 
 //end bday validation
 
 //start iban validation
 function applyIbanValidation(inputElement, countryPrefix = 'DE') {
     inputElement.addEventListener('focus', function() {
         if (inputElement.value.trim() === '') {
             inputElement.value = countryPrefix;
         }
     });
 
     inputElement.addEventListener('input', function() {
         validateIbanInput(inputElement, countryPrefix);
     });
 }
 
 function validateIbanInput(inputElement, countryPrefix) {
     if (inputElement.value.substring(0, 2) !== countryPrefix) {
         inputElement.value = countryPrefix;
         inputElement.setSelectionRange(countryPrefix.length, countryPrefix.length);
     } else {
         // Remove any non-numeric characters after the country prefix
         let newValue = countryPrefix + inputElement.value.substring(2).replace(/\D/g, '');
         inputElement.value = newValue;
     }
 }
 if (phoneNumberPayable) {
     applyIbanValidation(ibanPayable);
 }
 //end iban validation
 
 
 
 //start form validation
 function isElementVisible(el) {
     if (!el || el === document.body) return true; // Wenn wir den Body erreichen, ist das Element sichtbar
     if (window.getComputedStyle(el, null).display === 'none') return false; // Das Element ist unsichtbar
     return isElementVisible(el.parentNode); // Überprüfen Sie das übergeordnete Element
 }
 
 
 function applyValidation(inputElement, emptyErrorMsg, invalidErrorMsg, pattern = null) {
     const errorMessageElement = document.createElement('span');
     const validSymbol = document.createElement('span');
     const invalidSymbol = document.createElement('span');
 
     validSymbol.textContent = '✓';
     validSymbol.style.color = '#589b32';
     validSymbol.style.display = 'none'; // Versteckt zu Beginn
     validSymbol.style.right = '1.2rem';
     validSymbol.style.top = '50%';
     validSymbol.style.transform = 'translateY(-50%)';
     validSymbol.style.zIndex = '3';
     validSymbol.style.position = 'absolute';
   
     invalidSymbol.textContent = '✗';
     invalidSymbol.style.color = '#9e367a';
     invalidSymbol.style.display = 'none'; // Versteckt zu Beginn
     invalidSymbol.style.position = 'absolute';
     invalidSymbol.style.right = '1.2rem';
     invalidSymbol.style.top = '50%';
     invalidSymbol.style.transform = 'translateY(-50%)';
     invalidSymbol.style.zIndex = '3';
 
     if (pattern !== null) {
         inputElement.setAttribute('pattern', pattern);
     }
     errorMessageElement.style.color = '#9d367a';
     errorMessageElement.style.display = 'none';
     errorMessageElement.style.marginTop = '-0.625rem';
     errorMessageElement.style.fontFamily = 'Roboto, sans-serif';
     errorMessageElement.style.fontSize = '0.8rem';
 
     
    let errorMessageWrapper;
 
 if (inputElement.type === 'radio') {
     // Für Radiobuttons
     errorMessageWrapper = inputElement.parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
 } else {
     // Für andere Eingabeelemente
     errorMessageWrapper = inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
 }
 
     const validationImageWrapper = inputElement.closest('.form_input-validation-image-wrapper');
 
     if (errorMessageWrapper) {
         errorMessageWrapper.appendChild(errorMessageElement);
     }
     if (validationImageWrapper) {
         validationImageWrapper.appendChild(validSymbol);
         validationImageWrapper.appendChild(invalidSymbol);
     }
 
    inputElement.addEventListener("change", function() {
     if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
         errorMessageElement.innerHTML = emptyErrorMsg;
         errorMessageElement.style.display = 'block';
         inputElement.style.borderColor = '#9e367a';
         inputElement.style.borderWidth = '1.5px';
         validSymbol.style.display = 'none';
         invalidSymbol.style.display = 'inline'; // Zeigt das X an
         shakeOnInvalid(inputElement);
     } else if (inputElement.value.trim() === '' && !inputElement.hasAttribute('required')) {
         // Setzen Sie den Standardzustand des Feldes zurück
         inputElement.style.borderColor = ''; // Oder setzen Sie es auf die ursprüngliche Farbe
         inputElement.style.borderWidth = ''; // Oder setzen Sie es auf die ursprüngliche Breite
         validSymbol.style.display = 'none';
         invalidSymbol.style.display = 'none';
         errorMessageElement.style.display = 'none';
     } else if (inputElement.checkValidity()) {
         inputElement.style.borderColor = '#589b32';
         inputElement.style.borderWidth = '1.5px';
         validSymbol.style.display = 'inline'; // Zeigt das Häkchen an
         invalidSymbol.style.display = 'none';
         errorMessageElement.style.display = 'none';
     } else {
         errorMessageElement.innerHTML = invalidErrorMsg;
         errorMessageElement.style.display = 'block';
         inputElement.style.borderColor = '#9e367a';
         inputElement.style.borderWidth = '1.5px';
         validSymbol.style.display = 'none';
         invalidSymbol.style.display = 'inline'; // Zeigt das X an
         shakeOnInvalid(inputElement);
     }     
 });
 
 
 // Funktion, um den Fehlerstatus zu überprüfen und entsprechend zu aktualisieren
 function checkRadioErrorStatus(group) {
     let radioButtons = group.querySelectorAll("input[type='radio']");
     let isSelected = Array.from(radioButtons).some(radio => radio.checked);
     let groupErrorMessageElement = group.nextElementSibling;
     if (!isSelected && groupErrorMessageElement && groupErrorMessageElement.classList.contains('form_input-error-message-wrapper') && isElementVisible(group)) {
         groupErrorMessageElement.innerHTML = emptyErrorMsg;
         groupErrorMessageElement.style.display = 'block';
         groupErrorMessageElement.style.color = '#9e367a';
         radioButtons.forEach(radio => {
             radio.style.borderColor = '#9e367a';
         });
     } else if (groupErrorMessageElement) {
         groupErrorMessageElement.style.display = 'none';
         groupErrorMessageElement.style.color = '';
         radioButtons.forEach(radio => {
             radio.style.borderColor = '';
         });
     }
 }
 
 // Event-Listener für den Next-Button
 if (nextBtn) {
     nextBtn.addEventListener('click', function() {
         if (nextBtn.classList.contains('disabled')) {
             // Überprüfen Sie, ob das Eingabefeld und seine übergeordneten Elemente sichtbar sind
             if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
                 errorMessageElement.innerHTML = emptyErrorMsg;
                 errorMessageElement.style.display = 'block';
                 inputElement.style.borderColor = '#9e367a';
                 inputElement.style.borderWidth = '1.5px';
                 validSymbol.style.display = 'none';
                 invalidSymbol.style.display = 'inline';
                 shakeOnInvalid(inputElement);
             } else {
                 let radioGroups = document.querySelectorAll(".form_item-input-bottom-gender");
                 radioGroups.forEach(checkRadioErrorStatus);
             }
         }
     });
 }
 
 // Event-Listener für Änderungen an Radio-Buttons
 let allRadioButtons = document.querySelectorAll(".form_item-input-bottom-gender input[type='radio']");
 allRadioButtons.forEach(radio => {
     radio.addEventListener('change', function() {
         let group = radio.closest('.form_item-input-bottom-gender');
         checkRadioErrorStatus(group);
     });
 });
 
 
 
 
 
 
 
 
 
 
 if (submitBtn) {
     submitBtn.addEventListener('click', function() {
          if (submitBtn.classList.contains('disabled')) {
         // Überprüfen Sie, ob das Eingabefeld und seine übergeordneten Elemente sichtbar sind
         if (inputElement.hasAttribute('required') && inputElement.value.trim() === '' && isElementVisible(inputElement)) {
             errorMessageElement.innerHTML = emptyErrorMsg;
             errorMessageElement.style.display = 'block';
             inputElement.style.borderColor = '#9e367a';
             inputElement.style.borderWidth = '1.5px';
             validSymbol.style.display = 'none';
             invalidSymbol.style.display = 'inline'; // Zeigt das X an
             shakeOnInvalid(inputElement);
         }
     }
     });
 }
 
 
     validationElements[inputElement.id] = {
         validSymbol: validSymbol,
         invalidSymbol: invalidSymbol,
         errorMessageElement: errorMessageElement
     };
   
 }
 
 
 
 
 
 const specificElements = [];
 
 if (zipCodeTeachingLocation) {
   specificElements.push({
     element: zipCodeTeachingLocation,
     pattern: '\\d+',
     invalidErrorMsg: 'Bitte geben Sie eine gültige PLZ ein.'
   });
 }
 
 if (bdayStudent) {
   specificElements.push({
     element: bdayStudent,
     pattern: '^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$',
     invalidErrorMsg: 'Bitte geben Sie ein gültiges Geburtsdatum ein.'
   });
 }
 
 if (emailPayable) {
   specificElements.push({
     element: emailPayable,
     pattern: '^\\S+@\\S+\\.\\S+$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
   });
 }
 
 if (phoneNumberPayable) {
   specificElements.push({
     element: phoneNumberPayable,
     pattern: '^\\+49[1-9]\\d{4,}$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
   });
 }
 
 if (emailCustomer) {
   specificElements.push({
     element: emailCustomer,
     pattern: '^\\S+@\\S+\\.\\S+$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
   });
 }
 
 if (phoneNumberCustomer) {
   specificElements.push({
     element: phoneNumberCustomer,
     pattern: '^\\+49[1-9]\\d{4,}$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
   });
 }
 
         if (phoneNumberContactPerson) {
   specificElements.push({
     element: phoneNumberContactPerson,
     pattern: '^\\+49[1-9]\\d{4,}$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige Telefonnummer ein.'
   });
 }
 
 if (emailContactPerson) {
   specificElements.push({
     element: emailContactPerson,
     pattern: '^\\S+@\\S+\\.\\S+$',
     invalidErrorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
   });
 }
 if (emailTutor) {
   specificElements.push({
     element: emailTutor,
     pattern: '^\\S+@\\S+\\.\\S+$',
     invalidErrorMsg: 'Bitte gib eine gültige E-Mail-Adresse ein.'
   });
 }
 
  if (availabilityTutor) {
   specificElements.push({
     element: availabilityTutor,
     pattern: '\\d+',
     invalidErrorMsg: 'Bitte gib eine Zahl ein.'
   });
 }
 
 
 if (couponCodeElement) {
     specificElements.push({
         element: couponCodeElement,
         pattern: Object.keys(couponCodes).map(code => couponCodes[code].regex.source).join("|"),
         invalidErrorMsg: 'Bitte geben Sie einen gültigen Gutscheincode ein.',
         validate: function(inputValue) {
             let isValid = false;
             let message = '';
             Object.values(couponCodes).forEach(code => {
                 if (code.regex.test(inputValue)) {
                     isValid = true;
                     message = code.message;
                 }
             });
             return { isValid, message };
         }
     });
 }
 
 
 
 allInputs.forEach(inputElement => {
     // Überprüfen, ob das aktuelle Element in der Liste der spezifischen Elemente ist
     if (!specificElements.some(e => e.element === inputElement)) {
         let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
         let invalidErrorMsg = 'Ungültige Eingabe.';
         applyValidation(inputElement, emptyErrorMsg, invalidErrorMsg);
     }
 });
 
 // Jetzt wenden Sie die applyValidation-Funktion mit benutzerdefinierten Mustern und Fehlermeldungen auf die spezifischen Elemente an
 specificElements.forEach(({element, pattern, invalidErrorMsg}) => {
     let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
     applyValidation(element, emptyErrorMsg, invalidErrorMsg, pattern);
 });
 
 //start function shake
 function shakeOnInvalid(input) {
 let originalPosition = input.getBoundingClientRect().left;
 input.style.transition = 'transform 0.1s ease-in-out';
 input.style.transform = 'translateX(3px)';
 setTimeout(function() {
 input.style.transform = '';
 }, 100);
 }
 //end function shake
 
 //end form validation
 
 
 
 const formItems = document.getElementsByClassName("form_item-input-wrapper-tab");
 const regForm = document.getElementById("regForm");
 
 let currentTab = 0;
 
 if (nextBtn) {
     nextBtn.classList.add("disabled");
     nextBtn.addEventListener("click", function() {
         nextPrev(1);
     });
 }
 
 if (prevBtn) {
     prevBtn.addEventListener("click", function() {
         nextPrev(-1);
     });
 }
 
 showTab(currentTab);
 
 function showTab(n) {
     formItems[n].style.display = "block";
 
     const inputs = formItems[n].querySelectorAll("input, select");
     for (let i = 0; i < inputs.length; i++) {
         inputs[i].addEventListener("input", validateForm);
     }
 
     validateForm();
    
     if (n === 0) {
         if (prevBtn) prevBtn.style.display = "none";
     } else {
         if (prevBtn) prevBtn.style.display = "flex";
     }
     
     if (n === (formItems.length - 1)) {
         if (submitBtn) submitBtn.style.display = "block";
         if (nextBtn) nextBtn.style.display = "none";
     } else {
         if (submitBtn) submitBtn.style.display = "none";
         if (nextBtn) nextBtn.style.display = "flex";
     }
 
     const currentStepElem = document.getElementById("currentStep");
     const totalStepsElem = document.getElementById("totalSteps");
     if (currentStepElem) currentStepElem.textContent = n + 1;
     if (totalStepsElem) totalStepsElem.textContent = formItems.length;
 
     fixStepIndicator(n);
 }
 
 function nextPrev(n) {
     if (nextBtn && n == 1 && !validateForm()) {
         nextBtn.classList.add("disabled");
         return false;
     } else if (nextBtn) {
         nextBtn.classList.remove("disabled");
     }
 
     formItems[currentTab].style.display = "none";
     currentTab = currentTab + n;
     if (currentTab >= formItems.length) {
         regForm.submit();
         return false;
     }
     showTab(currentTab);
 }
 
 
 function validateForm() {
  let valid = true;
 
     const inputs = formItems[currentTab].getElementsByTagName("input");
     for (let i = 0; i < inputs.length; i++) {
         if (inputs[i].hasAttribute("required") && (!inputs[i].checkValidity() || inputs[i].value == "")) {
             inputs[i].className += " invalid";
             valid = false;
         }
     }
 
         // Validierung für Radio-Buttons
         const radios = formItems[currentTab].querySelectorAll("input[type='radio'][required]");
         let radioGroups = {};
         for (let j = 0; j < radios.length; j++) {
         let name = radios[j].getAttribute("name");
         radioGroups[name] = radioGroups[name] || [];
         radioGroups[name].push(radios[j]);
         }
         for (let groupName in radioGroups) {
         if (radioGroups.hasOwnProperty(groupName)) {
           let radioChecked = false;
           for (let k = 0; k < radioGroups[groupName].length; k++) {
             if (radioGroups[groupName][k].checked) {
               radioChecked = true;
               break;
             }
           }
           if (!radioChecked) {
             valid = false;
           }function showTab(n) {
     formItems[n].style.display = "block";
 
     const inputs = formItems[n].querySelectorAll("input, select");
     for (let i = 0; i < inputs.length; i++) {
         inputs[i].addEventListener("input", validateForm);
     }
 
     validateForm();
 
 if (valid) {
         if (nextBtn) nextBtn.classList.remove("disabled");
     } else {
         if (nextBtn) nextBtn.classList.add("disabled");
     }
 
     
     if (n === 0) {
         if (prevBtn) prevBtn.style.display = "none";
     } else {
         if (prevBtn) prevBtn.style.display = "flex";
     }
     
     if (n === (formItems.length - 1)) {
         if (submitBtn) submitBtn.style.display = "block";
         if (nextBtn) nextBtn.style.display = "none";
     } else {
         if (submitBtn) submitBtn.style.display = "none";
         if (nextBtn) nextBtn.style.display = "flex";
     }
 
     const currentStepElem = document.getElementById("currentStep");
     const totalStepsElem = document.getElementById("totalSteps");
     if (currentStepElem) currentStepElem.textContent = n + 1;
     if (totalStepsElem) totalStepsElem.textContent = formItems.length;
 
     fixStepIndicator(n);
 }valid
         }
         }
         
         // Validierung für Checkboxen
         const checkboxes = formItems[currentTab].querySelectorAll("input[type='checkbox'][required]");
         if (checkboxes.length > 0) {
         let checkboxChecked = false;
         for (let l = 0; l < checkboxes.length; l++) {
           if (checkboxes[l].checked) {
             checkboxChecked = true;
             break;
           }
         }
         if (!checkboxChecked) {
           valid = false;
         }
         }
         
         // Validierung für <select>-Felder
         const selects = formItems[currentTab].querySelectorAll("select[required]");
         for (let m = 0; m < selects.length; m++) {
         if (!selects[m].value) {
           selects[m].className += " invalid";
           valid = false;
         }
         }
if (configuratorForm && [0].includes(currentTab)) {
    // Validierung für Checkboxen
    const checkboxes = formItems[currentTab].querySelectorAll("input[type='checkbox']");
    let checkboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    // Prüfen, ob mindestens eine Checkbox ausgewählt wurde
    if (!checkboxChecked && checkboxes.length > 0) {
        valid = false;
    }
}
	 
if (configuratorForm && [1,2,3].includes(currentTab)) {
    // Validierung für Radio-Buttons
    const radios = formItems[currentTab].querySelectorAll("input[type='radio']");
    let radioGroups = {};
    // Gruppieren der Radio-Buttons nach ihrem Namen
    for (let j = 0; j < radios.length; j++) {
        let name = radios[j].getAttribute("name");
        radioGroups[name] = radioGroups[name] || [];
        radioGroups[name].push(radios[j]);
    }
    // Überprüfen, ob mindestens ein Radio-Button in jeder Gruppe ausgewählt wurde
    for (let groupName in radioGroups) {
        if (radioGroups.hasOwnProperty(groupName)) {
            let radioChecked = radioGroups[groupName].some(radio => radio.checked);
            if (!radioChecked && radioGroups[groupName].length > 0) {
                valid = false;
                break; // Sobald ein nicht ausgewähltes Radio gefunden wird, kann die Schleife abgebrochen werden
            }
        }
    }
}
if (applicationTutorForm && [1, 2].includes(currentTab)) {
    const buttons = formItems[currentTab].querySelectorAll("button");
    let choiceAdded = false;
    // Durchlaufen aller Buttons, um zu prüfen, ob einer den Text 'Fach entfernen' enthält
    buttons.forEach(button => {
        if (button.textContent === 'Fach entfernen') {
            choiceAdded = true;
        }
    });
    // Setzen Sie valid auf true, wenn mindestens ein Button mit dem Text 'Fach entfernen' gefunden wurde
    if (choiceAdded) {
        valid = true;
    } else {
        valid = false;
    }
}
 
 
 
 
     if (valid) {
         formItems[currentTab].className += " finish";
         if(nextBtn) {
             nextBtn.classList.remove("disabled");
         }
         if(submitBtn) {
             submitBtn.classList.remove("disabled");
         }
     } else {
         if(nextBtn) {
             nextBtn.classList.add("disabled");
         }
         if(submitBtn) {
             submitBtn.classList.add("disabled");
         }
     }
     return valid;
 }
 
 
 
 function fixStepIndicator(n) {
     for (let i = 0; i < formItems.length; i++) {
         formItems[i].className = formItems[i].className.replace(" active", "");
     }
     formItems[n].className += " active";
 }
 
 
 // Überwachen Sie den Radio-Button "ja" für Lernstörung
 const radioLearningDisorderJa = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='1']");
 const radioLearningDisorderNein = document.querySelector("input[type='radio'][name='trigger_learning-disorder'][value='2']");
 const containerLearningDisorder = document.getElementById("create-learning-disorder_student");
 
 if (radioLearningDisorderJa) {
     radioLearningDisorderJa.addEventListener("change", function() {
         if (radioLearningDisorderJa.checked) {
             createInputField(containerLearningDisorder, "infoText", "Welche Lernstörung?", "learning-disorder_student", "Lernstörung eingeben");
             validateForm();
         }
     });
 }
 
 if (radioLearningDisorderNein) {
     radioLearningDisorderNein.addEventListener("change", function() {
         removeInputField("infoText", "learning-disorder_student");
         validateForm();
     });
 }
 
 const radioBillingAddressJa = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='1']");
 const radioBillingAddressNein = document.querySelector("input[type='radio'][name='trigger_billing-address'][value='2']");
 
 const billingDetails = [
 { containerId: "create-street-name_billing-address", labelId: "streetNameLabel", labelText: "Straßenname ", inputId: "street-name_billing-address", inputPlaceholder: "Straßenname eingeben" },
 { containerId: "create-house-number_billing-address", labelId: "houseNumberLabel", labelText: "Hausnummer ", inputId: "house-number_billing-address", inputPlaceholder: "Hausnummer eingeben" },
 { containerId: "create-zip-code_billing-address", labelId: "zipCodeLabel", labelText: "PLZ ", inputId: "zip-code_billing-address", inputPlaceholder: "PLZ eingeben" },
 { containerId: "create-city-name_billing-address", labelId: "cityNameLabel", labelText: "Ort ", inputId: "city-name_billing-address", inputPlaceholder: "Ort eingeben" }
 ];
 
 if (radioBillingAddressNein) {
     radioBillingAddressNein.addEventListener("change", function() {
         if (radioBillingAddressNein.checked) {
             billingDetails.forEach(detail => {
                 const container = document.getElementById(detail.containerId);
                 if (container) {
                     createInputField(container, detail.labelId, detail.labelText, detail.inputId, detail.inputPlaceholder);
                 }
             });
             validateForm();
         }
     });
 }
 
 if (radioBillingAddressJa) {
     radioBillingAddressJa.addEventListener("change", function() {
         billingDetails.forEach(detail => {
             removeInputField(detail.labelId, detail.inputId);
         });
         validateForm();
     });
 
 
 function createInputField(container, labelId, labelText, inputId, inputPlaceholder) {
 const textDiv = document.createElement("div");
 textDiv.className = "form_label";
 textDiv.id = labelId;
 textDiv.textContent = labelText;
 textDiv.style.marginBottom = "0.6rem"; 
 
 const asteriskSpan = document.createElement("span");
 asteriskSpan.className = "text-span_required";
 asteriskSpan.textContent = "*";
 textDiv.appendChild(asteriskSpan);
 
 container.parentNode.insertBefore(textDiv, container);
 
 const inputFeld = document.createElement("input");
 inputFeld.type = "text";
 inputFeld.id = inputId;
 inputFeld.className = "form_input";
 inputFeld.placeholder = inputPlaceholder;
 inputFeld.required = true;
 inputFeld.name = inputId;
   
 container.appendChild(inputFeld);
 inputFeld.addEventListener("input", validateForm);
  
   let emptyErrorMsg = 'Dieses Feld muss ausgefüllt werden.';
     let invalidErrorMsg = 'Ungültige Eingabe.';
     applyValidation(inputFeld, emptyErrorMsg, invalidErrorMsg);
 }
 
 function removeInputField(labelId, inputId) {
     const vorhandenerText = document.getElementById(labelId);
     if (vorhandenerText) {
         vorhandenerText.parentNode.removeChild(vorhandenerText);
     }
 
     const vorhandenesInputFeld = document.getElementById(inputId);
     if (vorhandenesInputFeld) {
         // Entfernen Sie auch die zugehörigen Validierungselemente
         const elements = validationElements[inputId];
         if (elements) {
             elements.validSymbol.remove();
             elements.invalidSymbol.remove();
             elements.errorMessageElement.remove();
             delete validationElements[inputId];
         }
 
         vorhandenesInputFeld.parentNode.removeChild(vorhandenesInputFeld);
     }
 }
 
 }
