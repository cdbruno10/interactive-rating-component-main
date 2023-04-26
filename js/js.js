const rating = document.querySelectorAll(".menu li");
const containerA = document.getElementById("containerA");
const containerB = document.getElementById("containerB");
const summary = document.querySelector("#summary");

function election(event) {
  // Define una función llamada "election" que toma un objeto de evento como argumento
  const rating = event.target.innerText; // Obtiene la calificación seleccionada por el usuario
  summary.addEventListener("click", function () {
    changeContainer();
  });
  document.getElementById("rating").innerText = +rating; // Actualiza el contenido de un elemento HTML con la calificación seleccionada
}

function changeContainer() {
  containerA.style.display = "none";
  containerB.style.display = "block";
}

for (let i = 0; i < rating.length; i++) {
  // Establece un bucle "for" que recorre todos los elementos HTML "li" obtenidos anteriormente
  rating[i].addEventListener("click", election); // Agrega un "event listener" que escucha el evento "click" y llama a la función "election"
}

// Agrega un controlador de eventos "click" a cada elemento <li>
rating.forEach(function (item) {
  item.addEventListener("click", function () {
    // Elimina la clase "selected" de todos los elementos <li>
    rating.forEach(function (item) {
      item.classList.remove("selected");
    });

    // Agrega la clase "selected" solo al elemento <li> que se hizo clic
    this.classList.add("selected");
  });
});
