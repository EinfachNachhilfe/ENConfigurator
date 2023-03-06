document.addEventListener("DOMContentLoaded", function() {
	var mycustomradiobox1 = document.querySelectorAll('input[name="teachingLocation"]');
	var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');
	var mycustomradiobox3 = document.querySelectorAll('input[name="unit90"]');
	var mycustomradiobox4 = document.querySelectorAll('input[name="runtime-1Unit"]');
	var mycustomradiobox5 = document.querySelectorAll('input[name="runtime-2Unit"]');
	var mycustomradiobox6 = document.querySelectorAll('input[name="runtime-3Unit"]');
	var mycustomcheckbox1 = document.querySelectorAll('input[name="TutorFemale-1Unit"]');
	var mycustomcheckbox2 = document.querySelectorAll('input[name="TutorFemale-2Unit"]');
	var mycustomcheckbox3 = document.querySelectorAll('input[name="TutorFemale-3Unit"]');
	var mycustomcheckbox4 = document.querySelectorAll('input[name="TutorMale-1Unit"]');
	var mycustomcheckbox5 = document.querySelectorAll('input[name="TutorMale-2Unit"]');
	var mycustomcheckbox6 = document.querySelectorAll('input[name="TutorMale-3Unit"]');
	var mycustomcheckbox7 = document.querySelectorAll('input[name="oneTutor-1Unit"]');
	var mycustomcheckbox8 = document.querySelectorAll('input[name="oneTutor-2Unit"]');
	var mycustomcheckbox9 = document.querySelectorAll('input[name="oneTutor-3Unit"]');
	var mycustomcheckbox10 = document.querySelectorAll('input[name="nativSpeaker-1Unit"]');
	var mycustomcheckbox11 = document.querySelectorAll('input[name="nativSpeaker-2Unit"]');
	var mycustomcheckbox12 = document.querySelectorAll('input[name="nativSpeaker-3Unit"]');
	var mycustomcheckbox13 = document.querySelectorAll('input[name="experiencedTutor-1Unit"]');
	var mycustomcheckbox14 = document.querySelectorAll('input[name="experiencedTutor-2Unit"]');
	var mycustomcheckbox15 = document.querySelectorAll('input[name="experiencedTutor-3Unit"]');
	var mycustomcheckbox16 = document.querySelectorAll('input[name="premiumTutor-1Unit"]');
	var mycustomcheckbox17 = document.querySelectorAll('input[name="premiumTutor-2Unit"]');
	var mycustomcheckbox18 = document.querySelectorAll('input[name="premiumTutor-3Unit"]');
	var mycustomcheckbox19 = document.querySelectorAll('input[name="contractBreak-1Unit"]');
	var mycustomcheckbox20 = document.querySelectorAll('input[name="contractBreak-2Unit"]');
	var mycustomcheckbox21 = document.querySelectorAll('input[name="contractBreak-3Unit"]');
	var mycustomcheckbox22 = document.querySelectorAll('input[name="doubleStorage-1Unit"]');
	var mycustomcheckbox23 = document.querySelectorAll('input[name="doubleStorage-2Unit"]');
	var mycustomcheckbox24 = document.querySelectorAll('input[name="doubleStorage-3Unit"]');
	var mycustomcheckbox25 = document.querySelectorAll('input[name="qualityAnalysis-1Unit"]');
	var mycustomcheckbox26 = document.querySelectorAll('input[name="qualityAnalysis-2Unit"]');
	var mycustomcheckbox27 = document.querySelectorAll('input[name="qualityAnalysis-3Unit"]');
	var mycustomcheckbox28 = document.querySelectorAll('input[name="chatsupport-1Unit"]');
	var mycustomcheckbox29 = document.querySelectorAll('input[name="chatsupport-2Unit"]');
	var mycustomcheckbox30 = document.querySelectorAll('input[name="chatsupport-3Unit"]');
	var mycustomcheckbox31 = document.querySelectorAll('input[name="PickUpService-1Unit"]');
	var mycustomcheckbox32 = document.querySelectorAll('input[name="PickUpService-2Unit"]');
	var mycustomcheckbox33 = document.querySelectorAll('input[name="PickUpService-3Unit"]');
	var mycustomcheckbox34 = document.querySelectorAll('input[name="subjectMathe"]');
	var mycustomcheckbox35 = document.querySelectorAll('input[name="subjectDeutsch"]');
	var mycustomcheckbox36 = document.querySelectorAll('input[name="subjectEnglisch"]');
	var mycustomcheckbox37 = document.querySelectorAll('input[name="subjectFranzoesisch"]');
	var mycustomcheckbox38 = document.querySelectorAll('input[name="subjectLatein"]');
	var mycustomcheckbox39 = document.querySelectorAll('input[name="subjectItalienisch"]');
	var mycustomcheckbox40 = document.querySelectorAll('input[name="subjectSpanisch"]');
	var mycustomcheckbox41 = document.querySelectorAll('input[name="subjectPhysik"]');
	var mycustomcheckbox42 = document.querySelectorAll('input[name="subjectChemie"]');
	var mycustomcheckbox43 = document.querySelectorAll('input[name="subjectBiologie"]');
	var mycustomcheckbox44 = document.querySelectorAll('input[name="subjectGeografie"]');
	var mycustomcheckbox45 = document.querySelectorAll('input[name="subjectGeschichte"]');
	var mycustomcheckbox46 = document.querySelectorAll('input[name="subjectSozialkunde"]');
	var mycustomcheckbox47 = document.querySelectorAll('input[name="subjectInformatik"]');
	var mycustomcheckbox48 = document.querySelectorAll('input[name="subjectSport"]');
	var mycustomcheckbox49 = document.querySelectorAll('input[name="subjectWirtschaft"]');
	var mycustomcheckbox50 = document.querySelectorAll('input[name="subjectSonstiges"]');
	var mycustomcheckbox51 = document.querySelectorAll('input[name="supportNachhilfe"]');
	var mycustomcheckbox52 = document.querySelectorAll('input[name="supportPruefungsvorbereitung"]');
	var mycustomcheckbox53 = document.querySelectorAll('input[name="supportKlausurvorbereitung"]');
	var mycustomcheckbox54 = document.querySelectorAll('input[name="supportHausaufgabenbetreuung"]');
	var mycustomcheckbox55 = document.querySelectorAll('input[name="supportEtwasAnderes"]');
	var popupAnswer1 = document.querySelectorAll('.div-summary.mathe')[0];
	var popupAnswer2 = document.querySelectorAll('.div-summary.deutsch')[0];
	var popupAnswer3 = document.querySelectorAll('.div-summary.englisch')[0];
	var popupAnswer4 = document.querySelectorAll('.div-summary.franzoesisch')[0];
	var popupAnswer5 = document.querySelectorAll('.div-summary.latein')[0];
	var popupAnswer6 = document.querySelectorAll('.div-summary.italienisch')[0];
	var popupAnswer7 = document.querySelectorAll('.div-summary.spanisch')[0];
	var popupAnswer8 = document.querySelectorAll('.div-summary.physik')[0];
	var popupAnswer9 = document.querySelectorAll('.div-summary.chemie')[0];
	var popupAnswer10 = document.querySelectorAll('.div-summary.biologie')[0];
	var popupAnswer11 = document.querySelectorAll('.div-summary.geografie')[0];
	var popupAnswer12 = document.querySelectorAll('.div-summary.geschichte')[0];
	var popupAnswer13 = document.querySelectorAll('.div-summary.sozialkunde')[0];
	var popupAnswer14 = document.querySelectorAll('.div-summary.informatik')[0];
	var popupAnswer15 = document.querySelectorAll('.div-summary.sport')[0];
	var popupAnswer16 = document.querySelectorAll('.div-summary.wirtschaft')[0];
	var popupAnswer17 = document.querySelectorAll('.div-summary.sonstiges')[0];
	var popupAnswer18 = document.querySelectorAll('.div-summary.nachhilfe')[0];
	var popupAnswer19 = document.querySelectorAll('.div-summary.pruefungsvorbereitung')[0];
	var popupAnswer20 = document.querySelectorAll('.div-summary.klausurvorbereitung')[0];
	var popupAnswer21 = document.querySelectorAll('.div-summary.hausaufgabenbetreuung')[0];
	var popupAnswer22 = document.querySelectorAll('.div-summary.etwasanderes')[0];
	var popupAnswer23 = document.querySelectorAll('.div-summary.zuhause')[0];
	var popupAnswer24 = document.querySelectorAll('.div-summary.hybrid')[0];
	var popupAnswer25 = document.querySelectorAll('.div-summary.online')[0];
	var popupAnswer26 = document.querySelectorAll('.div-summary.eineinheit')[0];
	var popupAnswer27 = document.querySelectorAll('.div-summary.zweieinheiten')[0];
	var popupAnswer28 = document.querySelectorAll('.div-summary.dreieinheiten')[0];
	var popupAnswer29 = document.querySelectorAll('.div-summary.nullmonate')[0];
	var popupAnswer30 = document.querySelectorAll('.div-summary.zwoelflmonate')[0];
	var popupAnswer31 = document.querySelectorAll('.div-summary.vierundzwanzigmonate')[0];
	var popupAnswer32 = document.querySelectorAll('.div-summary.wunschgeschlechtmann')[0];
	var popupAnswer33 = document.querySelectorAll('.div-summary.wunschgeschlechtfrau')[0];
	var popupAnswer34 = document.querySelectorAll('.div-summary.lehrkraftfueralles')[0];
	var popupAnswer35 = document.querySelectorAll('.div-summary.muttersprachler')[0];
	var popupAnswer36 = document.querySelectorAll('.div-summary.erfahrenelehrkraft')[0];
	var popupAnswer37 = document.querySelectorAll('.div-summary.premiumlehrkraft')[0];
	var popupAnswer38 = document.querySelectorAll('.div-summary.vertragspause')[0];
	var popupAnswer39 = document.querySelectorAll('.div-summary.gutstundenspeicher')[0];
	var popupAnswer40 = document.querySelectorAll('.div-summary.analyse')[0];
	var popupAnswer41 = document.querySelectorAll('.div-summary.chatsupporthausaufgaben')[0];
	var popupAnswer42 = document.querySelectorAll('.div-summary.abholservice')[0];




	function isCondition1Met(codegenerator) {
		return codegenerator.substr(0, 2) === "0A";
	}

	function isCondition2Met(codegenerator) {
		return codegenerator.substr(2, 2) === "0A";
	}

	function isCondition3Met(codegenerator) {
		return codegenerator.substr(4, 2) === "0A";
	}

	function isCondition4Met(codegenerator) {
		return codegenerator.substr(12, 2) === "0A";
	}

	function isCondition5Met(codegenerator) {
		return codegenerator.substr(14, 2) === "0A";
	}

	function isCondition6Met(codegenerator) {
		return codegenerator.substr(16, 2) === "0A";
	}

	function isCondition7Met(codegenerator) {
		return codegenerator.substr(18, 2) === "0A";
	}

	function isCondition8Met(codegenerator) {
		return codegenerator.substr(20, 2) === "0A";
	}

	function isCondition9Met(codegenerator) {
		return codegenerator.substr(22, 2) === "0A";
	}

	function isCondition10Met(codegenerator) {
		return codegenerator.substr(24, 2) === "0A";
	}

	function isCondition11Met(codegenerator) {
		return codegenerator.substr(26, 2) === "0A";
	}

	function calculation() {
		var totalBudget = 16.49;
		var codegenerator = "0A0A0A00A0A0A0A0A0A0A0A0A0A0A";

		// zuerst alle Pop-up-Elemente ausblenden
		popupAnswer1.style.display = "none";
		popupAnswer2.style.display = "none";
		popupAnswer3.style.display = "none";
		popupAnswer4.style.display = "none";
		popupAnswer5.style.display = "none";
		popupAnswer6.style.display = "none";
		popupAnswer7.style.display = "none";
		popupAnswer8.style.display = "none";
		popupAnswer9.style.display = "none";
		popupAnswer10.style.display = "none";
		popupAnswer11.style.display = "none";
		popupAnswer12.style.display = "none";
		popupAnswer13.style.display = "none";
		popupAnswer14.style.display = "none";
		popupAnswer15.style.display = "none";
		popupAnswer16.style.display = "none";
		popupAnswer17.style.display = "none";
		popupAnswer18.style.display = "none";
		popupAnswer19.style.display = "none";
		popupAnswer20.style.display = "none";
		popupAnswer21.style.display = "none";
		popupAnswer22.style.display = "none";
		popupAnswer23.style.display = "none";
		popupAnswer24.style.display = "none";
		popupAnswer25.style.display = "none";
		popupAnswer26.style.display = "none";
		popupAnswer27.style.display = "none";
		popupAnswer28.style.display = "none";
		popupAnswer29.style.display = "none";
		popupAnswer30.style.display = "none";
		popupAnswer31.style.display = "none";
		popupAnswer32.style.display = "none";
		popupAnswer33.style.display = "none";
		popupAnswer34.style.display = "none";
		popupAnswer35.style.display = "none";
		popupAnswer36.style.display = "none";
		popupAnswer37.style.display = "none";
		popupAnswer38.style.display = "none";
		popupAnswer39.style.display = "none";
		popupAnswer40.style.display = "none";
		popupAnswer41.style.display = "none";
		popupAnswer42.style.display = "none";






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

		if (mycustomcheckbox37[0].checked) {
			totalBudget += 1.2;
			popupAnswer4.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "DA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "DA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "DA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox38[0].checked) {
			totalBudget += 1.4;
			popupAnswer5.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "EA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "EA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "EA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox39[0].checked) {
			totalBudget += 1.2;
			popupAnswer6.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "GA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "GA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "GA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox40[0].checked) {
			totalBudget += 0.8;
			popupAnswer7.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "FA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "FA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "FA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox41[0].checked) {
			totalBudget += 1.20;
			popupAnswer8.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "HA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "HA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "HA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox42[0].checked) {
			totalBudget += 1.40;
			popupAnswer9.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "IA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "IA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "IA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox43[0].checked) {
			totalBudget += 0.8;
			popupAnswer10.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "JA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "JA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "JA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox44[0].checked) {
			totalBudget += 0.2;
			popupAnswer11.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "KA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "KA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "KA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox45[0].checked) {
			totalBudget += 0.2;
			popupAnswer12.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "LA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "LA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "LA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox46[0].checked) {
			totalBudget += 0.2;
			popupAnswer13.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "MA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "MA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "MA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox47[0].checked) {
			totalBudget += 1.6;
			popupAnswer14.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "NA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "NA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "NA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox48[0].checked) {
			totalBudget += 0.8;
			popupAnswer15.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "OA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "OA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "OA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox49[0].checked) {
			totalBudget += 1.4;
			popupAnswer16.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "PA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "PA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "PA" + codegenerator.substr(6);
			}
		}
		if (mycustomcheckbox50[0].checked) {
			totalBudget += 2.20;
			popupAnswer17.style.display = "block";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 0) + "QA" + codegenerator.substr(2);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "QA" + codegenerator.substr(4);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "QA" + codegenerator.substr(6);
			}
		}

		if (mycustomcheckbox51[0].checked) {
			popupAnswer18.style.display = "block";
		}

		if (mycustomcheckbox52[0].checked) {
			popupAnswer19.style.display = "block";
		}

		if (mycustomcheckbox53[0].checked) {
			popupAnswer20.style.display = "block";
		}

		if (mycustomcheckbox54[0].checked) {
			popupAnswer21.style.display = "block";
		}

		if (mycustomcheckbox55[0].checked) {
			popupAnswer22.style.display = "block";
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

		mycustomradiobox3.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.0;
					codegenerator = codegenerator.substr(0, 10) + "FA" + codegenerator.substr(12);
					popupAnswer26.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.6;
					codegenerator = codegenerator.substr(0, 10) + "DA" + codegenerator.substr(12);
					popupAnswer27.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 10) + "BA" + codegenerator.substr(12);
					popupAnswer28.style.display = "block";
				}
			}
		});

		mycustomradiobox4.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 8) + "CA" + codegenerator.substr(10);
					popupAnswer29.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 8) + "BA" + codegenerator.substr(10);
					popupAnswer30.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 8) + "AA" + codegenerator.substr(10);
					popupAnswer31.style.display = "block";
				}
			}
		});

		mycustomradiobox5.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 8) + "CA" + codegenerator.substr(10);
					popupAnswer29.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 8) + "BA" + codegenerator.substr(10);
					popupAnswer30.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 8) + "AA" + codegenerator.substr(10);
					popupAnswer31.style.display = "block";
				}
			}
		});

		mycustomradiobox6.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 8) + "CA" + codegenerator.substr(10);
					popupAnswer29.style.display = "block";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 8) + "BA" + codegenerator.substr(10);
					popupAnswer30.style.display = "block";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 8) + "AA" + codegenerator.substr(10);
					popupAnswer31.style.display = "block";
				}
			}
		});

		if (mycustomcheckbox1[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "CA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "CA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox2[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "CA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "CA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox3[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "CA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "CA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox4[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "BA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "BA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox5[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "BA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "BA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox6[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "BA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "BA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox7[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "DA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "DA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "DA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox8[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "DA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "DA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "DA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox9[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "DA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "DA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "DA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox10[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "GA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "GA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "GA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox11[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "GA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "GA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "GA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox12[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "GA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "GA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "GA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			}
		}


		if (mycustomcheckbox13[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "QA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "QA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "QA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox14[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "QA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "QA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "QA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox15[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "QA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "QA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "QA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			}
		}


		if (mycustomcheckbox16[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "MA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "MA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "MA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox17[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "MA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "MA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "MA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox18[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "MA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "MA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "MA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox19[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "EA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "EA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "EA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox20[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "EA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "EA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "EA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox21[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "EA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "EA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "EA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox22[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "HA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "HA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "HA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox23[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "HA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "HA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "HA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox24[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "HA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "HA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "HA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox25[0].checked) {
			totalBudget += 5.4;
			popupAnswer40.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "OA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "OA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "OA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "OA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "OA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "OA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "OA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "OA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox26[0].checked) {
			totalBudget += 3.6;
			popupAnswer40.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "LA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "LA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "LA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "LA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "LA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "LA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "LA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "LA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox27[0].checked) {
			totalBudget += 1.8;
			popupAnswer40.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "JA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "JA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "JA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "JA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "JA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "JA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "JA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "JA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox28[0].checked) {
			totalBudget += 3.2;
			popupAnswer41.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "NA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "NA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "NA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "NA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "NA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "NA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "NA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "NA" + codegenerator.substr(28);
			}
		}


		if (mycustomcheckbox29[0].checked) {
			totalBudget += 1.8;
			popupAnswer41.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "KA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "KA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "KA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "KA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "KA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "KA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "KA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "KA" + codegenerator.substr(28);
			}
		}


		if (mycustomcheckbox30[0].checked) {
			totalBudget += 1.4;
			popupAnswer41.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "IA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "IA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "IA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "IA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "IA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "IA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "IA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "IA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox31[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "PA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "PA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "PA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox32[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "PA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "PA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "PA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			}
		}

		if (mycustomcheckbox33[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "block";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 12) + "PA" + codegenerator.substr(14);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 14) + "PA" + codegenerator.substr(16);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 16) + "PA" + codegenerator.substr(18);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			}
		}

		totalBudget = totalBudget.toFixed(2).replace(".", ",");
		$("[bloc=budget]").text(totalBudget);
		$("[bloc=codegenerator]").text(codegenerator);
	}

	mycustomcheckbox1[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox2[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox3[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox4[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox5[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox6[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox7[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox8[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox9[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox10[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox11[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox12[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox13[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox14[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox15[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox16[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox17[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox18[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox19[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox20[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox21[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox22[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox23[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox24[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox25[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox26[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox27[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox28[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox29[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox30[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox31[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox32[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox33[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox34[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox35[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox36[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox37[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox38[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox39[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox40[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox41[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox42[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox43[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox44[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox45[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox46[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox47[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox48[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox49[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox50[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox51[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox52[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox53[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox54[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox55[0].addEventListener("change", function() {
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


	mycustomradiobox3.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});


	mycustomradiobox4.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});


	mycustomradiobox5.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});


	mycustomradiobox6.forEach(function(radio) {
		radio.addEventListener('change', function() {
			calculation();
		});
	});



	// Aufruf der Funktion calculation() beim Laden der Seite
	calculation();

	for (var i = 0; i < mycustomradiobox1.length; i++) {
		mycustomradiobox1[i].addEventListener('change', function() {
			mycustomradiobox2.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomradiobox3.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox4.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox5.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox6.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox1.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox2.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox3.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox4.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox5.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox6.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox7.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox8.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox9.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox10.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox11.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox12.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox13.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox14.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox15.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox16.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox17.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox18.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox19.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox20.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox21.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox22.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox23.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox24.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox26.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox27.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox28.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox29.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox30.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox31.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox32.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox33.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
		});
	}

	for (var i = 0; i < mycustomradiobox2.length; i++) {
		mycustomradiobox2[i].addEventListener('change', function() {
			mycustomradiobox4.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox5.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox6.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox1.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox2.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox3.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox4.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox5.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox6.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox7.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox8.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox9.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox10.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox11.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox12.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox13.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox14.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox15.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox16.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox17.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox18.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox19.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox20.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox21.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox22.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox23.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox24.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox26.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox27.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox28.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox29.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox30.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox31.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox32.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox33.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
		});
	}

	for (var i = 0; i < mycustomradiobox3.length; i++) {
		mycustomradiobox3[i].addEventListener('change', function() {
			mycustomradiobox4.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox5.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomradiobox6.forEach(function(radio) {
				if (radio.checked) {
					radio.checked = false;
					$(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox1.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox2.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox3.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox4.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox5.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox6.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox7.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox8.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox9.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox10.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox11.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox12.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox13.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox14.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox15.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox16.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox17.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox18.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox19.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox20.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox21.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox22.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox23.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox24.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox25.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox26.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox27.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox28.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox29.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox30.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox31.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
			mycustomcheckbox32.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
			mycustomcheckbox33.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});
		});
	}




	for (var i = 0; i < mycustomcheckbox16.length; i++) {
		mycustomcheckbox16[i].addEventListener('change', function() {
			mycustomcheckbox13.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}
	for (var i = 0; i < mycustomcheckbox17.length; i++) {
		mycustomcheckbox17[i].addEventListener('change', function() {
			mycustomcheckbox14.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox18.length; i++) {
		mycustomcheckbox18[i].addEventListener('change', function() {
			mycustomcheckbox15.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}
	for (var i = 0; i < mycustomcheckbox13.length; i++) {
		mycustomcheckbox13[i].addEventListener('change', function() {
			mycustomcheckbox16.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox14.length; i++) {
		mycustomcheckbox14[i].addEventListener('change', function() {
			mycustomcheckbox17.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}
	for (var i = 0; i < mycustomcheckbox15.length; i++) {
		mycustomcheckbox15[i].addEventListener('change', function() {
			mycustomcheckbox18.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

});
