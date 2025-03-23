function calcularPromedio() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);
  const nota5 = parseFloat(document.getElementById("nota5").value);

  // Validar si las notas son números válidos
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
    document.getElementById("resultado").textContent = "Ingresa notas válidas.";
    return;
  }

  // Calcular el promedio
  const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

  document.getElementById("resultado").textContent = "El promedio es: " + promedio.toFixed(2); // Mostrar el promedio con 2 decimales
}
function limpiarCampos() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";
  document.getElementById("nota5").value = "";
  document.getElementById("resultado").textContent = ""; // Limpiar el resultado también
}