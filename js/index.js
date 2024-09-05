document.addEventListener("DOMContentLoaded", function () {
    let botón = document.getElementById("buttonText");

botón.addEventListener("click", function (e) {
    let valor = document.getElementById("inputText").value;

    if (valor) {
    localStorage.setItem("Valor", valor);
    alert("Dato ingresado");
    inputText.value = ""
    } else {
    alert("Por favor, ingrese un valor");
}
});
});
