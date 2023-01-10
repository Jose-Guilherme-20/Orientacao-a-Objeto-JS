// Herança POO
// Super pode executar metodos da classe Pai

class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
}

let p1 = new Student("José", 1);
console.log(p1.age);
