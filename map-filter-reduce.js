/*Define a function sum() and a 
function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers
*/

const nums = [4,3,2,1];
const sum = () => {
    const res = nums.reduce((prev, current) => prev+current);
    console.log(res);
}

const multiply = () => {
    const res = nums.reduce((prev, current) => prev*current);
    console.log(res);
}
sum();
multiply();


/*
Define a function reverse() that computes the reversal of a string
*/
const strReverse = (str) => {
    return str.split('').reverse().join('')
}
console.log(strReverse('Somal Chakraborty'));

/*
 Write a function filterLongWords() that takes an array of words and an integer 
 i and returns the array of words that are longer than i
*/
const filterLongWords = (words, len) => {
    const filteredWords = words.filter(word => word.length>len);
    return filteredWords;
}

console.log(filterLongWords(["this","is",'their',"dream"], 3));