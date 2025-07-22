const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Simple Calculator");
console.log("Enter format: number1 operator number2 (e.g., 4 + 5)");

rl.question('Enter calculation: ', (input) => {
  const parts = input.split(' ');
  const num1 = parseFloat(parts[0]);
  const operator = parts[1];
  const num2 = parseFloat(parts[2]);

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      break;
    default:
      result = 'Invalid operator';
  }

  console.log(`Result: ${result}`);
  rl.close();
});
