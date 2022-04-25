const INITIAL_VALUE = 0;

const logo = document.getElementById('logo');
const logoPicker = document.getElementById('logo-picker');
const logoLabel = document.getElementById('logo-label');

function setValue(value) {
  logo.style.filter = `hue-rotate(${value}deg)`;
  logoPicker.value = value;
  logoLabel.textContent = `${value}º`;
}

setValue(INITIAL_VALUE);

function handleLogoPickerInput(event) {
  const {
    target: { value },
  } = event;
  setValue(value);
}
logoPicker.addEventListener('input', handleLogoPickerInput);
