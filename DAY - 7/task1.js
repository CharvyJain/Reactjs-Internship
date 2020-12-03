// Write a JavaScript prototype method named beaddobject which extends Array prototype, to add a object with its value to the array of objects

var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
 ];
 
 Array.prototype.beaddobject = function (name, value) {
  this.forEach(function (object) {
    object[name] = value;
   });
  return this;
 };
 
 console.log(sampleinput.beaddobject("Country", "India"));
