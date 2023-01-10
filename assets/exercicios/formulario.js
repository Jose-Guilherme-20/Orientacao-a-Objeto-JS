class Form {
  items = [];
  method = "get";
  constructor(container, method, action) {
    this.container = document.querySelector(container);
    this.method = method;
    this.action = action;
  }

  addItem(item) {
    this.items.push(item);
  }
  render() {
    let formElement = document.createElement("form");
    formElement.setAttribute("Method", this.method);
    formElement.setAttribute("action", this.action);
    this.container.appendChild(formElement);

    for (let i in this.items) {
      this.items[i].render(formElement);
    }
  }
}

class Input {
  _type = "text";
  required = false;

  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  get type() {
    return this._type;
  }
  set type(x) {
    if (["text", "password", "email", "submit"].includes(x)) {
      this._type = x;
    } else {
      throw new Error(`Input "${x}" type doesn't exist`);
    }
  }
  render(formElement) {
    let el = document.createElement("input");
    el.type = this.type;
    el.name = this.name;
    el.placeholder = this.label;
    el.required = this.required;
    formElement.appendChild(el);
  }
}
class Botao extends Input {
  constructor(label) {
    super("", label);
    this.type = "submit";
  }

  render(formElement) {
    let botao = document.createElement("input");
    botao.type = this.type;
    botao.value = this.label;
    formElement.appendChild(botao);
  }
}

// IMPLEMENTAÇÃO

let form = new Form(".formArea", "POST", "hhtps://site.com.br");

// EMAIL
let email = new Input("email", "Digite seu e-mail");
email.type = "email";
email.required = true;
form.items.push(email);

// Senha
let password = new Input("password", "Digite sua senha");
password.type = "password";
form.items.push(password);

let botao = new Botao("submit");
form.items.push(botao);

form.render();
