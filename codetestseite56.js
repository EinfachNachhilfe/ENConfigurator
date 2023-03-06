document.addEventListener("DOMContentLoaded", function() {
        var teachingLocationRadios = document.querySelectorAll('input[name="radiotest1"]');
        var teachingLocationRadios1 = document.querySelectorAll('input[name="radiotest2"]');
        var mycustomcheckbox1 = document.querySelectorAll('input[name="test556"]');
        var mycustomcheckbox2 = document.querySelectorAll('input[name="test557"]');
        var mycustomcheckbox3 = document.querySelectorAll('input[name="test558"]');
        var mycustomcheckbox4 = document.querySelectorAll('input[name="test559"]');
        var popupAnswer1 = document.querySelectorAll('.div-test1')[0];
        var popupAnswer2 = document.querySelectorAll('.div-test2')[0];
        var popupAnswer3 = document.querySelectorAll('.div-test3')[0];
        var popupAnswer4 = document.querySelectorAll('.div-test4')[0];
        var popupAnswer5 = document.querySelectorAll('.div-test5')[0];
        var popupAnswer6 = document.querySelectorAll('.div-test6')[0];
        var popupAnswer7 = document.querySelectorAll('.div-test7')[0];
        var popupAnswer8 = document.querySelectorAll('.div-test8')[0];
	


function isCondition1Met(codegenerator) {
  return codegenerator.substr(12, 2) === "0A";
}

function isCondition2Met(codegenerator) {
  return codegenerator.substr(14, 2) === "0A";
}

function isCondition3Met(codegenerator) {
  return codegenerator.substr(16, 2) === "0A";
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
      codegenerator = codegenerator.substr(0, 12) + "AA" + codegenerator.substr(14);
    } else if (isCondition2Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 14) + "AA" + codegenerator.substr(16);
    } else if (isCondition3Met(codegenerator)) {
      codegenerator = codegenerator.substr(0, 16) + "AA" + codegenerator.substr(18);
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
    for (var j = 0; i < mycustomcheckbox1.length; i++) {
    mycustomcheckbox1[i].addEventListener('change', function() {
      mycustomcheckbox2.forEach(function(checkbox) {
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
