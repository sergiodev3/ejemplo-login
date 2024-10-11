let emailValido = "root@cbtis258.edu.mx";
let passValido = "admin123";

const chequeLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("LoginMensaje");

    if(email === emailValido && password === passValido){
        mensaje.textContent = "Inicio de Sesion correcto";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";

        }, 1000);
    }
    else {
        mensaje.textContent = "Email o contraseña incorrecta";
        mensaje.style.color ="red";
    }

};