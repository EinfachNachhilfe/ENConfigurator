
document.addEventListener("DOMContentLoaded", function() {
        var teachingLocationRadios = document.querySelectorAll('input[name="radiotest1"]');
        var teachingLocationRadios1 = document.querySelectorAll('input[name="radiotest2"]');
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
        var popupAnswer1 = document.querySelectorAll('.div-test1')[0];
        var popupAnswer2 = document.querySelectorAll('.div-test2')[0];
        var popupAnswer3 = document.querySelectorAll('.div-test3')[0];
        var popupAnswer4 = document.querySelectorAll('.div-test4')[0];
        var popupAnswer5 = document.querySelectorAll('.div-test5')[0];
        var popupAnswer6 = document.querySelectorAll('.div-test6')[0];
        var popupAnswer7 = document.querySelectorAll('.div-test7')[0];
        var popupAnswer8 = document.querySelectorAll('.div-test8')[0];
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

function calculation() {
  var totalBudget = 16.49;
  var codegenerator = "0A0A0A000000AAAAAAAAAAAAAAAAAA";

  // zuerst alle Pop-up-Elemente ausblenden
  popupAnswer1.style.display = "none";
  popupAnswer2.style.display = "none";
  popupAnswer3.style.display = "none";
  popupAnswer4.style.display = "none";
  popupAnswer5.style.display = "none";
  popupAnswer6.style.display = "none";
  popupAnswer7.style.display = "none";

  if (mycustomcheckbox1[0].checked) {
    totalBudget += 0.6;
    popupAnswer1.style.display = "block";
    if (isCondition1Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 0) + "AA" + codegenerator.substr(2);
    } else if (isCondition2Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 2) + "AA" + codegenerator.substr(4);
    } else if (isCondition3Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 4) + "AA" + codegenerator.substr(6);
    }
  }

  if (mycustomcheckbox2[0].checked) {
    totalBudget += 2.0;
    popupAnswer2.style.display = "block";
    if (isCondition1Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 0) + "BB" + codegenerator.substr(2);
    } else if (isCondition2Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 2) + "BB" + codegenerator.substr(4);
    } else if (isCondition3Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 4) + "BB" + codegenerator.substr(6);
    }
  }

  if (mycustomcheckbox3[0].checked) {
    totalBudget += 3.0;
    popupAnswer3.style.display = "block";
    if (isCondition1Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 0) + "CC" + codegenerator.substr(2);
    } else if (isCondition2Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 2) + "CC" + codegenerator.substr(4);
    } else if (isCondition3Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 4) + "CC" + codegenerator.substr(6);
    }
  }
  
    if (mycustomcheckbox4[0].checked) {
    totalBudget += 4.0;
    popupAnswer7.style.display = "block";
    if (isCondition1Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 0) + "14" + codegenerator.substr(2);
    } else if (isCondition2Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 2) + "14" + codegenerator.substr(4);
    } else if (isCondition3Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 4) + "14" + codegenerator.substr(6);
    }
  }


    teachingLocationRadios1.forEach(function(radio) {
      if (radio.checked) {
        if (radio.value == '1') {
          totalBudget += 0.6;
          codegenerator = codegenerator.substr(0, 6) + "12" + codegenerator.substr(8);
          popupAnswer4.style.display = "block";
        } else if (radio.value == '2') {
          totalBudget += 3.4;
          codegenerator = codegenerator.substr(0, 8) + "13" + codegenerator.substr(10);
          popupAnswer5.style.display = "block";
        } else if (radio.value == '3') {
          totalBudget += 2.3;
          codegenerator = codegenerator.substr(0, 10) + "14" + codegenerator.substr(12);
          popupAnswer6.style.display = "block";
        }
      }
    });

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

   teachingLocationRadios1.forEach(function(radio) {
    radio.addEventListener('change', function() {
      calculation();
    });
  });
  
  calculation();

  for (var i = 0; i < teachingLocationRadios.length; i++) {
    teachingLocationRadios[i].addEventListener('change', function() {
      mycustomcheckbox1.forEach(function(checkbox) {
        if (checkbox.checked) {
          $(checkbox).prop("checked", false)
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

      teachingLocationRadios1.forEach(function(radio) {
        if (radio.checked) {
          radio.checked = false;
          $(radio).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
          calculation();
        }
      });
    });
  }
    for (var j = 0; j < mycustomcheckbox1.length; j++) {
    mycustomcheckbox1[j].addEventListener('change', function() {
      mycustomcheckbox2.forEach(function(checkbox) {
        if (checkbox.checked) {
          $(checkbox).prop("checked", false);
          $(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
          calculation();
        }
      });
    });
  }
      for (var k = 0; k < mycustomcheckbox2.length; k++) {
    mycustomcheckbox2[k].addEventListener('change', function() {
      mycustomcheckbox1.forEach(function(checkbox) {
        if (checkbox.checked) {
          $(checkbox).prop("checked", false);
          $(checkbox).siblings("div.w--redirected-checked").removeClass("w--redirected-checked");
          calculation();
        }
      });
    });
  }
  

});
