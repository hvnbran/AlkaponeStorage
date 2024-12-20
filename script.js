document.addEventListener("DOMContentLoaded", function () {
    const pedidoForm = document.getElementById("pedidoForm");
    const reclamoForm = document.getElementById("reclamoForm");
    const devolucionForm = document.getElementById("devolucionForm");
    const mensajePedido = document.getElementById("mensajePedido");
    const mensajeReclamo = document.getElementById("mensajeReclamo");
    const mensajeDevolucion = document.getElementById("mensajeDevolucion");
    const visualizacionPedidos = document.getElementById("visualizacionPedidos");
    const visualizacionReclamos = document.getElementById("visualizacionReclamos");
    const guardarTodoBtn = document.getElementById("guardarTodo");

    // Arreglos para almacenar los pedidos, reclamos y devoluciones
    let pedidos = [];
    let reclamos = [];
    let devoluciones = [];

    // Manejar el envío del formulario de pedidos
    pedidoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const producto = document.getElementById("producto").value;
        const cantidad = document.getElementById("cantidad").value;

        // Agregar el nuevo pedido al arreglo
        pedidos.push({ producto, cantidad });

        // Actualizar la visualización de pedidos
        visualizacionPedidos.innerHTML += `<p>${cantidad} ${producto}</p>`;

        // Mensaje de éxito
        mensajePedido.innerText = "Pedido registrado con éxito.";
        pedidoForm.reset(); // Limpiar el formulario
    });

    // Manejar el envío del formulario de reclamos
    reclamoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const reclamo = document.getElementById("reclamo").value;

        // Agregar el nuevo reclamo al arreglo
        reclamos.push(reclamo);

        // Actualizar la visualización de reclamos
        visualizacionReclamos.innerHTML += `<p>${reclamo}</p>`;

        // Mensaje de éxito
        mensajeReclamo.innerText = "Reclamo enviado con éxito.";
        reclamoForm.reset(); // Limpiar el formulario
    });

    // Manejar el envío del formulario de devoluciones
    devolucionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const productoDevuelto = document.getElementById("productoDevuelto").value;
        const razonDevolucion = document.getElementById("razonDevolucion").value;

        // Agregar la nueva devolución al arreglo
        devoluciones.push({ productoDevuelto, razonDevolucion });

        // Actualizar la visualización de devoluciones
        mensajeDevolucion.innerText = "Devolución registrada con éxito.";
        devolucionForm.reset(); // Limpiar el formulario
    });

    // Manejar el clic del botón "Guardar Todo"
    guardarTodoBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir cualquier comportamiento predeterminado

        // Generar el contenido del archivo
        let contenido = "Pedidos Registrados:\n";
        contenido += pedidos
            .map((pedido) => `Producto: ${pedido.producto}, Cantidad: ${pedido.cantidad}`)
            .join("\n");

        contenido += "\n\nReclamos Registrados:\n";
        contenido += reclamos.join("\n");

        contenido += "\n\nDevoluciones Registradas:\n";
        contenido += devoluciones
            .map(
                (devolucion) =>
                    `Producto Devuelto: ${devolucion.productoDevuelto}, Razón: ${devolucion.razonDevolucion}`
            )
            .join("\n");

        // Crear un blob con el contenido del archivo
        const blob = new Blob([contenido], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        // Crear un enlace temporal para descargar el archivo
        const enlace = document.createElement("a");
        enlace.href = url;
        enlace.download = "datos_completos.txt";
        enlace.click();

        // Liberar el objeto URL después de usarlo
        URL.revokeObjectURL(url);

        alert("Archivo guardado con éxito.");
    });
});
