var selectedOption = "";

function updateInputValue() {
  var selectElement = document.getElementById("custom_form-input-is-select-input");
  selectedOption = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById("phone-number_payable").value = selectedOption;
}

document.getElementById("custom_form-input-is-select-input").addEventListener("change", function() {
  updateInputValue();
});

document.getElementById("phone-number_payable").addEventListener("input", function() {
  if (this.value.length < selectedOption.length) {
    this.value = selectedOption;
  }
});

// Verhindern, dass der ausgewählte Wert durch Einfügen gelöscht wird
document.getElementById("phone-number_payable").addEventListener("paste", function(e) {
  // Wert einfügen und ausgewählten Wert hinzufügen, wenn er nicht vorhanden ist
  var pastedValue = e.clipboardData.getData('text');
  if (pastedValue.indexOf(selectedOption) === -1) {
    this.value = selectedOption + pastedValue;
    e.preventDefault();
  }
});

// Aufrufen der Funktion beim Laden der Seite
window.onload = updateInputValue;
