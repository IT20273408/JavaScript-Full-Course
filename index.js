

let person = {
    name : 'Jaya',
    age:  30
};
person.name = 'Jaya';
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);