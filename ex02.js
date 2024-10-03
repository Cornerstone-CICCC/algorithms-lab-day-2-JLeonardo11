// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].


const arrayDifference = function(Arr1, Arr2){
    Arr3 = []

    for (const Numb of Arr1){
        if (!Arr2.includes(Numb)) {
            Arr3.push(Numb);
        }
    }
    return Arr3
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]