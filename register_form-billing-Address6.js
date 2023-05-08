document.addEventListener("DOMContentLoaded", function() {
  const divBillingAddress = document.getElementById("div_billing-address");
  const billingAddressPayable = document.getElementsByName("billing-address_payable");
  const streetNamePayable = document.getElementById("street-name_payable");
  const houseNumberPayable = document.getElementById("house-number_payable");
  const ZIPCodePayable = document.getElementById("ZIP-code_payable");
  const cityNamePayable = document.getElementById("city-name_payable");
  
  divBillingAddress.style.display = "none";

  billingAddressPayable.forEach(function(input) {
    input.addEventListener("change", function() {
      if (input.value === "1") {
        divBillingAddress.style.display = "none";
        streetNamePayable.value = "";
        houseNumberPayable.value = "";
        ZIPCodePayable.value = "";
        cityNamePayable.value = "";
        streetNamePayable.required = false;
        houseNumberPayable.required = false;
        ZIPCodePayable.required = false;
        cityNamePayable.required = false;
      } else if (input.value === "2") {
        divBillingAddress.style.display = "block";
        streetNamePayable.required = true;
        houseNumberPayable.required = true;
        ZIPCodePayable.required = true;
        cityNamePayable.required = true;
      }
    });
  });
});
