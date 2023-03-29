
$(document).ready(function() {
  $('#div_billing-address').hide();
  
  $('input[name="billing-address_payable"]').change(function() {
    if ($(this).val() == '1') {
      $('#div_billing-address').hide();
      $('#street-name_payable').val('');
      $('#house-number_payable').val('');
      $('#ZIP-code_payable').val('');
      $('#city-name_payable').val('');
    } else if ($(this).val() == '2') {
      $('#div_billing-address').show();
    }
  });
});
