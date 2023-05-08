
document.addEventListener("DOMContentLoaded", function() {
  const divBillingAddress = document.getElementById("div_billing-address");
  divBillingAddress.style.display = "none";

  const billingAddressPayable = document.getElementsByName("billing-address_payable");

  billingAddressPayable.forEach(function(input) {
    input.addEventListener("change", function() {
      if (input.value === "1") {
        divBillingAddress.style.display = "none";
        document.getElementById("street-name_payable").value = "";
        document.getElementById("house-number_payable").value = "";
        document.getElementById("ZIP-code_payable").value = "";
        document.getElementById("city-name_payable").value = "";
      } else if (input.value === "2") {
        divBillingAddress.style.display = "block";
      }
    });
  });
});

