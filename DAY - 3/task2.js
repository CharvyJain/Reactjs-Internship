/*
Create a function that takes an array of numbers and returns the second largest number.
*/

var inputArray = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	inputArray[i] = prompt('Enter five numbers ' + (i+1));
}
console.log(inputArray);

function secondLarge(inputArray){
    let num = inputArray.length;
    inputArray.sort();
    return inputArray[num-2];
}
console.log(secondLarge(inputArray));
