let selections = document.querySelector(".selections");
let enviarCalificacion = document.querySelector(".submit");

let limpiarBoton = () => {
  let todosBotones = document.querySelectorAll(".btn");
  todosBotones.forEach((cadaBoton) => {
    cadaBoton.classList.remove("clicked");
  });
};

let cambiarDiv = () => {
  let mostrarBotones = document.querySelector(".accesInfo");
  let mostrarCalificacion = document.querySelector(".showInfo");

  mostrarBotones.classList.toggle("hide");
  mostrarCalificacion.classList.toggle("hide");
};

let crearTexto = (numero) => {
  let etiquetaP = document.createElement("p");
  let texto = document.createTextNode("Has seleccionado " + numero + " de 5");
  etiquetaP.appendChild(texto);
  return etiquetaP;
};

selections.addEventListener("click", (buttonSelected) => {
  limpiarBoton();
  let selecionado = buttonSelected.target;
  if (selecionado.value != undefined) {
    selecionado.classList.add("clicked");
  }
});

enviarCalificacion.addEventListener("click", () => {
  cambiarDiv();
  let divMostrarP = document.querySelector(".ratingBox");

  let trarerBclase = document.querySelector(".clicked");
  if (trarerBclase != undefined) {
    divMostrarP.appendChild(crearTexto(trarerBclase.value));
  }
});
