// Orientação a Objetos
// JS é programação Procedural

class Person {
  _age = 0;
  setps = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  takeAstep() {
    return this.setps++;
  }

  get age() {
    return this._age;
  }
  set age(idade) {
    if (typeof idade == "number") {
      this._age = idade;
    }
  }
}

const p1 = new Person("João", "Gabriel");
const p2 = new Person("Jorge");
const p3 = new Person("José");

p1.age = 20;
console.log(`${p1.fullName} ${p1.age}`);
