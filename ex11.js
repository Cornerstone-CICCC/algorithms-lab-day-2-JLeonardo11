// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.
const  countWordOccurrences = function(excited, boring){
    let occurrencies = excited.split(" ")
    let countOccurrencies = 0
    for (i=0; i < occurrencies.length; i++) {
        if (occurrencies[i] === boring){
            countOccurrencies++;
        }
    }return countOccurrencies

}
console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2