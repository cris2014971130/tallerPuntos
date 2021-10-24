// 3 - Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)

const btnUser = document.getElementById("btnUser");
const labelh2 = document.getElementById("welcome");

const userData = () => {
    let word = prompt("Escriba la palabra a traducir");
    if(word == null || word == ""){
        return alert("La palabra esta incompleta o no existe en el diccionario");
    }
    switch (word.toLowerCase()) {
        case "casa":
            labelh2.innerHTML = `La traduccion de la palabra ${word} es House`;
            break;
        case "mesa":
            labelh2.innerHTML = `La traduccion de la palabra ${word} es Table`;
            break;
        case "perro":
            labelh2.innerHTML = `La traduccion de la palabra ${word} es Dog`;
            break;
        case "gato":
            labelh2.innerHTML = `La traduccion de la palabra ${word} es Cat`;
            break;
        default:
            labelh2.innerHTML = "Palabra no encontrada en el Traductor. En futuras versiones se completara :)";
            break;
    }
}

btnUser.onclick = function () {
    userData();
  };
  