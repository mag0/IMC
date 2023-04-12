let nombre = document.getElementById("nombre");
let genero = document.getElementById("genero");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
const boton = document.querySelector(".boton");
const eliminar = document.querySelector(".eliminar");

boton.addEventListener("click", magia);

function magia(e) {
  e.preventDefault();
  let resultados = peso.value / altura.value ** 2;
  if (peso.value < 0) {
    resultado.innerHTML =
      "Imposible que peses " + peso.value + "kilogramos" + " xd";
    peso.style.background = "red";
  } else if (altura.value < 0) {
    resultado.innerHTML =
      "Imposible que midas " + altura.value + "metros" + " xd";
    altura.style.color = "red";
  } else if (peso.value == "" || altura.value == "") {
    resultado.innerHTML = "Te faltaron completar algunos campos";
  } else {
    resultado.innerHTML =
      "Hola " +
      nombre.value +
      " " +
      ", tu indice de masa corporal es de: " +
      resultados.toFixed(2) +
      "<br><br> ¡Gracias por usar mi pagina! ";
  }
}

eliminar.addEventListener("click", borrar);

function borrar() {
  e.preventDefault();
  resultado.innerHTML = 0;
  nombre.value = 0;
  genero.value = 0;
  peso.value = 0;
  altura.value = 0;
}
