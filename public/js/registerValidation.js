window.addEventListener("load", function(){


    let formulario = document.querySelector("form")


    formulario.addEventListener("submit", function (e) {
        
        let errors = [];
        
        let name = document.querySelector("#user-name")

        if (name.value == "") {
            errors.push("Debes completar el campo del nombre.");
            let errorName1 = document.querySelector("div.errorName p")
            errorName1.innerHTML = "Debes completar el campo del nombre."

        }else if(name.value.length < 2){
            errors.push("El campo del nombre debe contener al menos 2 caracteres");
            let errorName2 = document.querySelector("div.errorName p")
            errorName2.innerHTML = "El campo del nombre debe contener al menos 2 caracteres"

        }

        let lastname = document.querySelector("#user-surname")

        if (lastname.value == "") {
            errors.push("Debes completar el campo del apellido.");
            let errorLastname1 = document.querySelector("div.errorLastname p")
            errorLastname1.innerHTML = "Debes completar el campo del apellido."

        }else if(lastname.value.length < 2){
            errors.push("El campo del apellido debe contener al menos 2 caracteres");
            let errorLastname2 = document.querySelector("div.errorLastname p")
            errorLastname2.innerHTML = "El campo del apellido debe contener al menos 2 caracteres."
        }
        let email = document.querySelector("#user-email")

        if (email.value == "") {
            errors.push("Debes completar el campo del email.");
            let errorEmailRegister = document.querySelector("div.errorEmailRegister p")
            errorEmailRegister.innerHTML = "Debes completar el campo del email."
        } else if (!(email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
            errors.push("Este email es inválido.");
            let errorEmailRegister2 = document.querySelector("div.errorEmailRegister p")
            errorEmailRegister2.innerHTML = "Este email es inválido."
        }

        let password = document.querySelector("#user-password")

        if (password.value == "") {
            errors.push("Debes completar el campo de contraseña.");
            let errorPasswordRegister1 = document.querySelector("div.errorPasswordRegister p")
            errorPasswordRegister1.innerHTML = "Debes completar el campo de contraseña."

        }else if(password.value.length < 2){
            errors.push("El campo de contraseña debe contener al menos 2 caracteres");
            let errorPasswordRegister2 = document.querySelector("div.errorPasswordRegister p")
            errorPasswordRegister2.innerHTML = "El campo de contraseña debe contener al menos 2 caracteres."
        }

        let image = document.querySelector("#image")


        if (image.value != "") {
            
            var allowedExtension = ['jpeg', 'jpg', "gif", "png"];

            var fileExtension = document.getElementById('image').value.split('.').pop().toLowerCase();

            var isValidFile = false;

            for(var index in allowedExtension) {

                if(fileExtension === allowedExtension[index]) {
                    isValidFile = true; 
                    break;
                }
            }

            if(!isValidFile) {
                errors.push("Los formatos válidos son jpeg, jpg, gif, png");
                let errorPhoto = document.querySelector("div.errorPhoto p")
                errorPhoto.innerHTML = "Los formatos válidos son jpeg, jpg, gif, png"
            }
        }







        if (errors.length > 0) {
            e.preventDefault();
            // let ulErrors = document.querySelector("div.errors ul")
            // ulErrors.innerHTML = ""
            // for (let i = 0; i < errors.length; i++) {

            //     ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            // }
        }


    })


})