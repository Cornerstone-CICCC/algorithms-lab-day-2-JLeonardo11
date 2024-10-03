// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function(sentence){
    vowels = "aeiou"
    together = sentence.split(" ").join("");
    space = [" "]
    consonant = []
    for (i = 0; i < sentence.length ; i++){

        for (letter of together.split("")){
            if (!vowels.includes(letter)){
                consonant++
                
        
        }}
    
    return consonant


    }
}



console.log(countConsonants("hello world")); // Expected output: 7
