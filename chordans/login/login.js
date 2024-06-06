document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('inputPassword');
    var icon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.querySelector(".btn-custom");
  
    loginButton.addEventListener("click", function () {
      var email = document.getElementById("inputEmail").value;
      var password = document.getElementById("inputPassword").value;
  
      var loginSuccessful = true;
  
      if (loginSuccessful) {
        window.location.href = "../index.html";
      }
    });
  });
  