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

// Variavel estáticos
// métodos estáticos
// static não necessita de criar um novo objeto

class Pessoa {
  static hands = 2;
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

let p2 = new Pessoa("pedro");
console.log(p2.name + " " + Pessoa.hands);
