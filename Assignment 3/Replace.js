// Q3) Replace 'INDIA' with 'INDONESIA' using array.splice
let string = 'INDIA';
let arr = string.split('');
arr.splice(0, arr.length, ...'INDONESIA');
let output = arr.join('');
console.log(output);
