window.addEventListener("load", function(){


    let formulario = document.querySelector("form")


    formulario.addEventListener("submit", function (e) {
        
        let errors = [];
        
        let email = document.querySelector("#user-email")

        if (email.value == "") {
            errors.push("Debes completar el campo del email.");
            let errorEmail1 = document.querySelector("div.errorEmail p")
            errorEmail1.innerHTML = "Debes completar el campo del email.."
        
        } else if (!(email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
            errors.push("Este email es inválido.");
            let errorEmail2 = document.querySelector("div.errorEmail p")
            errorEmail2.innerHTML = "Este email es inválido."
        }

        let password = document.querySelector("#user-password")

        if (password.value == "") {
            errors.push("Debes completar el campo de contraseña.");
            let errorPassword1 = document.querySelector("div.errorPassword p")
            errorPassword1.innerHTML = "Debes completar el campo de contraseña."

        }else if(password.value.length < 2){
            errors.push("El campo de contraseña debe contener al menos 2 caracteres");
            let errorPassword2 = document.querySelector("div.errorPassword p")
            errorPassword2.innerHTML = "El campo de contraseña debe contener al menos 2 caracteres."
        }

        if (errors.length > 0) {
            e.preventDefault();
            //  let ulErrors = document.querySelector("div.errors ul")
            //  ulErrors.innerHTML = ""
            //  for (let i = 0; i < errors.length; i++) {

            //      ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            // }
        }
    })
})