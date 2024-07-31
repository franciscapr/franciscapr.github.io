// Función para actualizar el mensaje de devoluciones
function actualizarDevoluciones() {
    let costoEnvio = parseFloat(document.getElementById('costoEnvio').value);
    let devoluciones = 0.25 * costoEnvio;
    let devolucionesMensaje = document.getElementById('devolucionesMensaje');

    if (!isNaN(devoluciones) && costoEnvio > 0) {
        devolucionesMensaje.textContent = "En relación a este cálculo, tu Devolución del 25% representa: $" + devoluciones;
    } else {
        devolucionesMensaje.textContent = "";
    }
}

// Evento para actualizar devoluciones en tiempo real
document.getElementById('costoEnvio').addEventListener('input', actualizarDevoluciones);

document.getElementById('priceCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los inputs
    let costoProducto = parseFloat(document.getElementById('costoProducto').value);
    let costoEnvio = parseFloat(document.getElementById('costoEnvio').value);
    let costoMeta = parseFloat(document.getElementById('costoMeta').value);

    // Calcular devoluciones y costos
    let devoluciones = 0.25 * costoEnvio;
    let costoTotal = costoProducto + costoEnvio + devoluciones;
    let precioProducto = costoTotal + costoMeta;
    let margen = precioProducto - costoTotal - costoMeta;
    let margenPorcentajeOne = (margen / precioProducto) * 100;

    // Mostrar los resultados iniciales
    document.getElementById('costoTotal').textContent = "Costo total del producto sin publicidad: $" + costoTotal;
    document.getElementById('precioProducto').textContent = "Precio total del producto: $" + precioProducto;
    document.getElementById('margen').textContent = "Tu Margen es: $" + margen + " ---> " + margenPorcentajeOne.toFixed(2) + "%";

    // Mostrar la sección de ajuste de margen
    document.getElementById('ajusteMargen').style.display = 'block';
});

document.getElementById('margenForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el nuevo precio
    let nuevoPrecio = parseFloat(document.getElementById('nuevoPrecio').value);

    // Obtener los valores anteriores
    let costoProducto = parseFloat(document.getElementById('costoProducto').value);
    let costoEnvio = parseFloat(document.getElementById('costoEnvio').value);
    let costoMeta = parseFloat(document.getElementById('costoMeta').value);
    let devoluciones = 0.25 * costoEnvio;
    let costoTotal = costoProducto + costoEnvio + devoluciones;

    // Calcular el nuevo margen
    let margenDos = nuevoPrecio - costoMeta - costoTotal;
    let margenPorcentaje = (margenDos / nuevoPrecio) * 100;

    // Mostrar el nuevo margen y porcentaje
    document.getElementById('margenNuevo').textContent = "Tu margen con el nuevo precio es de: $" + margenDos + " --> " + margenPorcentaje.toFixed(2) + "%";
});
