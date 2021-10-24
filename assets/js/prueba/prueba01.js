/**1 - // Guardar los siguientes datos del usuario
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 * y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque
 */

const btnUser = document.getElementById("btnUser");
const labelh2 = document.getElementById("welcome");

//Funciones

const userData = () => {
  //solicita datos
  let name = prompt("Escriba su nombre");
  let lastName = prompt("Escriba su Apellido");
  let age = prompt("Escriba su Edad");
  let phone = prompt("Escriba su Telefono");
  let cellphone = prompt("Escriba su Número de celular");
  let address = prompt("Escriba su Dirección");

  if (
    name == null ||
    lastName == null ||
    age == null ||
    phone == null ||
    cellphone == null ||
    address == null ||
    name == "" ||
    lastName == "" ||
    age == "" ||
    phone == "" ||
    cellphone == "" ||
    address == null
  ) {
    return alert(
      "NO ha escrito alguna o toda la informacion de manera adecuada"
    );
  }
  // almacena en Storage
  localStorage.setItem("name", name);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("age", age);
  localStorage.setItem("phone", phone);
  localStorage.setItem("cellphone", cellphone);
  localStorage.setItem("address", address);

  //muestra en el front-end
  labelh2.innerHTML = `Bienvenido/a ${name} ${lastName}, su edad es ${age}, su número de telefono es ${phone}, su número de celular es ${cellphone} y se encuentra ubicado en la dirección ${address}`;
};

//Valida si tiene valor para mostrarlo apenas empieza la pagina
if (
  localStorage.getItem("name") &&
  localStorage.getItem("lastName") &&
  localStorage.getItem("age") &&
  localStorage.getItem("phone") &&
  localStorage.getItem("cellphone") &&
  localStorage.getItem("address")
) {
  labelh2.innerHTML = `Bienvenido/a ${localStorage.getItem("name")} ${localStorage.getItem("lastName")}, su edad es ${localStorage.getItem("age")}, su número de telefono es ${localStorage.getItem("phone")}, su número de celular es ${localStorage.getItem("cellphone")} y se encuentra ubicado en la dirección ${localStorage.getItem("address")}`;
}

//Eventos Click
//Eventos en general
btnUser.onclick = function () {
  userData();
};
