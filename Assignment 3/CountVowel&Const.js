// Q4) Count vowels and consonants in a string
let text = 'This is an example string with more than twenty characters';
let vowelsCount = (text.match(/[aeiouAEIOU]/g) || []).length;
let consonantsCount = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
console.log({ vowelsCount, consonantsCount });
