// Common JS Module Syntax
// const person = require('./mymodule_one');
// ES2015 Module
// import { person, sayHello } from './mymodule_two';
// import * as mod from './mymodule_two';
import greeting from './mymodule_two';


// console.log(mod.person.name);

// console.log(mod.sayHello());

console.log(greeting);


const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
