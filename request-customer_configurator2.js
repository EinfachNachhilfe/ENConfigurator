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
	var mycustomcheckbox54 = document.querySelectorAll('input[name="supportHausaufgabenbetreuung"]');
	var mycustomcheckbox55 = document.querySelectorAll('input[name="supportEtwasAnderes"]');
	var mycustomcheckbox56 = document.querySelectorAll('input[name="continueTutor-1Unit"]');
	var mycustomcheckbox57 = document.querySelectorAll('input[name="continueTutor-2Unit"]');
	var mycustomcheckbox58 = document.querySelectorAll('input[name="continueTutor-3Unit"]');
	var mycustomcheckbox59 = document.querySelectorAll('input[name="continueLesson-1Unit"]');
	var mycustomcheckbox60 = document.querySelectorAll('input[name="continueLesson-2Unit"]');
	var mycustomcheckbox61 = document.querySelectorAll('input[name="continueLesson-3Unit"]');
	var popupAnswer1 = document.querySelectorAll('.choice.mathe')[0];
	var popupAnswer2 = document.querySelectorAll('.choice.deutsch')[0];
	var popupAnswer3 = document.querySelectorAll('.choice.englisch')[0];
	var popupAnswer4 = document.querySelectorAll('.choice.franzoesisch')[0];
	var popupAnswer5 = document.querySelectorAll('.choice.latein')[0];
	var popupAnswer6 = document.querySelectorAll('.choice.italienisch')[0];
	var popupAnswer7 = document.querySelectorAll('.choice.spanisch')[0];
	var popupAnswer8 = document.querySelectorAll('.choice.physik')[0];
	var popupAnswer9 = document.querySelectorAll('.choice.chemie')[0];
	var popupAnswer10 = document.querySelectorAll('.choice.biologie')[0];
	var popupAnswer11 = document.querySelectorAll('.choice.geografie')[0];
	var popupAnswer12 = document.querySelectorAll('.choice.geschichte')[0];
	var popupAnswer13 = document.querySelectorAll('.choice.sozialkunde')[0];
	var popupAnswer14 = document.querySelectorAll('.choice.informatik')[0];
	var popupAnswer15 = document.querySelectorAll('.choice.sport')[0];
	var popupAnswer16 = document.querySelectorAll('.choice.wirtschaft')[0];
	var popupAnswer17 = document.querySelectorAll('.choice.sonstiges')[0];
	var popupAnswer18 = document.querySelectorAll('.choice.nachhilfe')[0];
	var popupAnswer19 = document.querySelectorAll('.choice.pruefungsvorbereitung')[0];
	var popupAnswer21 = document.querySelectorAll('.choice.hausaufgabenbetreuung')[0];
	var popupAnswer22 = document.querySelectorAll('.choice.etwasanderes')[0];
	var popupAnswer23 = document.querySelectorAll('.choice.zuhause')[0];
	var popupAnswer24 = document.querySelectorAll('.choice.hybrid')[0];
	var popupAnswer25 = document.querySelectorAll('.choice.online')[0];
	var popupAnswer26 = document.querySelectorAll('.choice.eineinheit')[0];
	var popupAnswer27 = document.querySelectorAll('.choice.zweieinheiten')[0];
	var popupAnswer28 = document.querySelectorAll('.choice.dreieinheiten')[0];
	var popupAnswer29 = document.querySelectorAll('.choice.nullmonate')[0];
	var popupAnswer30 = document.querySelectorAll('.choice.zwoelflmonate')[0];
	var popupAnswer31 = document.querySelectorAll('.choice.vierundzwanzigmonate')[0];
	var popupAnswer32 = document.querySelectorAll('.choice.wunschgeschlechtmann')[0];
	var popupAnswer33 = document.querySelectorAll('.choice.wunschgeschlechtfrau')[0];
	var popupAnswer34 = document.querySelectorAll('.choice.lehrkraftfueralles')[0];
	var popupAnswer35 = document.querySelectorAll('.choice.muttersprachler')[0];
	var popupAnswer36 = document.querySelectorAll('.choice.erfahrenelehrkraft')[0];
	var popupAnswer37 = document.querySelectorAll('.choice.premiumlehrkraft')[0];
	var popupAnswer38 = document.querySelectorAll('.choice.vertragspause')[0];
	var popupAnswer39 = document.querySelectorAll('.choice.gutstundenspeicher')[0];
	var popupAnswer40 = document.querySelectorAll('.choice.analyse')[0];
	var popupAnswer41 = document.querySelectorAll('.choice.chatsupporthausaufgaben')[0];
	var popupAnswer42 = document.querySelectorAll('.choice.abholservice')[0];




	function isCondition1Met(codegenerator) {
		return codegenerator.substr(2, 2) === "0A";
	}

	function isCondition2Met(codegenerator) {
		return codegenerator.substr(4, 2) === "0A";
	}

	function isCondition3Met(codegenerator) {
		return codegenerator.substr(6, 2) === "0A";
	}

	function isCondition4Met(codegenerator) {
		return codegenerator.substr(18, 2) === "0A";
	}

	function isCondition5Met(codegenerator) {
		return codegenerator.substr(20, 2) === "0A";
	}

	function isCondition6Met(codegenerator) {
		return codegenerator.substr(22, 2) === "0A";
	}

	function isCondition7Met(codegenerator) {
		return codegenerator.substr(24, 2) === "0A";
	}

	function isCondition8Met(codegenerator) {
		return codegenerator.substr(26, 2) === "0A";
	}

	function isCondition9Met(codegenerator) {
		return codegenerator.substr(28, 2) === "0A";
	}

	function isCondition10Met(codegenerator) {
		return codegenerator.substr(30, 2) === "0A";
	}

	function isCondition11Met(codegenerator) {
		return codegenerator.substr(32, 2) === "0A";
	}

	function isCondition12Met(codegenerator) {
		return codegenerator.substr(34, 2) === "0A";
	}

	function isCondition13Met(codegenerator) {
		return codegenerator.substr(36, 2) === "0A";
	}

	function isCondition14Met(codegenerator) {
		return codegenerator.substr(38, 2) === "0A";
	}

	function isCondition15Met(codegenerator) {
		return codegenerator.substr(40, 2) === "0A";
	}

	function calculation() {
		var totalBudget = 16.49;
		var codegenerator = "A-0A0A0A-XX-XX-XX-0A0A0A0A0A0A0A0A0A0A0A0A";
       

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
			popupAnswer1.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "CA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "CA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "CA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox35[0].checked) {
			popupAnswer2.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "AA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "AA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "AA" + codegenerator.substr(8);
			}
		}
		if (mycustomcheckbox36[0].checked) {
			popupAnswer3.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "BA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "BA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "BA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox37[0].checked) {
			totalBudget += 1.2;
			popupAnswer4.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "DA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "DA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "DA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox38[0].checked) {
			totalBudget += 1.4;
			popupAnswer5.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "EA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "EA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "EA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox39[0].checked) {
			totalBudget += 1.2;
			popupAnswer6.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "GA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "GA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "GA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox40[0].checked) {
			totalBudget += 0.8;
			popupAnswer7.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "FA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "FA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "FA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox41[0].checked) {
			totalBudget += 1.20;
			popupAnswer8.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "HA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "HA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "HA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox42[0].checked) {
			totalBudget += 1.40;
			popupAnswer9.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "IA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "IA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "IA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox43[0].checked) {
			totalBudget += 0.8;
			popupAnswer10.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "JA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "JA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "JA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox44[0].checked) {
			totalBudget += 0.2;
			popupAnswer11.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "KA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "KA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "KA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox45[0].checked) {
			totalBudget += 0.2;
			popupAnswer12.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "LA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "LA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "LA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox46[0].checked) {
			totalBudget += 0.2;
			popupAnswer13.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "MA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "MA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "MA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox47[0].checked) {
			totalBudget += 1.6;
			popupAnswer14.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "NA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "NA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "NA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox48[0].checked) {
			totalBudget += 0.8;
			popupAnswer15.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "OA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "OA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "OA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox49[0].checked) {
			totalBudget += 1.4;
			popupAnswer16.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "PA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "PA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "PA" + codegenerator.substr(8);
			}
		}
		if (mycustomcheckbox50[0].checked) {
			totalBudget += 2.20;
			popupAnswer17.style.display = "flex";
			if (isCondition1Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 2) + "QA" + codegenerator.substr(4);
			} else if (isCondition2Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 4) + "QA" + codegenerator.substr(6);
			} else if (isCondition3Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 6) + "QA" + codegenerator.substr(8);
			}
		}

		if (mycustomcheckbox51[0].checked) {
			popupAnswer18.style.display = "flex";
		}

		if (mycustomcheckbox52[0].checked) {
			popupAnswer19.style.display = "flex";
		}

		if (mycustomcheckbox54[0].checked) {
			popupAnswer21.style.display = "flex";
		}

		if (mycustomcheckbox55[0].checked) {
			popupAnswer22.style.display = "flex";
		}

		if (mycustomcheckbox56[0].checked) {	
		}

		if (mycustomcheckbox57[0].checked) {	
		}

		if (mycustomcheckbox58[0].checked) {	
		}

		if (mycustomcheckbox59[0].checked) {
		}

		if (mycustomcheckbox60[0].checked) {	
		}

		if (mycustomcheckbox61[0].checked) {
		}

		mycustomradiobox1.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 4.2;
					codegenerator = codegenerator.substr(0, 9) + "CA" + codegenerator.substr(11);
					popupAnswer23.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 9) + "BA" + codegenerator.substr(11);
					popupAnswer24.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 9) + "AA" + codegenerator.substr(11);
					popupAnswer25.style.display = "flex";
				}
			}
		});

		mycustomradiobox2.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.0;
					codegenerator = codegenerator.substr(0, 15) + "EA" + codegenerator.substr(17);
					popupAnswer26.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.6;
					codegenerator = codegenerator.substr(0, 15) + "CA" + codegenerator.substr(17);
					popupAnswer27.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 15) + "AA" + codegenerator.substr(17);
					popupAnswer28.style.display = "flex";
				}
			}
		});

		mycustomradiobox3.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.0;
					codegenerator = codegenerator.substr(0, 15) + "FA" + codegenerator.substr(17);
					popupAnswer26.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.6;
					codegenerator = codegenerator.substr(0, 15) + "DA" + codegenerator.substr(17);
					popupAnswer27.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 15) + "BA" + codegenerator.substr(17);
					popupAnswer28.style.display = "flex";
				}
			}
		});

		mycustomradiobox4.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
					popupAnswer29.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
					popupAnswer30.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 12) + "AA" + codegenerator.substr(14);
					popupAnswer31.style.display = "flex";
				}
			}
		});

		mycustomradiobox5.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
					popupAnswer29.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
					popupAnswer30.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 12) + "AA" + codegenerator.substr(14);
					popupAnswer31.style.display = "flex";
				}
			}
		});

		mycustomradiobox6.forEach(function(radio) {
			if (radio.checked) {
				if (radio.value == '1') {
					totalBudget += 6.8;
					codegenerator = codegenerator.substr(0, 12) + "CA" + codegenerator.substr(14);
					popupAnswer29.style.display = "flex";
				} else if (radio.value == '2') {
					totalBudget += 2.0;
					codegenerator = codegenerator.substr(0, 12) + "BA" + codegenerator.substr(14);
					popupAnswer30.style.display = "flex";
				} else if (radio.value == '3') {
					codegenerator = codegenerator.substr(0, 12) + "AA" + codegenerator.substr(14);
					popupAnswer31.style.display = "flex";
				}
			}
		});

		if (mycustomcheckbox1[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "CA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "CA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "CA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "CA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "CA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "CA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "CA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox2[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "CA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "CA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "CA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "CA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "CA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "CA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "CA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox3[0].checked) {
			totalBudget += 0.4;
			popupAnswer33.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "CA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "CA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "CA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "CA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "CA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "CA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "CA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "CA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "CA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "CA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "CA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "CA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox4[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "BA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "BA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "BA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "BA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "BA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "BA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "BA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox5[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "BA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "BA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "BA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "BA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "BA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "BA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "BA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox6[0].checked) {
			totalBudget += 0.4;
			popupAnswer32.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "BA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "BA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "BA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "BA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "BA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "BA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "BA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "BA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "BA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "BA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "BA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "BA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox7[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "DA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "DA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "DA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "DA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "DA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "DA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "DA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox8[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "DA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "DA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "DA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "DA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "DA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "DA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "DA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox9[0].checked) {
			totalBudget += 0.6;
			popupAnswer34.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "DA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "DA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "DA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "DA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "DA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "DA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "DA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "DA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "DA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "DA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "DA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "DA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox10[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "GA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "GA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "GA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "GA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "GA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "GA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "GA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox11[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "GA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "GA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "GA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "GA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "GA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "GA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "GA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox12[0].checked) {
			totalBudget += 1.2;
			popupAnswer35.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "GA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "GA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "GA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "GA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "GA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "GA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "GA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "GA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "GA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "GA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "GA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "GA" + codegenerator.substr(42);
			}
		}


		if (mycustomcheckbox13[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "QA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "QA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "QA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "GA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "GA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "GA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "GA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox14[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "QA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "QA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "QA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "QA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "QA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "QA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "QA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox15[0].checked) {
			totalBudget += 1.2;
			popupAnswer36.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "QA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "QA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "QA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "QA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "QA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "QA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "QA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "QA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "QA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "QA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "QA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "QA" + codegenerator.substr(42);
			}
		}


		if (mycustomcheckbox16[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "MA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "MA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "MA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "QA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "QA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "QA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "QA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox17[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "MA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "MA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "MA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "MA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "MA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "MA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "MA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox18[0].checked) {
			totalBudget += 2.6;
			popupAnswer37.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "MA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "MA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "MA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "MA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "MA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "MA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "MA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "MA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "MA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "MA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "MA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "MA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox19[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "EA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "EA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "EA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "EA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "EA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "EA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "EA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox20[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "EA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "EA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "EA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "EA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "EA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "EA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "EA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox21[0].checked) {
			totalBudget += 0.2;
			popupAnswer38.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "EA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "EA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "EA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "EA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "EA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "EA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "EA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "EA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "EA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "EA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "EA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "EA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox22[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "HA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "HA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "HA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "HA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "HA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "HA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "HA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox23[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "HA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "HA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "HA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "HA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "HA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "HA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "HA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox24[0].checked) {
			totalBudget += 1.2;
			popupAnswer39.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "HA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "HA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "HA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "HA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "HA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "HA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "HA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "HA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "HA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "HA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "HA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "HA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox25[0].checked) {
			totalBudget += 5.4;
			popupAnswer40.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "OA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "OA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "OA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "OA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "OA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "OA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "OA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "OA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "OA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "OA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "OA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "OA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox26[0].checked) {
			totalBudget += 3.6;
			popupAnswer40.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "LA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "LA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "LA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "LA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "LA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "LA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "LA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "LA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "LA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "LA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "LA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "LA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox27[0].checked) {
			totalBudget += 1.8;
			popupAnswer40.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "JA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "JA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "JA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "JA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "JA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "JA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "JA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "JA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "JA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "JA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "JA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "JA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox28[0].checked) {
			totalBudget += 3.2;
			popupAnswer41.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "NA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "NA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "NA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "NA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "NA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "NA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "NA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "NA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "NA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "NA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "NA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "NA" + codegenerator.substr(42);
			}
		}


		if (mycustomcheckbox29[0].checked) {
			totalBudget += 1.8;
			popupAnswer41.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "KA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "KA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "KA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "KA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "KA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "KA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "KA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "KA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "KA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "KA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "KA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "KA" + codegenerator.substr(42);
			}
		}


		if (mycustomcheckbox30[0].checked) {
			totalBudget += 1.4;
			popupAnswer41.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "IA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "IA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "IA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "IA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "IA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "IA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "IA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "IA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "IA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "IA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "IA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "IA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox31[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "PA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "PA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "PA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "PA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "PA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "PA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "PA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox32[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "PA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "PA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "PA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "PA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "PA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "PA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "PA" + codegenerator.substr(42);
			}
		}

		if (mycustomcheckbox33[0].checked) {
			totalBudget += 5.0;
			popupAnswer42.style.display = "flex";
			if (isCondition4Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 18) + "PA" + codegenerator.substr(20);
			} else if (isCondition5Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 20) + "PA" + codegenerator.substr(22);
			} else if (isCondition6Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 22) + "PA" + codegenerator.substr(24);
			} else if (isCondition7Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 24) + "PA" + codegenerator.substr(26);
			} else if (isCondition8Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 26) + "PA" + codegenerator.substr(28);
			} else if (isCondition9Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 28) + "PA" + codegenerator.substr(30);
			} else if (isCondition10Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 30) + "PA" + codegenerator.substr(32);
			} else if (isCondition11Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 32) + "PA" + codegenerator.substr(34);
			} else if (isCondition12Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 34) + "PA" + codegenerator.substr(36);
			} else if (isCondition13Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 36) + "PA" + codegenerator.substr(38);
			} else if (isCondition14Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 38) + "PA" + codegenerator.substr(40);
			} else if (isCondition15Met(codegenerator)) {
				codegenerator = codegenerator.substr(0, 40) + "PA" + codegenerator.substr(42);
			}
		}


        var totalsalary = 12;
        mycustomradiobox1.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    totalsalary += 1.50;
                } else if (radio.value == '2') {
                    totalsalary += 0.75;
                } else if (radio.value == '3') {
                    totalsalary += 0;
                }
            }
        });

        if (mycustomcheckbox28[0].checked) {
            totalsalary += 1.35;
        }

        if (mycustomcheckbox29[0].checked) {
            totalsalary += 0.67;
        }

        if (mycustomcheckbox30[0].checked) {
            totalsalary += 0.45;
        }
        if (mycustomcheckbox31[0].checked) {
            totalsalary += 3.75;
        }

        if (mycustomcheckbox32[0].checked) {
            totalsalary += 3.75;
        }

        if (mycustomcheckbox33[0].checked) {
            totalsalary += 3.75;
        }
        if (mycustomcheckbox13[0].checked) {
            totalsalary += 0.45;
        }

        if (mycustomcheckbox14[0].checked) {
            totalsalary += 0.45;
        }

        if (mycustomcheckbox15[0].checked) {
            totalsalary += 0.45;
        }

        if (mycustomcheckbox16[0].checked) {
            totalsalary += 0.75;
        }

        if (mycustomcheckbox17[0].checked) {
            totalsalary += 0.75;
        }

        if (mycustomcheckbox18[0].checked) {
            totalsalary += 0.75;
        }
            
       var totalBudget1 = totalBudget - totalsalary;   
             mycustomradiobox2.forEach(function(radio) {
                  if (radio.checked) {
                    if (radio.value == '1') {
                      totalBudget1 = totalBudget1 * 2 * 4.33333333;
                    } else if (radio.value == '2') {
                      totalBudget1 = totalBudget1 * 4 * 4.33333333;
                    } else if (radio.value == '3') {
                      totalBudget1 = totalBudget1 * 6 * 4.33333333;
                    }
                  }
                });
                
                    mycustomradiobox3.forEach(function(radio) {
                  if (radio.checked) {
                    if (radio.value == '1') {
                      totalBudget1 = totalBudget1 * 2 * 4.33333333;
                    } else if (radio.value == '2') {
                      totalBudget1 = totalBudget1 * 4 * 4.33333333;
                    } else if (radio.value == '3') {
                      totalBudget1 = totalBudget1 * 6 * 4.33333333;
                    }
                  }
                });
                
                    mycustomradiobox4.forEach(function(radio) {
                  if (radio.checked) {
                    if (radio.value == '1') {
                      totalBudget1 = totalBudget1 * 4;
                    } else if (radio.value == '2') {
                      totalBudget1 = totalBudget1 * 12;
                    } else if (radio.value == '3') {
                      totalBudget1 = totalBudget1 * 24;
                    }
                  }
                });
                
                    mycustomradiobox5.forEach(function(radio) {
                  if (radio.checked) {
                    if (radio.value == '1') {
                      totalBudget1 = totalBudget1 * 4;
                    } else if (radio.value == '2') {
                      totalBudget1 = totalBudget1 * 12;
                    } else if (radio.value == '3') {
                      totalBudget1 = totalBudget1 * 24;
                    }
                  }
                });
                
                    mycustomradiobox6.forEach(function(radio) {
                  if (radio.checked) {
                    if (radio.value == '1') {
                      totalBudget1 = totalBudget1 * 4;
                    } else if (radio.value == '2') {
                      totalBudget1 = totalBudget1 * 12;
                    } else if (radio.value == '3') {
                      totalBudget1 = totalBudget1 * 24;
                    }
                  }
                });
               
           
              

		totalBudget = totalBudget.toFixed(2).replace(".", ",");
		$("[bloc=budget]").text(totalBudget);
		$("[bloc=codegenerator]").text(codegenerator);
		$('.send-vertragscode').val(codegenerator);
		$('.send-preisPro45Min').val(totalBudget);

        totalBudget1 = totalBudget1.toFixed(2).replace(".", ",");
        $("[bloc=lifetimeValue]").text(totalBudget1);
        $('.send-lifetimeValue').val(totalBudget1);

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

	mycustomcheckbox54[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox55[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox56[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox57[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox58[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox59[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox60[0].addEventListener("change", function() {
		calculation();
	});

	mycustomcheckbox61[0].addEventListener("change", function() {
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

			mycustomcheckbox56.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox57.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox58.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox59.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox60.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox61.forEach(function(checkbox) {
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

			mycustomcheckbox56.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox57.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox58.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox59.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox60.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox61.forEach(function(checkbox) {
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

			mycustomcheckbox56.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox57.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox58.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox59.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox60.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop('checked', false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();

				}
			});

			mycustomcheckbox61.forEach(function(checkbox) {
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

	for (var i = 0; i < mycustomcheckbox1.length; i++) {
		mycustomcheckbox1[i].addEventListener('change', function() {
			mycustomcheckbox4.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox4.length; i++) {
		mycustomcheckbox4[i].addEventListener('change', function() {
			mycustomcheckbox1.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox2.length; i++) {
		mycustomcheckbox2[i].addEventListener('change', function() {
			mycustomcheckbox5.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox5.length; i++) {
		mycustomcheckbox5[i].addEventListener('change', function() {
			mycustomcheckbox2.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox3.length; i++) {
		mycustomcheckbox3[i].addEventListener('change', function() {
			mycustomcheckbox6.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}

	for (var i = 0; i < mycustomcheckbox6.length; i++) {
		mycustomcheckbox6[i].addEventListener('change', function() {
			mycustomcheckbox3.forEach(function(checkbox) {
				if (checkbox.checked) {
					$(checkbox).prop("checked", false);
					$(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
					calculation();
				}
			});
		});
	}
});
