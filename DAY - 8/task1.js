// Write a JavaScript prototype method named beremoveobject which extends Array prototype, to remove a object with its value from the array of objects.

var sampleinput= [
    {name:"John", age:26, Country:'India'},
    {name:"Siva", age:27, Country:'India'}
   ];
   
   Array.prototype.beremoveobject = function(obj) {
      var keys = Object.keys(obj);
      for(var i=0;i<this.length;i++){
         delete this[i][keys];
         }
      console.log(this);
}

sampleinput.beremoveobject({Country:"india"});
