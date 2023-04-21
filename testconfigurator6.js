document.addEventListener("DOMContentLoaded", function() {
	var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');

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
    
        $('.send-lifetimeValue').val(lifetimeValue);
        $("[bloc=budget1]").text(lifetimeValue);
    }

	
