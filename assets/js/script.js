//capturamos values del formulario

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = new FormData(form);
  // creamos nueva instancia de mascota y pasamos los values
  let newPet = new Pet(
    inputs.get("owner"),
    inputs.get("direction"),
    inputs.get("phone"),
    inputs.get("type"),
    inputs.get("petName"),
    inputs.get("diagnosis")
  );

  let result = document.getElementById("resultado");

  // agregamos respuesta
  result.innerHTML = `<li>${newPet.ownerData()}</li><li> El tipo de animal es un ${
    newPet._type
  }, mientras que el nombre de la mascota es ${
    newPet.pet_name
  } y la enfermedad es ${newPet.diagnosis}</li>`;
  form.reset();
});

//definimos la clase propietario y sus hijos y metodos solicitados

class Owner {
  constructor(name, direction, phone) {
    this.name = name;
    this.direction = direction;
    this.phone = phone;
  }
  ownerData() {
    return `El nombre del dueño es: <strong>${this.name}</strong>. 
    El domicilio es: <strong>${this.direction}</strong>, y el número de telefóno de contacto es: <strong>${this.phone}</strong>`;
  }
}

class Animal extends Owner {
  constructor(name, direction, phone, type) {
    super(name, direction, phone);
    this._type = type;
  }
  get type() {
    return `El tipo de animal es un: ${this._type}`;
  }
}

class Pet extends Animal {
  constructor(name, direction, phone, type, pet_name, diagnosis) {
    super(name, direction, phone, type);
    this._pet_name = pet_name;
    this._diagnosis = diagnosis;
  }
  get pet_name() {
    return this._pet_name;
  }
  set pet_name(new_pet_name) {
    this._pet_name = new_pet_name;
  }
  get diagnosis() {
    return this._diagnosis;
  }
  set diagnosis(new_diagnosis) {
    this._diagnosis = new_diagnosis;
  }
}
