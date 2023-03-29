
$(document).ready(function() {
  $('#div-billingAddress').hide();
  
  $('input[name="billingAddress"]').change(function() {
    if ($(this).val() == '1') {
      $('#div-billingAddress').hide();
      $('#street-name-payable').val('');
      $('#house-number-payable').val('');
      $('#ZIP-code-payable').val('');
      $('#city-name-payable').val('');
    } else if ($(this).val() == '2') {
      $('#div-billingAddress').show();
    }
  });
});
