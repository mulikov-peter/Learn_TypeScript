class Dog {
  constructor(name) {
    this.name = name;
  }
}

const rex = new Dog('Rex');
const fox = new Dog('Fox');

const age = 18;
const num = 4;
const name = 'alex';

console.log(rex.__proto__, Dog.prototype);
