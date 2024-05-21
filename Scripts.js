document.addEventListener('DOMContentLoaded', function() {
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const themeSwitch = document.getElementById('theme-switch');
    const successMessage = document.getElementById('success-message');

    // Activamos el form
    registerContainer.classList.add('active');

    // Animaciones de form
    registerContainer.addEventListener('click', function() {
        if (!registerContainer.classList.contains('active')) {
            registerContainer.classList.add('active');
            loginContainer.classList.remove('active');
        }
    });

    loginContainer.addEventListener('click', function() {
        if (!loginContainer.classList.contains('active')) {
            loginContainer.classList.add('active');
            registerContainer.classList.remove('active');
        }
    });

    // Bug de apretar enter y que se ponga el modo oscuro
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        });
    });

    // Register
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.textContent = 'Registrado con éxito';
        successMessage.classList.add('active');
        setTimeout(function() {
            successMessage.classList.remove('active');
        }, 3000);
    });

    // Login
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.textContent = 'Inicio de sesión con éxito';
        successMessage.classList.add('active');
        setTimeout(function() {
            successMessage.classList.remove('active');
            window.location.href = 'zapatillas.html';
        }, 3000); 
    });

    // Animacion de color
    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
    });
});
