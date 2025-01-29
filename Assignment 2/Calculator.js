//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculator(num1, num2, operation) {
    let result;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;
        default:
            return "Invalid operation";
    }
    
    return result;
}

console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 5, '*')); // Output: 50
console.log(calculator(10, 5, '/')); // Output: 2