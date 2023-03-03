document.addEventListener("DOMContentLoaded", function() {
	var mycustomradiobox1 = document.querySelectorAll('input[name="teachingLocation"]');
	var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');
	var popupAnswer1 = document.querySelectorAll('.div-summary.mathe')[0];
	var popupAnswer2 = document.querySelectorAll('.div-summary.deutsch')[0];
	var popupAnswer3 = document.querySelectorAll('.div-summary.englisch')[0];
	var popupAnswer23 = document.querySelectorAll('.div-summary.zuhause')[0];
	var popupAnswer24 = document.querySelectorAll('.div-summary.hybrid')[0];
	var popupAnswer25 = document.querySelectorAll('.div-summary.online')[0];
	var popupAnswer26 = document.querySelectorAll('.div-summary.eineinheit')[0];
	var popupAnswer27 = document.querySelectorAll('.div-summary.zweieinheiten')[0];
	var popupAnswer28 = document.querySelectorAll('.div-summary.dreieinheiten')[0];
	var mycustomcheckbox34 = document.querySelectorAll('input[name="subjectMathe"]');
	var mycustomcheckbox35 = document.querySelectorAll('input[name="subjectDeutsch"]');
	var mycustomcheckbox36 = document.querySelectorAll('input[name="subjectEnglisch"]');





	function isCondition1Met(codegenerator) {
		return codegenerator.substr(0, 2) === "0A";
	}

	function isCondition2Met(codegenerator) {
		return codegenerator.substr(2, 2) === "0A";
	}

	function isCondition3Met(codegenerator) {
		return codegenerator.substr(4, 2) === "0A";
	}


	function calculation() {
		var totalBudget = 16.49;
		var codegenerator = "0A0A0A0XXXXXX0A0A0A0A0A0A0A0A";

		// zuerst alle Pop-up-Elemente ausblenden
		popupAnswer1.style.display = "none";
		popupAnswer2.style.display = "none";
		popupAnswer3.style.display = "none";
		popupAnswer23.style.display = "none";
		popupAnswer24.style.display = "none";
		popupAnswer25.style.display = "none";
		popupAnswer26.style.display = "none";
		popupAnswer27.style.display = "none";
		popupAnswer28.style.display = "none";
	






		if (mycustomcheckbox34[0].checked) {
			totalBudget += 0.6;
			popupAnswer1.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "CA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "CA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "CA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox35[0].checked) {
			popupAnswer2.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "AA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "AA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "AA" + codegenerator.substr(6);
			}
		}
		if (mycustomcheckbox36[0].checked) {
			popupAnswer3.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "BA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "BA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "BA" + codegenerator.substr(6);
			}
		}

		mycustomradiobox1.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 4.2;
					codegenerator = codegenerator.substr(0, 6) + "CA" + codegenerator.substr(8);
					popupAnswer23.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 6) + "BA" + codegenerator.substr(8);
					popupAnswer24.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 6) + "AA" + codegenerator.substr(8);
					popupAnswer25.style.display = "block";
				}
			}
		});

		mycustomradiobox2.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.0;
					codegenerator = codegenerator.substr(0, 10) + "EA" + codegenerator.substr(12);
					popupAnswer26.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.6;
					codegenerator = codegenerator.substr(0, 10) + "CA" + codegenerator.substr(12);
					popupAnswer27.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 10) + "AA" + codegenerator.substr(12);
					popupAnswer28.style.display = "block";
				}
			}
		});

		
		

		totalBudget = totalBudget.toFixed(2).replace(".", ",");
		$("[bloc=budget]").text(totalBudget);
		$("[bloc=codegenerator]").text(codegenerator);
	}

	mycustomcheckbox34[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox35[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox36[0].addEventListener("change", function() {
		calculation();
	});

	mycustomradiobox1.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});

	mycustomradiobox2.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});


	// Aufruf der Funktion calculation() beim Laden der Seite
	calculation();

	for (var i = 0; i < myCheckboxes.length; i++) {
		mycustomradiobox1[i].addEventListener('change', function() {
			mycustomradiobox2.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");

				}
			});
		});
	}
});
