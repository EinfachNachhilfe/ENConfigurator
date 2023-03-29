
$(document).ready(function() {
  $('#div-billingAddress').hide();
  
  $('input[name="billing-Address"]').change(function() {
    if ($(this).val() == '1') {
      $('#div-billingAddress').hide();
      $('#street-name_payable').val('');
      $('#house-number_payable').val('');
      $('#ZIP-code_payable').val('');
      $('#city-name_payable').val('');
    } else if ($(this).val() == '2') {
      $('#div-billingAddress').show();
    }
  });
});
