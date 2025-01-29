//4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function productSum(n1, n2) {
    // Convert numbers to strings to process digits
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Make both strings equal length by padding with zeros
    while(str1.length < str2.length) {
        str1 = "0" + str1;
    }
    while(str2.length < str1.length) {
        str2 = "0" + str2;
    }
    
    let sum = 0;
    
    // Calculate product of corresponding digits and add to sum
    for(let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    
    return sum;
}

// Example usage:
console.log(productSum(6, 34));   
console.log(productSum(23, 45));   
console.log(productSum(123, 45));  