class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

// Factory é uma fnção que cria objetos

function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}

let p1 = createPerson("José", 21);
console.log(p1.name + " " + p1.age);
