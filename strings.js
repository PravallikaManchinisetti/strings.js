/*str = 'Life, the universe and everything. Answer:';             //length
console.log(str.length);

myString = "bluebells";
myString.length = 4;// Attempting to assign a value to a string's .length property has no observable effect. 
console.log(myString);
console.log(myString.length);
  


paragraph = "The quick brown fox jumps over the lazy dog."// expected output: "The index of the first "dog" from the beginning is 40
searchTerm = 'dog';
indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);


console.log('hello world'.indexOf('')); // returns 0
console.log('hello world'.indexOf('', 0)); // returns 0
console.log('hello world'.indexOf('', 3)); // returns 3
console.log('hello world'.indexOf('', 8)); // returns 8


console.log('hello world'.indexOf('', 11)); // returns 11
console.log('hello world'.indexOf('', 13)); // returns 11
console.log('hello world'.indexOf('', 22));s // returns 11



a='Blue Whale';
console.log(a.indexOf('Blue'));      // returns  0
console.log(a.indexOf('Blute'));     // returns -1
console.log(a.indexOf('Whale', 0));  // returns  5
console.log(a.indexOf('Whale', 5));  // returns  5
console.log(a.indexOf('Whale', 7));  // returns -1
console.log(a.indexOf(''));          // returns  0
console.log(a.indexOf('', 9));       // returns  9
console.log(a.indexOf('', 10));     // returns 10
console.log(a.indexOf('', 11));      // returns 10
console.log(a.indexOf('B'));
console.log(a.indexOf('l'));

console.log(a.indexOf('blue'));        // returns -1//case sensitive



console.log(a.indexOf('Blue') !== -1);  // true
console.log(a.indexOf('Bloe') !== -1);  // false
console.log(~(a.indexOf('Bloe'))); // 0, which is falsy

str = 'Brave new world'

console.log(str.indexOf('w'))   // 8
console.log(str.indexOf('new'))   //  6


str = 'Mozilla';
console.log(str.substring(1, 3));// expected output: "oz"
console.log(str.substring(2));// expected output: "zilla"



anyString = 'Mozilla'
anyString4 = anyString.substring(anyString.length - 4)// Displays 'illa' the last 4 characters
console.log(anyString4);



text = 'Mozilla'
console.log(text.substring(5, 2))  // => "zil" 
console.log(text.slice(5, 2))      // => ""

text = 'Mozilla'
console.log(text.substring(-5, 2))  // "Mo"
console.log(text.substring(-5, -2)) // ""

text = 'Mozilla'
console.log(text.slice(-5, 2))   // => ""
console.log(text.slice(-5, -2))  // => "zil"s

s_prim = 'foo'
s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"

s1 = '2 + 2'              // creates a string primitive
s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"

s2 = new String('2 + 2')
console.log(eval(s2.valueOf()))  // returns the number 4


longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "othsserwise my code is unreadable.";
                 console.log(longString)


longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
console.log(longString);


sentence = 'The quick brown fox jumps over the lazy dog.';
index = 4;
console.log(sentence.charAt(index));



str1 = 'Hello';
str2 = 'World';
console.log(str1.concat(' ', str2));   // expected output: "Hello World"
console.log(str2.concat(', ', str1));  // expected output: "World, Hello"

str1 = 'Hello';
str2 = 'World';
str3=  'intern'
console.log(str1.concat(' ', str2,str3));   
console.log(str2.concat(', ', str1,str3));  


hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))   // Hello, Kevin. Have a nice day.
greetList = ['Hello', ' ', 'Venkat', '!']
console.log("".concat(...greetList));  // "Hello Venkat!"
console.log("".concat({}));    // [object Object]
console.log("".concat([]));    // ""
console.log("".concat(null));  // "null"
console.log("".concat(true));  // "true"
console.log("".concat(4, 5));  // "45"


sentence = 'The quick brown fox jumps over the lazy dog.';
word = 'fox';
console.log(sentence.includes(word));

console.log('Blue Whale'.includes('blue'));  // returns false


str = 'To be, or not to be, that is the question.' 
console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true


str1 = 'Cats are the best!';
console.log(str1.endsWith('best', 17));   // expected output: true
str2 = 'Is this a question';
console.log(str2.endsWith('?'));// expected output: false


// The letter "a" is before "c" yielding a negative value
console.log('a'.localeCompare('c')); // -2 or -1 (or some other negative value)
console.log('2'.localeCompare('1'));
console.log('1'.localeCompare('2'));
console.log('def'.localeCompare('abc'));
console.log('tio'.localeCompare('gkd'));
console.log('a'.localeCompare('a'));

console.log('a'.localeCompare('z', 'de')); 
console.log('a'.localeCompare('z', 'sv')); 



paragraph = 'The quick brown fox jumps over the lazy dog. It barked. Use the ele.';// expected output: Array ["T", "I"]
regex = /[A-Z]/g;
found = paragraph.match(regex);
console.log(found);



const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[1]);// expected output: Array ["test2", "e", "st2", "2"]


 string1 = '\u00F1';            // A
string2 = '\u006E\u0303';      // n

console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2



chorus = 'Because I\'m happy. ';
console.log(chorus.repeat(3));


a='abc';
//console.log(a.repeat(-1));    // RangeError
console.log(a.repeat(0));     // ''
console.log(a.repeat(1));     // 'abc'
console.log(a.repeat(2));     // 'abcabc'
console.log(a.repeat(3.5));   // 'abcabcabc' (count will be converted to integer)
//console.log(a.repeat(1/0));   // RangeError


p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
regex = /dog/gi;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
regex = 'over'
console.log(paragraph.search(regex));
// expected output: 26

str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false


dotted = 'İstanbul';
console.log(dotted.toLocaleLowerCase());
// expected output: "i̇stanbul"
console.log(dotted.toLocaleUpperCase());
// expected output: "istanbul"


sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());


sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trim());
// expected output: "Hello world!";

greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimStart());
// expected output: "Hello world!   ";

greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimEnd());
// expected output: "   Hello world!";

*/


