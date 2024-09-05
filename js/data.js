document.addEventListener("DOMContentLoaded", function () {
    let Dato = localStorage.getItem("Valor");
    if (Dato) document.getElementById("data").innerText = Dato;
});