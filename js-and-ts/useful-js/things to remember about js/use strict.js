//'use strict';
//Use strict can be applied to entire script or to a function

/******     Accidental Globals   ******/
mistypeVariable = 17; 


/******     Silent fail assignments    ******/
// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError


/******    Throw deletion of undeletable properties   ******/
delete Object.prototype;

/******    Duplicate Params    ******/
function sum(a, a, c) { // !!! syntax error  
  return a + a + c; // wrong if this code ran
}


/******    Forbids a 0-prefixed octal literal or octal escape    ******/
//Outside strict mode, a number beginning with a 0, such as 0644, 
//is interpreted as an octal number (0644 === 420), if all digits are smaller than 8.
var myvar = 0644;  //!!! syntax error

//Octal escape sequences, such as "\45", which is equal to "%", 
//can be used to represent characters by extended-ASCII character code numbers in octal.


/******    Forbids setting props on Primitives   ******/
(function() {
//'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();


// Duplicate property names used to be a syntax error 
// Now the second property just overwrites the first
var o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015