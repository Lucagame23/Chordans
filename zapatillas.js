document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const products = document.querySelectorAll('.product');
    var botonProductos = document.querySelector('a[href="#Productos"]');
    var tituloProductos = document.querySelector('#Productos');
    var botonExplorar= document.querySelector('a[href="#Productos"]');  

    // Función para realizar la búsqueda
    function searchProducts() {
        const searchText = searchInput.value.trim().toLowerCase();

        products.forEach(product => {
            const title = product.querySelector('.product-title').innerText.toLowerCase();
            const description = product.querySelector('.product-description').innerText.toLowerCase();

            if (title.includes(searchText) || description.includes(searchText)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // El código para ir directamente a productos
    botonProductos.addEventListener('click', function(event) {
        event.preventDefault();
        tituloProductos.scrollIntoView({
          behavior: 'smooth'
        });
    });
    
    // El código para ir directamente a productos
    botonExplorar.addEventListener('click', function(event) {
        event.preventDefault();
        tituloProductos.scrollIntoView({
          behavior: 'smooth'
        });
    });

    // Event listener para el botón de búsqueda
    searchButton.addEventListener('click', searchProducts);

    // Event listener para la tecla "Enter" en el input de búsqueda
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });

    // Función para el menú en pantallas pequeñas
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.style.display === "block" ? menu.style.display = "none" : menu.style.display = "block";
    }q

    // Agregué un evento de clic al botón del menú para alternar su visibilidad
    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", toggleMenu);
});
