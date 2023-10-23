function addHiddenInputForCheckbox(checkboxElem, hiddenInputValue, hiddenInputName) {
    const form = document.getElementById("request_customer");

    if (checkboxElem && form) {
        checkboxElem.addEventListener("change", function() {
            if (checkboxElem.checked) {
                const hiddenInput = document.createElement("input");
                hiddenInput.setAttribute("type", "hidden");
                hiddenInput.setAttribute("id", checkboxElem.id + "_hidden"); // Wir fügen "_hidden" zur Checkbox-ID hinzu, um eine eindeutige ID für das versteckte Eingabefeld zu erhalten.
                hiddenInput.setAttribute("name", hiddenInputName);
                hiddenInput.setAttribute("value", hiddenInputValue);

                // Füge das Eingabefeld dem Formular hinzu
                form.appendChild(hiddenInput);
            } else {
                let existingHiddenInput = document.getElementById(checkboxElem.id + "_hidden");
                if (existingHiddenInput) {
                    form.removeChild(existingHiddenInput);
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    addHiddenInputForCheckbox(document.getElementById("subjectMathe"), "Mathe", "Fach1");
    addHiddenInputForCheckbox(document.getElementById("subjectDeutsch"), "Deutsch", "Fach2");
    addHiddenInputForCheckbox(document.getElementById("subjectEnglisch"), "Englisch", "Fach3");
    addHiddenInputForCheckbox(document.getElementById("subjectFranzoesisch"), "Französich", "Fach4");
    addHiddenInputForCheckbox(document.getElementById("subjectSpanisch"), "Spanisch", "Fach5");
	addHiddenInputForCheckbox(document.getElementById("subjectPhysik"), "Physik", "Fach6");
    addHiddenInputForCheckbox(document.getElementById("subjectItalienisch"), "Italienisch", "Fach7");
    addHiddenInputForCheckbox(document.getElementById("subjectChemie"), "Chemie", "Fach8");
    addHiddenInputForCheckbox(document.getElementById("subjectBiologie"), "Biologie", "Fach9");                                                                                
	addHiddenInputForCheckbox(document.getElementById("subjectGeografie"), "Geografie", "Fach10");                                                                                         
	addHiddenInputForCheckbox(document.getElementById("subjectGeschichte"), "Geschichte", "Fach11");                                                                                       
	addHiddenInputForCheckbox(document.getElementById("subjectSozialkunde"), "Sozialkunde", "Fach12");
	addHiddenInputForCheckbox(document.getElementById("subjectInformatik"), "Informatik", "Fach13");
	addHiddenInputForCheckbox(document.getElementById("subjectSport"), "Sport", "Fach14");
	addHiddenInputForCheckbox(document.getElementById("subjectWirtschaft"), "Wirtschaft", "Fach15");
	addHiddenInputForCheckbox(document.getElementById("subjectSonstiges"), "Sonstiges", "Fach16");



	addHiddenInputForCheckbox(document.getElementById("supportNachhilfe"), "Nachhilfe", "Support1");
	addHiddenInputForCheckbox(document.getElementById("supportPruefungsvorbereitung"), "Prüfungsvorbereitung", "Support2");
	addHiddenInputForCheckbox(document.getElementById("supportHausaufgabenbetreuung"), "Hausaufgabenbetreuung", "Support3");
	addHiddenInputForCheckbox(document.getElementById("supportEtwasAnderes"), "Etwas Anderes", "Support4");

	addHiddenInputForCheckbox(document.getElementById("continueTutor-1Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("TutorFemale-1Unit"), "Nachhilfelehrerin", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("TutorMale-1Unit"), "Nachhilfelehrer", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("oneTutor-1Unit"), "Allroundlehrkraft", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("nativSpeaker-1Unit"), "Muttersprachler", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("experiencedTutor-1Unit"), "Erfahrene Lehrkraft", "AddOn6");
	addHiddenInputForCheckbox(document.getElementById("premiumTutor-1Unit"), "Premium Lehrkraft", "AddOn7");

	addHiddenInputForCheckbox(document.getElementById("continueTutor-2Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("TutorFemale-2Unit"), "Nachhilfelehrerin", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("TutorMale-2Unit"), "Nachhilfelehrer", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("oneTutor-2Unit"), "Allroundlehrkraft", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("nativSpeaker-2Unit"), "Muttersprachler", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("experiencedTutor-2Unit"), "Erfahrene Lehrkraft", "AddOn6");
	addHiddenInputForCheckbox(document.getElementById("premiumTutor-2Unit"), "Premium Lehrkraft", "AddOn7");

	addHiddenInputForCheckbox(document.getElementById("continueTutor-3Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("TutorFemale-3Unit"), "Nachhilfelehrerin", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("TutorMale-3Unit"), "Nachhilfelehrer", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("oneTutor-3Unit"), "Allroundlehrkraft", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("nativSpeaker-3Unit"), "Muttersprachler", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("experiencedTutor-3Unit"), "Erfahrene Lehrkraft", "AddOn6");
	addHiddenInputForCheckbox(document.getElementById("premiumTutor-3Unit"), "Premium Lehrkraft", "AddOn7");


	addHiddenInputForCheckbox(document.getElementById("continueLesson-1Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("contractBreak-1Unit"), "Vertragspause", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("doubleStorage-1Unit"), "Doppelter Gutstundenspeicher", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("qualityAnalysis-1Unit"), "Erfolgssicherung", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("chatsupport-1Unit"), "Hausaufgaben Chatsupport", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("PickUpService-1Unit"), "Abholservice", "AddOn6");

	addHiddenInputForCheckbox(document.getElementById("continueLesson-2Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("contractBreak-2Unit"), "Vertragspause", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("doubleStorage-2Unit"), "Doppelter Gutstundenspeicher", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("qualityAnalysis-2Unit"), "Erfolgssicherung", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("chatsupport-2Unit"), "Hausaufgaben Chatsupport", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("PickUpService-2Unit"), "Abholservice", "AddOn6");

	addHiddenInputForCheckbox(document.getElementById("continueLesson-3Unit"), "Ohne AddOn", "AddOn1");
	addHiddenInputForCheckbox(document.getElementById("contractBreak-3Unit"), "Vertragspause", "AddOn2");
	addHiddenInputForCheckbox(document.getElementById("doubleStorage-3Unit"), "Doppelter Gutstundenspeicher", "AddOn3");
	addHiddenInputForCheckbox(document.getElementById("qualityAnalysis-3Unit"), "Erfolgssicherung", "AddOn4");
	addHiddenInputForCheckbox(document.getElementById("chatsupport-3Unit"), "Hausaufgaben Chatsupport", "AddOn5");
	addHiddenInputForCheckbox(document.getElementById("PickUpService-3Unit"), "Abholservice", "AddOn6");

});

