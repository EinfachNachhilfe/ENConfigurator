
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
const couponCode = document.getElementById('coupon-code');

const couponCodes = {
    "lernen2023": { regex: /^lernen2023$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "herbst4": { regex: /^herbst4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "schulstart4": { regex: /^schulstart4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "schulstartg4": { regex: /^schulstartg4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "schulstart1b4": { regex: /^schulstart1b4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "schulstartz4": { regex: /^schulstartz4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "schulstartm4": { regex: /^schulstartg4$/i, message: 'Sie erhalten 2 x 90 Minuten kostenlose Nachhilfe!' },
    "freund100": { regex: /^freund100$/i, message: 'Sie und Ihr Freund erhalten jeweils 100€ Gutschrift!' },
};

const couponCodeElement = document.getElementById('coupon-code');

if (configuratorForm) {
     const buttonTexts = {
        'btnAddTandemLesson': 'Text für Duo Teaching',
        'btnAddOnContractBreak': 'Text für Contract Break',
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
        'btnTutoringOnline': 'Für maximale zeitliche und örtliche Flexibilität. Insbesondere für Sprachförderung und mediale Förderung geeignet. Ideal in den Alltag eines älteren Schülers integrierbar.',
        'btnTutoringHybrid': 'Das Beste aus beiden Welten. Mit allen Vorteilen aus Online- und Vor-Ort-Unterricht. Jeder zweite Unterricht findet bei Ihnen zuhause statt..',
        'btnTutoringAtHome': 'Die Förderung findet bei Ihnen zu Hause in gewohnter Umgebung statt. Ohne Fahrtaufwand für Sie. Für alle, die maximale persönliche Nähe vorziehen.'
    };

        const popup = document.getElementById('popupInformation');
        const background = document.getElementById('background');
        const tripperClosePopupInformation = document.getElementById('tripperClosePopupInformation');
        const textPopupInformation = document.getElementById('textPopupInformation');
        const customCheckboxInputSubject = document.querySelectorAll('.custom-checkbox-input-subject');
        const customRadioInputTutoring = document.querySelectorAll('.custom-radio-input.tutoring');
        const customRadioInputUnit = document.querySelectorAll('.custom-radio-input.unit');
        const customRadioInputContract = document.querySelectorAll('.custom-radio-input.contract');
        const customCheckboxInputTutor = document.querySelectorAll('.custom-checkbox-input-tutor');
        const customCheckboxInputTutorExclusivePair1 = document.querySelectorAll('.custom-checkbox-input-tutor-exclusive-pair-1');
        const customCheckboxInputTutorExclusivePair2 = document.querySelectorAll('.custom-checkbox-input-tutor-exclusive-pair-2');
        const customCheckboxInputOther = document.querySelectorAll('.custom-checkbox-input-other');
        const addOnPremiumTutor  = document.getElementById('addOnPremiumTutor');
        const addOnExperiencedTutor  = document.getElementById('addOnExperiencedTutor');
        const addOnMale  = document.getElementById('addOnMale');
        const addOnFemale  = document.getElementById('addOnFemale');
        const tutoringAtHome = document.getElementById('tutoringAtHome');
        const tutoringHybrid = document.getElementById('tutoringHybrid');
        const tutoringOnline = document.getElementById('tutoringOnline');
        const unitSmall = document.getElementById('unitSmall');
        const unitMiddle = document.getElementById('unitMiddle');
        const unitLarge = document.getElementById('unitLarge');
        const contractSmall = document.getElementById('contractSmall');
        const contractMiddle = document.getElementById('contractMiddle');
        const contractLarge = document.getElementById('contractLarge');
        const addOnAllRoundTutor = document.getElementById('addOnAllRoundTutor');  
        const addOnContractBreak = document.getElementById('addOnContractBreak');
        const addTandemLesson = document.getElementById('addTandemLesson');



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


//add "custom-input-clicked" class and set max. clickable fields
function manageSelection(elements, maxSelected, selectionClass, disabledClass, mode) {
    let selectedElements = [];

    elements.forEach(element => {
        if (!element.dataset.listenerAdded) {
            element.addEventListener('click', () => {
                if (element.classList.contains(selectionClass)) {
                    element.classList.remove(selectionClass);
                    selectedElements = selectedElements.filter(el => el !== element);
                } else {
                    if (selectedElements.length >= maxSelected) {
                        if (mode === 'deselect') {
                            // Automatisches Abwählen des ältesten ausgewählten Elements, wenn das Limit erreicht ist
                            const firstSelected = selectedElements.shift(); // Entfernt das erste Element
                            firstSelected.classList.remove(selectionClass);
                        }
                        // Für 'disable' Modus, keine Aktion hier, die Logik wird unten gehandhabt
                    }
                    if (selectedElements.length < maxSelected || mode === 'disable') {
                        selectedElements.push(element);
                        element.classList.add(selectionClass);
                    }
                }

                if (mode === 'disable') {
                    if (selectedElements.length >= maxSelected) {
                        elements.forEach(el => {
                            if (!selectedElements.includes(el)) {
                                el.classList.add(disabledClass);
                            }
                        });
                    } else {
                        elements.forEach(el => {
                            el.classList.remove(disabledClass);
                        });
                    }
                }

                console.log(`Aktuelle ausgewählte Elemente:`, selectedElements);
                validateForm(); // Stellen Sie sicher, dass diese Funktion definiert ist oder entfernen Sie diesen Aufruf
            });
            element.dataset.listenerAdded = "true";
        }
    });
}




manageSelection(customCheckboxInputSubject, 3, 'custom-input-clicked', 'disabled', 'disable' );    
manageSelection(customRadioInputTutoring, 1, 'custom-input-clicked', 'disabled', 'deselect');
manageSelection(customRadioInputUnit, 1, 'custom-input-clicked', 'disabled', 'deselect');
manageSelection(customRadioInputContract, 1, 'custom-input-clicked', 'disabled', 'deselect');
manageSelection(customCheckboxInputOther, 2, 'custom-input-clicked', 'disabled','disable' );
manageSelection(customCheckboxInputTutorExclusivePair1, 1, 'custom-input-clicked', 'disabled', 'disable' );
manageSelection(customCheckboxInputTutorExclusivePair2, 1, 'custom-input-clicked', 'disabled', 'disable' );
manageSelection(customCheckboxInputTutor, 5, 'custom-input-clicked', 'disable' );

   
let totalLessonPrice = 20;
let tutorSalary = 12;
    

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


function createInputField(elementOrElements, additionalLessonCost,additionalLessonTutorSalary, codeGenerator, defaultValue, area) {
  
    
    // Beobachtet Änderungen an den Klassen der Elemente
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const targetElement = mutation.target;
                handleClassChange(targetElement, additionalLessonCost,additionalLessonTutorSalary, codeGenerator, defaultValue, area);
            }
        });
    });

    // Unterstützt sowohl einzelne Elemente als auch Arrays von Elementen
    const elements = Array.isArray(elementOrElements) ? elementOrElements : [elementOrElements];

    // Überwacht jedes Element in der Liste
    elements.forEach(element => {
        observer.observe(element, { attributes: true });
    });
}

    
function handleClassChange(element, additionalLessonCost, additionalLessonTutorSalary, codeGenerator, defaultValue, area) {
    const inputFieldName = element.id;
    let inputField = document.getElementById('input_' + inputFieldName);
    let shouldUpdateCode = false; // Flag, um zu überprüfen, ob ein Update erforderlich ist
    let isAdding = false; // Flag, um zu bestimmen, ob wir hinzufügen oder entfernen

    if (element.classList.contains('custom-input-clicked')) {
        if (!inputField) {
            // Erstellt ein neues Eingabefeld, wenn es noch nicht existiert
            inputField = document.createElement('input');
            inputField.type = 'hidden';
            inputField.id = 'input_' + inputFieldName;
            inputField.name = inputFieldName;
            inputField.value = defaultValue;
            configuratorForm.appendChild(inputField);
            totalLessonPrice += additionalLessonCost;
            tutorSalary += additionalLessonTutorSalary;
            shouldUpdateCode = true; // Aktualisierung erforderlich, da ein Element ausgewählt wurde
            isAdding = true; // Wir fügen hinzu
        }
    } else {
        if (inputField) {
            // Entfernt das Eingabefeld, wenn es existiert und das Element nicht mehr ausgewählt ist
            configuratorForm.removeChild(inputField);
            totalLessonPrice -= additionalLessonCost;
            tutorSalary -= additionalLessonTutorSalary;
            shouldUpdateCode = true; // Aktualisierung erforderlich, da ein Element abgewählt wurde
            isAdding = false; // Wir entfernen
        }
    }

    if (shouldUpdateCode) {
        // Führt die erforderlichen Aktualisierungen durch, wenn Änderungen vorgenommen wurden
        calculateTotalCost();
        updateTextUnit();
        if (isAdding) {
            updateCodeGenerator(area, codeGenerator); // Fügt den Code hinzu, wenn ein Element ausgewählt wurde
        } else {
            removeCodeGenerator(area, codeGenerator); // Entfernt den Code, wenn ein Element abgewählt wurde
        }
    }
}



const textUnitSmall= document.getElementById('textUnitSmall');
const textUnitMiddle= document.getElementById('textUnitMiddle');
const textUnitLarge= document.getElementById('textUnitLarge');   
const textTotalMonthPrice = document.getElementById('textTotalMonthPrice');
const textTotalTutorSalary = document.getElementById('textTotalTutorSalary');
const textTotalLtv = document.getElementById('textTotalLtv');
const textLessonPrice = document.getElementById('textLessonPrice');
let discountUnitMiddle = document.getElementById('discountUnitMiddle');
let discountUnitLarge = document.getElementById('discountUnitLarge');





   
function updateTextUnit() {

    if (tutoringAtHome.classList.contains('custom-input-clicked')) {
        textUnitSmall.textContent = '1x90min';
        textUnitMiddle.textContent = '2x90min';
        textUnitLarge.textContent = '3x90min';
    }
        if (tutoringHybrid.classList.contains('custom-input-clicked')|| tutoringOnline.classList.contains('custom-input-clicked')) {
        textUnitSmall.textContent = '2x45min';
        textUnitMiddle.textContent = '4x45min';
        textUnitLarge.textContent = '6x45min';
    }
}

    
function calculateTotalCost() {
    let multiplierUnit = 2;
    let multiplierContract = 1;
    let  setUpFee = 0;

    
    if (unitMiddle.classList.contains('custom-input-clicked')) {
        multiplierUnit = 4;
        totalLessonPrice -= valueUnitSmall;

    } else if (unitLarge.classList.contains('custom-input-clicked')) {
        multiplierUnit = 6;
        totalLessonPrice -= valueUnitSmall;
    }

    if (contractSmall.classList.contains('custom-input-clicked')) {
        multiplierContract = 6;
        setUpFee = 69.99;
    } else if (contractMiddle.classList.contains('custom-input-clicked')) {
        multiplierContract = 12;
    } else if (contractLarge.classList.contains('custom-input-clicked')) {
        multiplierContract = 24;
    }

    //calculation months Price
    let totalMonthPrice = totalLessonPrice * multiplierUnit * 4.3333333333;
   
    //calculation months salary tutor
    let monthlyTutorCost = tutorSalary * multiplierUnit * 4.3333333333;
    
    //calculation LTV
    let valueTotalLtv = (totalMonthPrice - monthlyTutorCost) * multiplierContract;

    //calculate lowest Price
    let lowesttotalLessonPrice = 26;
    let lowestTotalMonthPrice = lowesttotalLessonPrice * multiplierUnit * 4.3333333333;

    
    //display lesson price
    textLessonPrice.textContent = totalLessonPrice.toFixed(2).replace('.', ','); 

       //display lowest Price
if (totalMonthPrice > lowestTotalMonthPrice) {
    // Wenn totalMonthPrice größer als lowestTotalMonthPrice ist, zeigen Sie lowestTotalMonthPrice an
    textTotalMonthPrice.textContent = totalMonthPrice.toFixed(2).replace('.', ',');
} else {
    // Andernfalls zeigen Sie totalMonthPrice an
    textTotalMonthPrice.textContent = lowestTotalMonthPrice.toFixed(2).replace('.', ',');
}

    //textTotalTutorSalary.textContent = tutorSalary.toFixed(2).replace('.', ',');
    //textTotalLtv.textContent = valueTotalLtv.toFixed(2).replace('.', ',');



document.querySelector('.send-lessonPrice').value = totalLessonPrice.toFixed(2).replace('.', ',');
document.querySelector('.send-totalLtv').value = valueTotalLtv.toFixed(2).replace('.', ',');
document.querySelector('.send-totalTutorSalary').value = tutorSalary.toFixed(2).replace('.', ',');
document.querySelector('.send-totalMonthPrice').value = totalMonthPrice.toFixed(2).replace('.', ',');


}
//show the TotalCost directly
calculateTotalCost();


const textCodeGenerator = document.getElementById('textCodeGenerator');
let baseCode = "A-0A0A0A-0A-0A-0A-0A0A0A0A0A0A0A0A0A0A0A0A";
    
const areaSubject = { start: 2, end: 8 };
const areaTutoring = { start: 9, end: 11 };
const areaUnit = { start: 12, end: 14 };
const areaContract = { start: 15, end: 17 };
const areaAddOn = { start: 18, end: 42 };

let codePositions = {};

    
let isEventListenerRegistered = false;

function updateCodeGenerator(area, codeToAdd) {
    console.log(`Update Code Generator aufgerufen, Bereich: ${JSON.stringify(area)}, CodeToAdd: '${codeToAdd}'`);
    let currentCodes = baseCode.substring(area.start, area.end);

    if (area === areaSubject || area === areaAddOn) {
        // Verhalten für areaSubject und areaAddOn
        let placeholderIndex = currentCodes.indexOf("0A");
        if (placeholderIndex !== -1) {
            let actualIndex = area.start + placeholderIndex;
            let newCodes = currentCodes.substring(0, placeholderIndex) + codeToAdd + currentCodes.substring(placeholderIndex + 2);
            baseCode = baseCode.substring(0, area.start) + newCodes + baseCode.substring(area.end);
            codePositions[codeToAdd] = actualIndex;
        }
    } else {
        // Verhalten für andere Bereiche
        baseCode = baseCode.substring(0, area.start) + codeToAdd + baseCode.substring(area.end);
        codePositions[codeToAdd] = area.start;
    }

    textCodeGenerator.textContent = baseCode;
    document.querySelector('.send-codeGenerator').value = baseCode;
}



function removeCodeGenerator(area, codeToRemove) {
    console.log(`Remove Code Generator aufgerufen, Bereich: ${JSON.stringify(area)}, CodeToRemove: '${codeToRemove}'`);

    // Überprüfen, ob der Bereich areaSubject oder areaAddOn ist
    if (area === areaSubject || area === areaAddOn) {
        if (codePositions[codeToRemove] !== undefined) {
            let actualIndex = codePositions[codeToRemove] - area.start;
            let currentCodes = baseCode.substring(area.start, area.end);
            let newCodes = currentCodes.substring(0, actualIndex) + "0A" + currentCodes.substring(actualIndex + 2);
            baseCode = baseCode.substring(0, area.start) + newCodes + baseCode.substring(area.end);
            delete codePositions[codeToRemove];
        }
    }


    textCodeGenerator.textContent = baseCode;
   document.querySelector('.send-codeGenerator').value = baseCode; 
}



textCodeGenerator.textContent = baseCode;

    
createInputField(subjectGerman, 0, 0, "AA", "Deutsch", areaSubject);
createInputField(subjectEnglish, 0, 0, "BA", "Englisch", areaSubject);
createInputField(subjectMathematics, 0.6, 0, "CA", "Mathematik", areaSubject);
createInputField(subjectFrench, 1.2, 0, "DA", "Französisch", areaSubject);
createInputField(subjectLatin, 1.4, 0, "EA", "Latein", areaSubject);
createInputField(subjectSpanish, 0.8, 0, "FA", "Spanisch", areaSubject);
createInputField(subjectItalian, 1.2, 0, "GA", "Italienisch", areaSubject);
createInputField(subjectPhysics, 1.2, 0, "HA", "Physik", areaSubject);
createInputField(subjectChemistry, 1.4, 0, "IA", "Chemie", areaSubject);
createInputField(subjectBiology, 0.8, 0, "JA", "Biologie", areaSubject);
createInputField(subjectGeography, 0.2, 0, "KA", "Geographie", areaSubject);
createInputField(subjectHistory, 0.2, 0, "LA", "Geschichte", areaSubject);
createInputField(subjectSocialStudies, 0.2, 0, "MA", "Sozialkunde", areaSubject);
createInputField(subjectComputerScience, 1.6, 0, "NA", "Informatik", areaSubject);
createInputField(subjectPhysicalEducation, 0.8, 0, "OA", "Sport", areaSubject);
createInputField(subjectEconomics, 1.4, 0, "PA", "Wirtschaft", areaSubject);
createInputField(subjectOther, 2.2, 0, "QA", "Sonstiges", areaSubject);
createInputField(tutoringOnline, 0, 0, "AB", "Online Nachhilfe", areaTutoring);
createInputField(tutoringHybrid, 2, 0, "BA", "Hybrid Nachhilfe", areaTutoring);
createInputField(tutoringAtHome, 4.2, 1.5, "CA", "Nachhilfe zu Hause", areaTutoring); 
createInputField(unitSmall, 6, 0, "FB", "Kleine Einheit", areaUnit);//totalLessonPrice wird oben addiert
createInputField(unitMiddle, 2.6, 0, "DB", "Mittlere Einheit", areaUnit);
createInputField(unitLarge, 0, 0, "BB", "Große Einheit", areaUnit);
createInputField(contractSmall, 6.8, 0, "CA", "0 Monate", areaContract);
createInputField(contractMiddle, 2, 0, "BA", "12 Monate", areaContract);
createInputField(contractLarge, 0, 0, "AA", "24 Monate", areaContract);
createInputField(addOnAllRoundTutor, 0.6, 0, "DA", "Allround-Nachhilfelehrer", areaAddOn);
createInputField(addOnExperiencedTutor, 1.2, 0.45, "QA", "Erfahrener Nachhilfelehrer", areaAddOn);
createInputField(addOnContractBreak, 1.5, 0, "EA", "Vertragspause", areaAddOn);
createInputField(addTandemLesson, 10, 1.5, "FA", "Tandem-Unterricht", areaAddOn);
createInputField(addOnPremiumTutor, 2.6, 0.75, "MA", "Premium Nachhilfelehrer", areaAddOn);
createInputField(addOnMale, 0.4, 0, "BA", "Nachhilfelehrer", areaAddOn);
createInputField(addOnFemale, 0.4, 0, "CA", "Nachhilfelehrerin", areaAddOn);
}
//end configurator



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
    let successMessageElement = document.createElement('span'); 
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

  successMessageElement.id = 'success_message';
  successMessageElement.style.color = '#589b32';
  successMessageElement.style.display = 'none';
  successMessageElement.style.marginTop = '-0.625rem';
  successMessageElement.style.fontFamily = 'Roboto, sans-serif';
  successMessageElement.style.fontSize = '0.8rem';
    
   let errorMessageWrapper;

if (inputElement.type === 'radio') {
    // Für Radiobuttons
    errorMessageWrapper = inputElement.parentNode.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
} else {
    // Für andere Eingabeelemente
    errorMessageWrapper = inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
     successMessageElement = inputElement.parentNode.parentNode.querySelector('.form_input-error-message-wrapper');
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
        successMessageElement.innerHTML = matchedPattern.message;
        successMessageElement.style.display = 'block';
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
    

if (configuratorForm && ![4, 5, 6].includes(currentTab)) {
    const hasClicked = formItems[currentTab].querySelectorAll(".custom-input-clicked").length > 0;
    if (hasClicked) {
        valid = true; // Setzen Sie valid auf true, wenn mindestens ein Element angeklickt wurde
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

