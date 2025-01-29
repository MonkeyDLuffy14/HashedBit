// 1. Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function scopeExample() {
    if (true) {
        let letVariable = "I am block-scoped";
        const constVariable = "I am also block-scoped";
        var varVariable = "I am function-scoped";
    }
    // console.log(letVariable); // Error: letVariable is not defined
    // console.log(constVariable); // Error: constVariable is not defined
    console.log(varVariable); // Output: I am function-scoped
}
scopeExample(); // Example call

// 2. Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit() {
    return fruits[1];
}
console.log(getSecondFruit()); // Example call; Output: Banana

// 3. Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(array) {
    array.push("New Element");
    console.log(array)
    array.pop();
    return array;
}
console.log(modifyArray([1, 2, 3])); // Example call; Output: [1, 2, 3]

// 4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(array) {
    return array.map(num => num ** 2);
}
console.log(squareNumbers(numbers)); // Example call; Output: [1, 4, 9, 16, 25]

// 5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers.
function filterOddNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Example call; Output: [1, 3, 5]

// 6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and work as a ${person.occupation}.`);
}
greetPerson(person); // Example call; Output: Hello, my name is John, I am 30 years old and work as a Developer.

// 7. Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}
console.log(calculateArea({ width: 5, height: 10 })); // Example call; Output: 50

// 8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ name: "Alice", age: 25, city: "New York" })); // Example call; Output: ["name", "age", "city"]

// 9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // Example call; Output: { a: 1, b: 2 }

// 10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}
console.log(calculateSum([1, 2, 3, 4, 5])); // Example call; Output: 15
