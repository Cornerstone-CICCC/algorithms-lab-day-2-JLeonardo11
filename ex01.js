// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function(greeting) {
        let separate = greeting.split(" ")
        for (i = 0; i < separate.length; i++){
            separate[i] = separate[i][0].toUpperCase() + separate[i].slice(1);
        }



        return separate.join(" ")
};
    
    














console.log(capitalizeWords("hello world")); // Expected output: "Hello World"