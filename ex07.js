// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

const validateEmail = function(email){
    let at = [ ("@")]
    let ending = [(".com")]

    validator = true
    
    for (i =0; i < email.length; i++){
        for (letter of email){
            if (email.includes(at) && email.includes(ending)){
                return true;

            }else return false
        }     
    } 
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false