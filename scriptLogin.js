
// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//     console.log("Hiciste click en el boton");
// });

// Validacion 

let boton = document.getElementById("btnIngresar");
boton.addEventListener("click", function(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";

    if(usuario === "" || clave === ""){
        mensaje.textContent ="debes completar todos los campos";
        mensaje.style.color = "black";
    }else if(usuario === usuarioCorrecto && clave === claveCorrecta) {
        mensaje.textContent = "Acceso Permitido, Se te redireccionara en 3 segundos";
        mensaje.style.color = "green";

        setTimeout(function(){
            window.location.href = "index.html";
        }, 3000);
    }else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
});

