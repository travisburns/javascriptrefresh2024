// console.log('hello world');


// console.error('this is an error');
// console.warn('THis is a warning');



//Variables and how to set them 

//var, es6: let: reasign values, const: constant value

// let age = 30;
// age = 31; 

// console.log(age);





//strings, numbers, boolean, null, undefined, symbol 


// const name = 'John'; //string
// const age = 30; 
// const isCool = true;
// const rating = 4.5;
// const x = null; 
// const y = undefined;
// let z;

// console.log(typeof rating);


//concatenation 
// const name = 'John'; //string
// const age = 30; 

// const hello = `My name is ${name} and I am ${age}`


//string methods

// const s = "hello world";

// console.log();


//array methods
//constructor method
// const numbers = new Array(1, 2, 3);

// console.log(numbers)
//traditional method

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// console.log(fruits[1]);


/*   
multiline comments

*/


//object literals

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }


// console.log(person.hobbies[1]);

// const { firstName, lastName, address: {city} } = person;

// person.email = 'john@gmail.com'

// const todos = [
//     {
//        id: 1,
//        text: 'Take out the trash', 
//        isCompleted: true
//     },

//     {
//         id: 2,
//         text: 'Meeting with boss', 
//         isCompleted: true
//      },

//      {
//         id: 3,
//         text: 'Dentist appt', 
//         isCompleted: false
//      },



// ]

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);


//For loops

for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}


//while loop 

let i = 0; 
while(i < 10) {
    console.log(`While Lopp Number: ${i}`)
    i++;
}
//for of loop. the todo is any value within todos 

for(let todo of todos) {
    console.log(todo.text)
}

