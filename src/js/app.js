let initialValue = '';
const screen = document.getElementById('screen-message');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.delete');
const result = document.querySelector('.result');

// Adicionar event listeners aos botões numéricos
numbers.forEach(button => {
  button.addEventListener('click', () => {
    updateScreen(button.textContent);
  });
});

const remainder = document.querySelector('.remainder');
  remainder.addEventListener('click', () => {
  updateScreen('%');
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    updateScreen(operator.textContent);
  });
});

del.addEventListener('click', () => {
  initialValue = initialValue.slice(0, -1)
  screen.textContent = initialValue;
});

result.addEventListener('click', () => {
  try {
    const result = eval(initialValue);
    if (!isFinite(result)) {
      throw new Error('Math ERROR');
    }
    screen.textContent = result;
    initialValue = '';
  } catch (error) {
    screen.textContent = error.message;
    console.error(error.message)
  }
});

const updateScreen = (value) => {
  initialValue += value;
  screen.textContent = initialValue;
}