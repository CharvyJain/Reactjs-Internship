// Write a JavaScript prototype method named bevowel which extends string to find all vowels in the input string.

function word(x) {
   this.str = x;
}

const str = new word("hello");

word.prototype.bevowel = function() {
   const listOfVowels = 'aAeEiIoOuU';
    var result = '';
    for(var i = 0; i < this.str.length ; i++) {
       if (listOfVowels.indexOf(this.str[i]) !== -1) {
          result += this.str[i];
      }
    }
    console.log(result);
}

str.bevowel();
