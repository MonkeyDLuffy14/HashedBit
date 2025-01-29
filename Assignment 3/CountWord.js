// Q9) Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word).length;
}
console.log(countWords('This is a sample paragraph with several words to count.'));
