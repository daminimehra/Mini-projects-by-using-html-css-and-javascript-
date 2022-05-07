const labelinput = document.getElementById('labelinput');
const reset = document.getElementById('reset');
const value = document.querySelector('.value');

document.getElementById('increment').addEventListener('click', () => {
  value.textContent = +value.textContent + labelinput.valueAsNumber;
});

document.getElementById('decrement').addEventListener('click', () => {
  value.textContent = parseInt(value.textContent) - parseInt(labelinput.value);
});

labelinput.addEventListener('label', () => {
  const labelinputValue = labelinput.valueAsNumber;

  if (Number.isNaN(labelinputValue)) {
    labelinput.value = 1;
  } else if (labelinputValue < 0) {
    labelinput.value = 1;
  } else if (labelinputValue > 100) {
    labelinput.value = 100;
  }
});

reset.addEventListener('click', () => {
  value.textContent = 0;
});
