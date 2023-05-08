document.addEventListener("DOMContentLoaded", function() {
  const divBillingAddress = document.getElementById("content_billing-address");
  const billingAddressPayable = document.getElementsByName("trigger_billing-address");
  const streetNamePayable = document.getElementById("street-name_billing-address");
  const houseNumberPayable = document.getElementById("house-number_billing-address");
  const ZIPCodePayable = document.getElementById("zip-code_billing-address");
  const cityNamePayable = document.getElementById("city-name_billing-address");
  
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
