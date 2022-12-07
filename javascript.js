function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

function operate(op, a, b) {
  if (op === '+') {
    return add(a, b);
  } else if (op === '-') {
    return subtract(a, b);
  } else if (op === '*') {
    return multiply(a, b);
  } else if (op === '/') {
    return divide(a, b);
  }
};

let displayValue = '';

const display = document.querySelector('#display');

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  displayValue += '1';
  display.textContent = displayValue;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
  displayValue += '2';
  display.textContent = displayValue;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
  displayValue += '3';
  display.textContent = displayValue;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
  displayValue += '4';
  display.textContent = displayValue;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
  displayValue += '5';
  display.textContent = displayValue;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
  displayValue += '6';
  display.textContent = displayValue;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  displayValue += '7';
  display.textContent = displayValue;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  displayValue += '8';
  display.textContent = displayValue;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  displayValue += '9';
  display.textContent = displayValue;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  if (displayValue === '') {
    return;
  } else {
    displayValue += '0';
    display.textContent = displayValue;  
  }
});