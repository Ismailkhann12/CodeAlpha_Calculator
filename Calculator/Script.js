 const display = document.getElementById('display');
  let currentInput = '';
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      handleInput(value);
    });
  });

  document.addEventListener('keydown', e => {
    const key = e.key;
    if (/\d|\+|\-|\*|\/|\./.test(key)) {
      handleInput(key);
    } else if (key === 'Enter') {
      handleInput('=');
    } else if (key === 'Backspace' || key === 'c' || key === 'C') {
      handleInput('C');
    }
  });

  function handleInput(value) {
    if (value === 'C') {
      currentInput = '';
      updateDisplay('0');
    } else if (value === '=') {
      try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = String(result);
      } catch {
        updateDisplay('Error');
        currentInput = '';
      }
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  }

  function updateDisplay(value) {
    display.textContent = value;
  }