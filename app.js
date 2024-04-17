document.getElementById("ahorroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  var salario = parseFloat(document.getElementById("salario").value);
  var porcentaje = parseFloat(document.getElementById("porcentaje").value);
  var gastos = parseFloat(document.getElementById("gastos").value);

  // Calcular la cantidad ahorrada
  var cantidadAhorrada = (salario * porcentaje / 100).toFixed(2);

  // Calcular el porcentaje ahorrado
  var porcentajeAhorro = ((cantidadAhorrada / salario) * 100).toFixed(2);

  // Calcular el dinero gastado y restante
  var gastado = (salario - cantidadAhorrada).toFixed(2);
  var restante = (salario - cantidadAhorrada - gastos).toFixed(2);

  // Crear el contenido de la ventana emergente
  var ventanaContenido = "<h2>Datos de Ahorro</h2>" +
                         "<p>Salario: $" + salario + "</p>" +
                         "<p>Cantidad Ahorrada: $" + cantidadAhorrada + "</p>" +
                         "<p>Gastado: $" + gastado + "</p>" +
                         "<p>Dinero restante: $" + restante + "</p>";

  // Abrir la ventana emergente
  var ventanaNueva = window.open("", "Datos de Ahorro", "width=400,height=300");

  // Escribir el contenido en la nueva ventana
  ventanaNueva.document.write(ventanaContenido);
});
