/* 
Write a JavaScript function which returns random 6 digit numbers.
*/

function randomNumber() {
    x = Math.floor(100000 + Math.random() * 900000);
    return x;
}
console.log(randomNumber())
