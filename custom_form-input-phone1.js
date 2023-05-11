
var selectedOption = "";

function updateInputValue() {
  var selectElement = document.getElementById("custom_form-input-is-select-input");
  selectedOption = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById("custom_form-input").value = selectedOption;
}

document.getElementById("custom_form-input-is-select-input").addEventListener("change", function() {
  updateInputValue();
});

document.getElementById("custom_form-input").addEventListener("input", function() {
  if (this.value.length < selectedOption.length) {
    this.value = selectedOption;
  }
});

document.getElementById('custom_form-input-is-select-input').disabled = true;


// Aufrufen der Funktion beim Laden der Seite
window.onload = updateInputValue;
