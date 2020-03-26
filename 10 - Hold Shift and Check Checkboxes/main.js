const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", checkBetween);
});

function checkBetween(e) {
  // Exclude when input box is unchecked
  if (e.target.checked) {
    // Checking which input box is checked
    const checkedBoxes = [];
    checkboxes.forEach((checkbox, i) => {
      if (checkbox.checked) checkedBoxes.push(i);
    });
    // Check all input boxes between the first one and the last one
    checkboxes.forEach((checkbox, i) => {
      if (i >= checkedBoxes[0] && i <= checkedBoxes[checkedBoxes.length - 1]) {
        checkbox.checked = true;
      }
    });
  }
}
