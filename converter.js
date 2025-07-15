// Okay, let's grab the input boxes!
var kelvin = document.getElementById("kelvin");
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var isUpdating = false;
// This part updates the other fields when you type in Kelvin
kelvin.addEventListener("input", function () {
  if (isUpdating) return;
  isUpdating = true;
  var k = parseFloat(kelvin.value);
  if (!isNaN(k)) {
    celsius.value = (k - 273.15).toFixed(2);
    fahrenheit.value = (((k - 273.15) * 9) / 5 + 32).toFixed(2);
  } else {
    celsius.value = "";
    fahrenheit.value = "";
  }
  isUpdating = false;
});
// Same idea, but for Celsius
celsius.addEventListener("input", function () {
  if (isUpdating) return;
  isUpdating = true;
  var c = parseFloat(celsius.value);
  if (!isNaN(c)) {
    kelvin.value = (c + 273.15).toFixed(2);
    fahrenheit.value = ((c * 9) / 5 + 32).toFixed(2);
  } else {
    kelvin.value = "";
    fahrenheit.value = "";
  }
  isUpdating = false;
});
// And of course, for Fahrenheit
fahrenheit.addEventListener("input", function () {
  if (isUpdating) return;
  isUpdating = true;
  var f = parseFloat(fahrenheit.value);
  if (!isNaN(f)) {
    celsius.value = (((f - 32) * 5) / 9).toFixed(2);
    kelvin.value = (((f - 32) * 5) / 9 + 273.15).toFixed(2);
  } else {
    celsius.value = "";
    kelvin.value = "";
  }
  isUpdating = false;
});
// This is for the dark mode toggle. Click it and the page goes dark!
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});
