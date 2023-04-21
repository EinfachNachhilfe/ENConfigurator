document.addEventListener("DOMContentLoaded", function() {
    var mycustomradiobox2 = document.querySelectorAll('input[name="unit45"]');

    function updateLifetimeValue() {
        var totalBudget1 = 10;
        mycustomradiobox2.forEach(function(radio) {
            if (radio.checked) {
                if (radio.value == '1') {
                    totalBudget1 = totalBudget1 * 1 * 4.33;
                } else if (radio.value == '2') {
                    totalBudget1 = totalBudget1 * 2 * 4.33;
                } else if (radio.value == '3') {
                    totalBudget1 = totalBudget1 * 3 * 4.33;
                }
            }
        });

        $('.send-lifetimeValue').val(totalBudget1);
        $("[bloc=lifetimeValue]").text(totalBudget1);
    }

    updateLifetimeValue();
});
