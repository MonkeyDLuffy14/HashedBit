// Q1) Create an array of states in India and remove all names starting with vowels using array.filter
const states = ['Andhra Pradesh', 'Bihar', 'Uttar Pradesh', 'Karnataka', 'Odisha'];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);