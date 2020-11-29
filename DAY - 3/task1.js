/*
Create a javascript function that takes an integer and returns whether it's a repeated one or not print true if it's repeated else print false.
*/

function checkRepeat(x) {
    firstPlace = x % 10;
    num = x / 10;
    secondPlace = num % 10;
    if (firstPlace == secondPlace){
        console.log("True");   
    } else {
        console.log("False");
    }
}
checkRepeat(265);
