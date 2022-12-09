// Arithmetic Functions

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

// Operate Function

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

// Event Listeners for Buttons

let displayValue = '';
let storedValue = '';
let operator = '';

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

// Event Listeners for Operators

function selectOperator(op) {
  storedValue = displayValue;
  displayValue = '';
  operator = op;
}

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
  selectOperator('+');
  addButton.classList.add('operator-selected');
})

const subButton = document.querySelector('#subtract');
subButton.addEventListener('click', () => {
  selectOperator('-');
  subButton.classList.add('operator-selected');
})

const multButton = document.querySelector('#multiply');
multButton.addEventListener('click', () => {
  selectOperator('*');
  multButton.classList.add('operator-selected');
})

const divButton = document.querySelector('#divide');
divButton.addEventListener('click', () => {
  selectOperator('/');
  divButton.classList.add('operator-selected');
})

// Equals

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  displayValue = operate(operator, parseFloat(storedValue), parseFloat(displayValue));
  addButton.classList.remove('operator-selected');
  subButton.classList.remove('operator-selected');
  multButton.classList.remove('operator-selected');
  divButton.classList.remove('operator-selected');
  
  display.textContent = displayValue;
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  displayValue = '';
  display.textContent = '0';
})