// Q5) Replace wrong word with correct word in a sentence
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}
console.log(correctfn('I have a pen', 'pen', 'pencil'));
