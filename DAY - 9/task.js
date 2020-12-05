// Write a JavaScript prototype method named begetduplicate which extends Array prototype, to find duplicate values from array irrespective of their datatype.

Array.prototype.begetduplicate = function () {
  var duplicateValues = [];
  this.forEach((value) => {
    if (this.filter((x) => x === value).length > 1) {
      duplicateValues.push(value);
    }
  });
  return Array.from(new Set(duplicateValues));
};

var sampleinput = [96, 36, 26, 93, 26, 36];
console.log(sampleinput.begetduplicate());
