/*let nombreUsuario = prompt("Ingrese su nombre, por favor:");

if(nombreUsuario == "") {
   alert("No ingresaste nombre de usuario :(");
}else{
    alert("Bienvenido/a " + nombreUsuario);
}*/


//let objetoConvertidoJSON =JSON.stringify(nombreUsuario);
//localStorage.setItem("objetoConvertidoJSON", objetoConvertidoJSON);
//console.log("objetoConvertidoJSON", objetoConvertidoJSON);

//let mostrar = localStorage.getItem("objetoConvertidoJSON");

// let nombre = alert("hola "+ localStorage.getItem("objetoConvertidoJSON"));

//let parrafo = document.querySelector(".parrafo").innerText(objetoConvertidoJSON);


//let parrafo = document.querySelector(".parrafo");
//parrafo.innerText = JSON.stringify("Bienvenida "+objetoConvertidoJSON+" estas son las ofertas que tenemos para vos :)");

let nombreUsuario = prompt("Ingrese su nombre, por favor:");

if (nombreUsuario == "") {
   alert("No ingresaste nombre de usuario :(");
} else {
    alert("Bienvenido/a " + nombreUsuario);
}

let objetoConvertidoJSON = JSON.stringify(nombreUsuario);
localStorage.setItem("objetoConvertidoJSON", objetoConvertidoJSON);
//console.log("objetoConvertidoJSON", objetoConvertidoJSON);

let mostrar = localStorage.getItem("objetoConvertidoJSON");

let parrafo = document.querySelector(".parrafo");
parrafo.innerText = "Bienvenida/o " + mostrar + " estas son las opciones para disfrutar en Mendoza con los más chicos/as:";