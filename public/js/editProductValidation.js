window.addEventListener("load", function(){


    let formulario = document.querySelector("#editForm")


    formulario.addEventListener("submit", function (e) {
        
        let errors = [];
        
        let name = document.querySelector("#product-name")

        if (name.value == "") {
            errors.push("Debes completar el campo del nombre.");

        }else if(name.value.length < 2){
            errors.push("El campo del nombre debe contener al menos 2 caracteres");
        }

        let description = document.querySelector("#description")

        if (description.value < 21) {
            errors.push("La descripción debe tener al menos 20 caracteres.");

        }

        let price = document.querySelector("#price")

        if (price.value == "") {
            errors.push("Debes ingresar un precio.");

        }

        let country = document.querySelector("#country")

        if (country.value == "") {
            errors.push("Debes seleccionar un país.");

        }

        let brand = document.querySelector("#brand")

        if (brand.value == "") {
            errors.push("Debes seleccionar una marca.");

        }

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
            }
        }else{

            errors.push("Debe subir una imagen");
        }       
        

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("div.errors ul")
            for (let i = 0; i < errors.length; i++) {

                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            }
        }


    })


})