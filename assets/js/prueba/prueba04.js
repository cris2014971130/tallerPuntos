// 4 - ingresar uno de los 32 departamentos de colombia  en un prompt
// y decir cual es su respectiva capital en un alert de respuesta

const btnUser = document.getElementById("btnUser");
const labelh2 = document.getElementById("welcome");

const userData = () => {
  let word = prompt("Escriba el departamento");
  if (word == null || word == "") {
    return alert("El departamento es incorrecto o no ha ingresado un dato");
  }
  switch (word.toLowerCase()) {
    case "amazonas":
      labelh2.innerHTML = "La capital es Leticia";
      break;
    case "antioquia":
      labelh2.innerHTML = "La capital es Medellin";
      break;
    case "arauca":
      labelh2.innerHTML = "La capital es Arauca";
      break;
    case "atlantico":
      labelh2.innerHTML = "La capital es Barranquilla";
      break;
    case "bolivar":
      labelh2.innerHTML = "La capital es Cartagena de Indias";
      break;
    case "boyaca":
      labelh2.innerHTML = "La capital es Tunja";
      break;
    case "caldas":
      labelh2.innerHTML = "La capital es Manizales";
      break;
    case "caqueta":
      labelh2.innerHTML = "La capital es Florencia";
      break;
    case "casanare":
      labelh2.innerHTML = "La capital es Yopal";
      break;
    case "cauca":
      labelh2.innerHTML = "La capital es Popayan";
      break;
    case "cesar":
      labelh2.innerHTML = "La capital es Valledupar";
      break;
    case "choco":
      labelh2.innerHTML = "La capital es Quibdo";
      break;
    case "cordoba":
      labelh2.innerHTML = "La capital es Monteria";
      break;
    case "cundinamarca":
      labelh2.innerHTML = "La capital es Bogota";
      break;
    case "guainia":
      labelh2.innerHTML = "La capital es Inirida";
      break;
    case "guaviare":
      labelh2.innerHTML = "La capital es San Jose del Guaviare";
      break;
    case "huila":
      labelh2.innerHTML = "La capital es Neiva";
      break;
    case "la guajira":
      labelh2.innerHTML = "La capital es Riohaca";
      break;
    case "magdalena":
      labelh2.innerHTML = "La capital es Santa Marta";
      break;
    case "meta":
      labelh2.innerHTML = "La capital es Villavicencio";
      break;
    case "nariño":
      labelh2.innerHTML = "La capital es San Juan de Pasto";
      break;
    case "norte de santander":
      labelh2.innerHTML = "La capital es Cucuta";
      break;
    case "putumayo":
      labelh2.innerHTML = "La capital es Mocoa";
      break;
    case "quindio":
      labelh2.innerHTML = "La capital es Armenia";
      break;
    case "risaralda":
      labelh2.innerHTML = "La capital es Pereira";
      break;
    case "san andres y providencia":
      labelh2.innerHTML = "La capital es San Andres";
      break;
    case "santander":
      labelh2.innerHTML = "La capital es Bucaramanga";
      break;
    case "sucre":
      labelh2.innerHTML = "La capital es Sincelejo";
      break;
    case "tolima":
      labelh2.innerHTML = "La capital es Ibague";
      break;
    case "valle del cauca":
      labelh2.innerHTML = "La capital es Cali";
      break;
    case "vaupes":
      labelh2.innerHTML = "La capital es Mitu";
      break;
    case "vichada":
      labelh2.innerHTML = "La capital es Puerto Carreño";
      break;
    default:
      labelh2.innerHTML =
        "El departamento ingresado no existe en Colombia o fue escrito mal";
      break;
  }
};

btnUser.onclick = function () {
  userData();
};
