// Write a JavaScript prototype method named befindobject, which finds a specific object from array of objects, it should extend array prototype

var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
];

Array.prototype.befindobject = function() {
    var lists = [];
    for(var i = 0; i < this.length; i++){
        lists.push(this[i].name);
    }
    console.log(lists);
}

sampleinput.befindobject()
