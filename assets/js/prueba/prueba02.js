// 2 - Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla
const nombre = prompt("Escriba el nombre del empleado");
const sueldo = prompt("Escriba el sueldo del empleado");

if(nombre == null || nombre == "" || sueldo == null || sueldo == ""){
    return alert("No ha ingresado bien los datos");
}
console.log("EL nombre del empleado es " + nombre);
console.log("Y su sueldo es $" + sueldo);

