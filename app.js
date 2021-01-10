// //Log to console

// console.log('Hello World');


// //var, let, const
// var name  = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// //Multi word vars
// var firstName = 'John'; //Camel case
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom'; //Pascal case


// LET
// let name;
// var name  = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// // Can not reassign
// // name = 'Sara';
// // Have to assign a value
// // const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

// //PRIMITIVE
// //String
// const name = 'John Doe';
// //Number
// const age = 45;
// //Booean
// const hasKids = true;
// //Null - returns Object as type, but this is a bug
// const car = null;
// //Undefined
// let test;
// //Symbol
// const sym = Symbol();

// //REFERENCE TYPES - Objects
// //Array
// const hobbies = ['movies', 'music']
// //Object literal
// const address = {
//   city: 'Boston',
//   stat: 'MA'
// }
// const today = new Date();

// // console.log(today);

// let val;

// //Number to string
// val = String(555);
// val = String(4+4);
// //Bool to string
// val = String(true);
// //Date to string
// val = String(new Date());
// //Array to string
// val = String([1,2,3,4]);

// //toString()
// vale = (5).toString();

// //String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100');
// val = parseFloat('100.30');


// //Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// //NUMBERS & THE MATH OBJECT
// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.4);
// val = Math.sqrt(65);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,33,4,1,55,16);
// val = Math.max(2,33,4,1,55,16);
// val = Math.random();
// val = Math.floor(Math.random() * 20+1);

// console.log(val);

// //STRING METHODS & CONCATENATION
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there, my name is Matt'
// const tags = 'web design,web development,progr'

// let val

// val = firstName + lastName;

// //Concatenation
// val = firstName + ' ' + lastName;

// //Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping
// val = 'That\'s awesome, I can\'t wait';

// //Length
// val = firstName.length;

// //concat
// val = firstName.concat(' ', lastName);

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //indexOf
// val = firstName.indexOf('l')
// val = firstName.lastIndexOf('l')

// //charAt()
// val = firstName.charAt('2');
// //Get last char
// val = firstName.charAt(firstName.length - 1);

// //substring()
// val = firstName.substring(0,4);

// //slice() - mostly used with arrays but also strings
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// //split()
// val = str.split(' ');
// val = tags.split(',');

// //replace()
// val = str.replace('Matt', 'Jack');

// //includes()
// val = str.includes('Hello');

// console.log(val);




//***************** */
//TEMPLATE LITERALS
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

function hello(){
  return 'hello';
}

//With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;