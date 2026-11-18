const formulario = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("listaTareas");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = input.value;

    const divBotones = document.createElement("div");
    divBotones.className = "botones";

    // Botón Editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = function () {
        const nuevoTexto = prompt("Edita tu tarea:", texto.textContent);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            texto.textContent = nuevoTexto;
        }
    };

    // Botón Eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function () {
        li.remove();
    };

    // Montar todo y añadir a la lista
    divBotones.appendChild(btnEditar);
    divBotones.appendChild(btnEliminar);
    li.appendChild(texto);
    li.appendChild(divBotones);
    lista.appendChild(li);

    input.value = "";
});