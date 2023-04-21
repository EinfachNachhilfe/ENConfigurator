document.addEventListener("DOMContentLoaded", function() {
	var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');
	var mycustomradiobox3 = document.querySelectorAll('input[name="unit90"]');
	var mycustomradiobox4 = document.querySelectorAll('input[name="runtime-1Unit"]');
	var mycustomradiobox5 = document.querySelectorAll('input[name="runtime-2Unit"]');
	var mycustomradiobox6 = document.querySelectorAll('input[name="runtime-3Unit"]');

	var totalBudget = 10;
	var lifetimeValue;
    var totalBudget1 = totalBudget;
    
    function updateLifetimeValue() {
        mycustomradiobox2.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    lifetimeValue = totalBudget1 * 1 * 4.33;
                } else if (radio.value == '2') {
                    lifetimeValue = totalBudget1 * 2 * 4.33;
                } else if (radio.value == '3') {
                    lifetimeValue = totalBudget1 * 3 * 4.33;
                }
            }
        });
    
        mycustomradiobox3.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    lifetimeValue = totalBudget1 * 1 * 4.33;
                } else if (radio.value == '2') {
                    lifetimeValue = totalBudget1 * 2 * 4.33;
                } else if (radio.value == '3') {
                    lifetimeValue = totalBudget1 * 3 * 4.33;
                }
            }
        });
    
        mycustomradiobox4.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    lifetimeValue = totalBudget1 * 1;
                } else if (radio.value == '2') {
                    lifetimeValue = totalBudget1 * 12;
                } else if (radio.value == '3') {
                    lifetimeValue = totalBudget1 * 24;
                }
            }
        });
    
        mycustomradiobox5.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    lifetimeValue = totalBudget1 * 1;
                } else if (radio.value == '2') {
                    lifetimeValue = totalBudget1 * 12;
                } else if (radio.value == '3') {
                    lifetimeValue = totalBudget1 * 24;
                }
            }
        });
    
        mycustomradiobox6.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    lifetimeValue = totalBudget1 * 1;
                } else if (radio.value == '2') {
                    lifetimeValue = totalBudget1 * 12;
                } else if (radio.value == '3') {
                    lifetimeValue = totalBudget1 * 24;
                }
            }
        });
    
        $('.send-lifetimeValue').val(lifetimeValue);
        $("[bloc=budget1]").text(totalBudget1);
    }
    
    updateLifetimeValue();
    
    $(document).on("input", ".budget1", function(){
        totalBudget = $(this).val();
        totalBudget1 = totalBudget;
        updateLifetimeValue();
    });

	
