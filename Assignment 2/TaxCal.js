//3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

function findTax(salary) {
    let tax = 0;
    
    switch(true) {
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        case (salary > 1000000):
            tax = salary * 0.20;
            break;
        case (salary > 500000):
            tax = salary * 0.10;
            break;
        case (salary > 0):
            tax = 0;
            break;
        default:
            return "Invalid salary amount";
    }
    
    return tax;
}

console.log(findTax(400000));   // Output: 0
console.log(findTax(600000));   // Output: 60000
console.log(findTax(1200000));  // Output: 240000
console.log(findTax(2000000));  // Output: 600000