// Q8) Repeated sum of digits until a single digit
function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
console.log(repeatedSum(456));