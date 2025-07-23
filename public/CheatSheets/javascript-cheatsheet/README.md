# ⚡ JavaScript Cheatsheet

A comprehensive reference guide for JavaScript programming language, including ES6+ features and modern syntax.

## 📝 Basic Syntax

### Variables & Data Types

```javascript
// Variable declarations
var oldWay = "not recommended";
let modernWay = "block-scoped";
const constant = "cannot be reassigned";

// Data types
let string = "Hello World";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbol = Symbol("description");
let bigInt = 9007199254740991n;

// Objects
let object = { key: "value" };
let array = [1, 2, 3];
let function = function() {};

// Type checking
typeof "string"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof null; // "object" (bug in JS)
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"

// Nullish coalescing (ES2020)
let value = null ?? "default"; // "default"
let value2 = 0 ?? "default"; // 0

// Optional chaining (ES2020)
let user = { name: "John", address: { city: "NYC" } };
let city = user?.address?.city; // "NYC"
let zip = user?.address?.zip; // undefined
```

### Template Literals (ES6)

```javascript
let name = "John";
let age = 25;

// Basic template literal
let message = `Hello ${name}, you are ${age} years old`;

// Multi-line strings
let multiLine = `
    This is a
    multi-line
    string
`;

// Expression evaluation
let result = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"

// Tagged templates
function tag(strings, ...values) {
    return strings.reduce((result, str, i) => 
        result + str + (values[i] || ''), '');
}
```

## 🔄 Control Flow

### Conditional Statements

```javascript
// If-else
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Ternary operator
let result = condition ? "yes" : "no";

// Switch statement
switch (value) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Unknown");
}

// Logical operators
let result1 = true && "value"; // "value"
let result2 = false || "default"; // "default"
let result3 = !true; // false
```

### Loops

```javascript
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
while (condition) {
    // code
}

// Do-while loop
do {
    // code
} while (condition);

// For...of (ES6) - iterates over values
for (let item of array) {
    console.log(item);
}

// For...in - iterates over keys
for (let key in object) {
    console.log(key, object[key]);
}

// Array methods
array.forEach(item => console.log(item));
array.map(item => item * 2);
array.filter(item => item > 5);
array.reduce((acc, item) => acc + item, 0);
```

## 📦 Functions

### Function Declarations

```javascript
// Function declaration
function greet(name) {
    return `Hello ${name}`;
}

// Function expression
const greet = function(name) {
    return `Hello ${name}`;
};

// Arrow function (ES6)
const greet = (name) => `Hello ${name}`;
const greet = name => `Hello ${name}`; // Single parameter
const greet = () => "Hello World"; // No parameters
const greet = (name, age) => `Hello ${name}, you are ${age}`; // Multiple parameters

// Arrow function with block body
const greet = (name) => {
    const message = `Hello ${name}`;
    return message;
};
```

### Function Parameters

```javascript
// Default parameters (ES6)
function greet(name = "World") {
    return `Hello ${name}`;
}

// Rest parameters (ES6)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Destructuring parameters
function greet({ name, age }) {
    return `Hello ${name}, you are ${age}`;
}

// Call function with destructuring
greet({ name: "John", age: 25 });
```

### Higher-Order Functions

```javascript
// Function that returns a function
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyByTwo = multiply(2);
multiplyByTwo(5); // 10

// Arrow function version
const multiply = x => y => x * y;
```

## 🏗️ Objects & Arrays

### Object Literals

```javascript
// Basic object
const person = {
    name: "John",
    age: 25,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

// Shorthand property names (ES6)
const name = "John";
const age = 25;
const person = { name, age };

// Computed property names (ES6)
const key = "name";
const person = {
    [key]: "John",
    [`${key}Length`]: key.length
};

// Object destructuring (ES6)
const { name, age } = person;
const { name: personName, age: personAge } = person;

// Object spread (ES2018)
const personCopy = { ...person };
const personWithJob = { ...person, job: "Developer" };
```

### Arrays

```javascript
// Array creation
const array = [1, 2, 3];
const array2 = new Array(1, 2, 3);
const array3 = Array.from("hello"); // ["h", "e", "l", "l", "o"]

// Array destructuring (ES6)
const [first, second, third] = array;
const [first, ...rest] = array; // rest = [2, 3]

// Array spread (ES6)
const newArray = [...array, 4, 5];
const combined = [...array1, ...array2];

// Array methods
array.push(4); // Add to end
array.pop(); // Remove from end
array.unshift(0); // Add to beginning
array.shift(); // Remove from beginning
array.splice(1, 1); // Remove elements
array.slice(1, 3); // Extract portion
array.indexOf(2); // Find index
array.includes(2); // Check if exists (ES7)
array.find(item => item > 2); // Find first match
array.findIndex(item => item > 2); // Find index of first match
```

## 🎯 Modern JavaScript Features

### Destructuring (ES6)

```javascript
// Object destructuring
const { name, age, ...rest } = person;

// Array destructuring
const [first, second, ...rest] = array;

// Nested destructuring
const { address: { city, country } } = person;

// Default values
const { name = "Unknown", age = 0 } = person;
const [first = 0, second = 0] = array;
```

