// Length Converter
const lengthFrom = document.getElementById("length-from");
const lengthTo = document.getElementById("length-to");
const lengthInput = document.getElementById("length-input");
const lengthOutput = document.getElementById("length-output");
const lengthConvert = document.getElementById("length-convert");

lengthConvert.addEventListener("click", () => {
  const from = lengthFrom.value;
  const to = lengthTo.value;
  const input = lengthInput.value;

  let result;

  if (from === "meters" && to === "meters") {
    result = input;
  } else if (from === "meters" && to === "centimeters") {
    result = input * 100;
  } else if (from === "meters" && to === "feet") {
    result = input * 3.28084;
  } else if (from === "meters" && to === "inches") {
    result = input * 39.3701;
  } else if (from === "centimeters" && to === "meters") {
    result = input / 100;
  } else if (from === "centimeters" && to === "centimeters") {
    result = input;
  } else if (from === "centimeters" && to === "feet") {
    result = input / 30.48;
  } else if (from === "centimeters" && to === "inches") {
    result = input / 2.54;
  } else if (from === "feet" && to === "meters") {
    result = input / 3.28084;
  } else if (from === "feet" && to === "centimeters") {
    result = input * 30.48;
  } else if (from === "feet" && to === "feet") {
    result = input;
  } else if (from === "feet" && to === "inches") {
    result = input * 12;
  } else if (from === "inches" && to === "meters") {
    result = input / 39.3701;
  } else if (from === "inches" && to === "centimeters") {
    result = input * 2.54;
  } else if (from === "inches" && to === "feet") {
    result = input / 12;
  } else if (from === "inches" && to === "inches") {
    result = input;
  }

  lengthOutput.value = result;
});

// Temperature Converter
const temperatureFrom = document.getElementById("temperature-from");
const temperatureTo = document.getElementById("temperature-to");
const temperatureInput = document.getElementById("temperature-input");
const temperatureOutput = document.getElementById("temperature-output");
const temperatureConvert = document.getElementById("temperature-convert");

temperatureConvert.addEventListener("click", () => {
  const from = temperatureFrom.value;
  const to = temperatureTo.value;
  const input = temperatureInput.value;

  let result;

  if (from === "celsius" && to === "celsius") {
    result = input;
  } else if (from === "celsius" && to === "fahrenheit") {
    result = input * 1.8 + 32;
  } else if (from === "celsius" && to === "kelvin") {
    result = parseFloat(input) + 273.15;
  } else if (from === "fahrenheit" && to === "celsius") {
    result = (input - 32) / 1.8;
  } else if (from === "fahrenheit" && to === "fahrenheit") {
    result = input;
  } else if (from === "fahrenheit" && to === "kelvin") {
    result = (input - 32) / 1.8 + 273.15;
  } else if (from === "kelvin" && to === "celsius") {
    result = input - 273.15;
  } else if (from === "kelvin" && to === "fahrenheit") {
    result = (input - 273.15) * 1.8 + 32;
  } else if (from === "kelvin" && to === "kelvin") {
    result = input;
  }

  temperatureOutput.value = result;
});

// Speed Converter
const speedFrom = document.getElementById("speed-from");
const speedTo = document.getElementById("speed-to");
const speedInput = document.getElementById("speed-input");
const speedOutput = document.getElementById("speed-output");
const speedConvert = document.getElementById("speed-convert");

speedConvert.addEventListener("click", () => {
  const from = speedFrom.value;
  const to = speedTo.value;
  const input = speedInput.value;

  let result;

  if (from === "miles-per-hour" && to === "miles-per-hour") {
    result = input;
  } else if (from === "miles-per-hour" && to === "kilometers-per-hour") {
    result = input * 1.60934;
  } else if (from === "miles-per-hour" && to === "meters-per-second") {
    result = input * 0.44704;
  } else if (from === "kilometers-per-hour" && to === "miles-per-hour") {
    result = input / 1.60934;
  } else if (from === "kilometers-per-hour" && to === "kilometers-per-hour") {
    result = input;
  } else if (from === "kilometers-per-hour" && to === "meters-per-second") {
    result = input / 3.6;
  } else if (from === "meters-per-second" && to === "miles-per-hour") {
    result = input / 0.44704;
  } else if (from === "meters-per-second" && to === "kilometers-per-hour") {
    result = input * 3.6;
  } else if (from === "meters-per-second" && to === "meters-per-second") {
    result = input;
  }

  speedOutput.value = result;
});

// Weight Converter
const weightFrom = document.getElementById("weight-from");
const weightTo = document.getElementById("weight-to");
const weightInput = document.getElementById("weight-input");
const weightOutput = document.getElementById("weight-output");
const weightConvert = document.getElementById("weight-convert");

weightConvert.addEventListener("click", () => {
  const from = weightFrom.value;
  const to = weightTo.value;
  const input = weightInput.value;

  let result;

  if (from === "grams" && to === "grams") {
    result = input;
  } else if (from === "grams" && to === "kilograms") {
    result = input / 1000;
  } else if (from === "grams" && to === "pounds") {
    result = input * 0.00220462;
  } else if (from === "kilograms" && to === "grams") {
    result = input * 1000;
  } else if (from === "kilograms" && to === "kilograms") {
    result = input;
  } else if (from === "kilograms" && to === "pounds") {
    result = input * 2.20462;
  } else if (from === "pounds" && to === "grams") {
    result = input / 0.00220462;
  } else if (from === "pounds" && to === "kilograms") {
    result = input / 2.20462;
  } else if (from === "pounds" && to === "pounds") {
    result = input;
  }

  weightOutput.value = result;
});

// Function to switch between tabs
function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
