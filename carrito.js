document.addEventListener('DOMContentLoaded', function() {
    const productosCarrito = [... document.querySelectorAll(".contenedor-producto")];
    const descubrirProductos = document.querySelector(".descubrir-productos");
    const seguirExplorando = document.getElementById("seguir-explorando");
    
    if (productosCarrito.length === 0) {
        descubrirProductos.style.display = "block";
        seguirExplorando.style.display = "none";
    } else {
        descubrirProductos.style.display = "none";
        seguirExplorando.style.display = "block";
    }
    
    const products = document.querySelectorAll('.product');
    const detalleCompra = document.getElementById('productos');
    const totalCompra = document.querySelector('.total span');

    // Función para agregar un producto al carrito
    function agregarAlCarrito(event) {
        const productoSeleccionado = event.target.closest('.product');
        const titulo = productoSeleccionado.querySelector('.product-title').innerText;
        const precio = productoSeleccionado.querySelector('.product-price').innerText;

        // Crear un objeto representando el producto seleccionado
        const nuevoProducto = {
            titulo: titulo,
            precio: precio
        };

        // Agregar el producto al array del carrito
        productosCarrito.push(nuevoProducto);

        // Actualizar la visualización del carrito
        renderizarCarrito();
    }

    // Función para renderizar el carrito
    function renderizarCarrito() {
        // Limpiar la visualización del carrito
        detalleCompra.innerHTML = '';

        // Renderizar cada producto en el carrito
        productosCarrito.forEach(producto => {
            const productoHTML = document.createElement('div');
            productoHTML.classList.add('producto-seleccionado');
            productoHTML.innerHTML = `
                <p>${producto.titulo} - ${producto.precio}</p>
                <button class="eliminar-producto">Eliminar</button>
            `;
            detalleCompra.appendChild(productoHTML);
        });

        // Calcular y mostrar el total de la compra
        const total = calcularTotal();
        totalCompra.textContent = `$${total}`;
    }

    // Función para calcular el total de la compra
    function calcularTotal() {
        let total = 0;
        productosCarrito.forEach(producto => {
            const precioNumerico = parseFloat(producto.precio.replace('$', ''));
            total += precioNumerico;
        });
        return total.toFixed(2); // Redondear el total a 2 decimales
    }

    // Event listener para el botón "Agregar al carrito" de cada producto
    products.forEach(product => {
        product.querySelector('.buy-button').addEventListener('click', agregarAlCarrito);
    });

    // Event listener para el botón "Eliminar" de cada producto en el carrito
    detalleCompra.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar-producto')) {
            const productoAEliminar = event.target.parentElement;
            const productoTitulo = productoAEliminar.querySelector('p').textContent.split(' - ')[0];

            // Eliminar el producto del array del carrito
            productosCarrito.forEach((producto, index) => {
                if (producto.titulo === productoTitulo) {
                    productosCarrito.splice(index, 1);
                }
            });

            // Actualizar la visualización del carrito
            renderizarCarrito();
        }
    });
});