### Classes (ES6)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }

    static create(name, age) {
        return new Person(name, age);
    }

    get info() {
        return `${this.name} is ${this.age} years old`;
    }

    set info(value) {
        [this.name, this.age] = value.split(' ');
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying`;
    }
}
```

### Modules (ES6)

```javascript
// Exporting
export const name = "John";
export function greet() { return "Hello"; }
export default class Person { }

// Named exports
export { name, greet };

// Default export
export default Person;

// Importing
import Person, { name, greet } from './module.js';
import * as module from './module.js';
import { name as personName } from './module.js';
```

### Promises & Async/Await

```javascript
// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Promise.all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Async/await (ES2017)
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Async arrow function
const fetchData = async () => {
    const response = await fetch('/api/data');
    return response.json();
};
```

## 🔧 Built-in Methods

### String Methods

```javascript
const str = "Hello World";

str.length; // 11
str.charAt(0); // "H"
str.charCodeAt(0); // 72
str.indexOf("World"); // 6
str.lastIndexOf("l"); // 9
str.includes("World"); // true (ES6)
str.startsWith("Hello"); // true (ES6)
str.endsWith("World"); // true (ES6)
str.slice(0, 5); // "Hello"
str.substring(0, 5); // "Hello"
str.substr(0, 5); // "Hello" (deprecated)
str.split(" "); // ["Hello", "World"]
str.replace("World", "JavaScript");
str.toLowerCase(); // "hello world"
str.toUpperCase(); // "HELLO WORLD"
str.trim(); // Remove whitespace
str.repeat(3); // "Hello WorldHello WorldHello World" (ES6)
```

### Number Methods

```javascript
const num = 3.14159;

num.toFixed(2); // "3.14"
num.toPrecision(3); // "3.14"
num.toString(); // "3.14159"
num.valueOf(); // 3.14159

// Static methods
Number.parseInt("123"); // 123
Number.parseFloat("123.45"); // 123.45
Number.isInteger(123); // true (ES6)
Number.isNaN(NaN); // true (ES6)
Number.isFinite(123); // true (ES6)
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
```

### Array Methods

```javascript
const array = [1, 2, 3, 4, 5];

// Mutating methods
array.push(6); // Add to end
array.pop(); // Remove from end
array.unshift(0); // Add to beginning
array.shift(); // Remove from beginning
array.splice(1, 1); // Remove elements
array.reverse(); // Reverse array
array.sort(); // Sort array

// Non-mutating methods
array.slice(1, 3); // Extract portion
array.concat([6, 7]); // Combine arrays
array.join(", "); // "1, 2, 3, 4, 5"
array.indexOf(3); // 2
array.lastIndexOf(3); // 2
array.includes(3); // true (ES7)

// Functional methods
array.forEach(item => console.log(item));
array.map(item => item * 2); // [2, 4, 6, 8, 10]
array.filter(item => item > 2); // [3, 4, 5]
array.reduce((acc, item) => acc + item, 0); // 15
array.find(item => item > 3); // 4 (ES6)
array.findIndex(item => item > 3); // 3 (ES6)
array.every(item => item > 0); // true
array.some(item => item > 3); // true
```

### Object Methods

```javascript
const obj = { name: "John", age: 25 };

// Static methods
Object.keys(obj); // ["name", "age"]
Object.values(obj); // ["John", 25] (ES2017)
Object.entries(obj); // [["name", "John"], ["age", 25]] (ES2017)
Object.assign({}, obj); // Create copy (ES6)
Object.freeze(obj); // Make immutable
Object.seal(obj); // Prevent adding/deleting properties
Object.is(obj1, obj2); // Strict equality (ES6)
Object.create(proto); // Create with prototype
Object.defineProperty(obj, 'key', { value: 'value' });

// Instance methods
obj.hasOwnProperty('name'); // true
obj.toString(); // "[object Object]"
obj.valueOf(); // Returns the object
```

## 🛠️ Error Handling

```javascript
// Try-catch
try {
    // Risky code
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    // Always executed
    console.log("Cleanup");
}

// Custom errors
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'CustomError';
        this.code = code;
    }
}

// Error types
new Error("General error");
new TypeError("Type error");
new ReferenceError("Reference error");
new SyntaxError("Syntax error");
new RangeError("Range error");
```

## 📚 Advanced Concepts

### Closures

```javascript
function outer() {
    let count = 0;
    
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### Prototypes

```javascript
// Constructor function
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

// Prototype chain
const person = new Person("John");
person.hasOwnProperty('name'); // true
person.hasOwnProperty('greet'); // false
person.__proto__.hasOwnProperty('greet'); // true
```

### Event Handling

```javascript
// DOM events
element.addEventListener('click', function(event) {
    console.log('Clicked!');
});

// Event delegation
document.addEventListener('click', function(event) {
    if (event.target.matches('.button')) {
        console.log('Button clicked!');
    }
});

// Custom events
const event = new CustomEvent('custom', { detail: { data: 'value' } });
element.dispatchEvent(event);
```

## 🎯 Best Practices

### Code Organization

```javascript
// Use const by default, let when needed
const PI = 3.14159;
let counter = 0;

// Use meaningful variable names
const userName = "John"; // Good
const u = "John"; // Bad

// Use template literals for strings
const message = `Hello ${name}`; // Good
const message = "Hello " + name; // Bad

// Use arrow functions for callbacks
array.map(item => item * 2); // Good
array.map(function(item) { return item * 2; }); // Bad

// Use destructuring
const { name, age } = person; // Good
const name = person.name; // Bad
const age = person.age; // Bad
```

### Performance Tips

```javascript
// Cache DOM queries
const element = document.getElementById('myElement'); // Good
document.getElementById('myElement').style.color = 'red'; // Bad

// Use event delegation
document.addEventListener('click', handleClick); // Good
elements.forEach(el => el.addEventListener('click', handleClick)); // Bad

// Avoid global variables
(function() {
    const localVar = 'local';
})(); // Good
const globalVar = 'global'; // Bad
```

## 🔗 Useful Resources

- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

---

**Happy coding! ⚡** 