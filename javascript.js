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

function selectDigit(digit) {
  if (charLimit(displayValue)) {
    displayValue += digit;
    display.textContent = displayValue;
  } else {
    return;
  }
}

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  selectDigit('1');
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
  selectDigit('2');
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
  selectDigit('3');
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
  selectDigit('4');
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
  selectDigit('5');
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
  selectDigit('6');
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  selectDigit('7');
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  selectDigit('8');
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  selectDigit('9');
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  if (displayValue === '0') {
    return;
  } else {
    selectDigit('0');
  }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
  if (displayValue.includes('.')) {
    return;
  } else {
    selectDigit('.');
  }
})

// Event Listeners for Operators

function selectOperator(op) {
  if (storedValue != '' && displayValue != '') {
    macroOperate();
  };

  if (operator != '') {
    clearOpClasses();
    operator = op;
    return;
  }

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

function clearOpClasses() {
  addButton.classList.remove('operator-selected');
  subButton.classList.remove('operator-selected');
  multButton.classList.remove('operator-selected');
  divButton.classList.remove('operator-selected');
}



function macroOperate() {
  clearOpClasses();

  if (displayValue === '0' && operator === '/') {
    window.open("https://youtu.be/dQw4w9WgXcQ");
    displayValue = '';
    storedValue = '';
    operator = '';
    return;
  }

  displayValue = operate(operator, parseFloat(storedValue), parseFloat(displayValue));
  displayValue = (Math.round(displayValue * 1000) / 1000);
  
  display.textContent = displayValue;
  storedValue = '';
  operator = '';
}

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  if (storedValue != '' && displayValue != '') {
    macroOperate();
  };
})

const clearAllButton = document.querySelector('#clear-all');
clearAllButton.addEventListener('click', () => {
  clearOpClasses();
  displayValue = '';
  storedValue = '';
  operator = '';
  display.textContent = '0';
});

const clearDispButton = document.querySelector('#clear-display');
clearDispButton.addEventListener('click', () => {
  displayValue = '';
  display.textContent = '0';
})

function charLimit(value) {
  return (value.length < 9 ? true : false);
}