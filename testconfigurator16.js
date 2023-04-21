document.addEventListener("DOMContentLoaded", function() {
  var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');
  var mycustomradiobox3 = document.querySelectorAll('input[name="unit90"]');
	var mycustomradiobox4 = document.querySelectorAll('input[name="runtime-1Unit"]');
	var mycustomradiobox5 = document.querySelectorAll('input[name="runtime-2Unit"]');
	var mycustomradiobox6 = document.querySelectorAll('input[name="runtime-3Unit"]');

  function updateLifetimeValue() {
    var totalBudget1 = 10;
    mycustomradiobox2.forEach(function(radio) {
      if (radio.checked) {
        if (radio.value == '1') {
          totalBudget1 = totalBudget1 * 2 * 4.33;
        } else if (radio.value == '2') {
          totalBudget1 = totalBudget1 * 4 * 4.33;
        } else if (radio.value == '3') {
          totalBudget1 = totalBudget1 * 6 * 4.33;
        }
      }
    });
    
        mycustomradiobox3.forEach(function(radio) {
      if (radio.checked) {
        if (radio.value == '1') {
          totalBudget1 = totalBudget1 * 2 * 4.33;
        } else if (radio.value == '2') {
          totalBudget1 = totalBudget1 * 4 * 4.33;
        } else if (radio.value == '3') {
          totalBudget1 = totalBudget1 * 6 * 4.33;
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
    totalBudget1 = totalBudget1.toFixed(2).replace(".", ",");
    $('.send-lifetimeValue').val(totalBudget1);
    $("[bloc=lifetimeValue]").text(totalBudget1);
  }

  mycustomradiobox2.forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateLifetimeValue();
    });
  });
	
	  mycustomradiobox3.forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateLifetimeValue();
    });
  });
	
	  mycustomradiobox4.forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateLifetimeValue();
    });
  });
	
	  mycustomradiobox5.forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateLifetimeValue();
    });
  });
	
	  mycustomradiobox6.forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateLifetimeValue();
    });
  });

  updateLifetimeValue();
});
