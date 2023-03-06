window.addEventListener("load", function(){


    let formulario = document.querySelector("#editForm")


    formulario.addEventListener("submit", function (e) {
        
        let errors = [];
        
        let name = document.querySelector("#product-name")

        if (name.value == "") {
            errors.push("Debes completar el campo del nombre.");
            let errorNameEdit1 = document.querySelector("div.errorNameEdit p")
            errorNameEdit1.innerHTML = "Debes completar el campo del nombre."

        }else if(name.value.length < 2){
            errors.push("El campo del nombre debe contener al menos 2 caracteres.");
            let errorNameEdit2 = document.querySelector("div.errorNameEdit p")
            errorNameEdit2.innerHTML = "El campo del nombre debe contener al menos 2 caracteres."
        }

        let description = document.querySelector("#description")

        if (description.value < 21) {
            errors.push("La descripción debe tener al menos 20 caracteres.");
            let errorDescriptionEdit = document.querySelector("div.errorDescriptionEdit p")
            errorDescriptionEdit.innerHTML = "La descripción debe tener al menos 20 caracteres."

        }

        let price = document.querySelector("#price")

        if (price.value == "") {
            errors.push("Debes ingresar un precio.");
            let errorPriceEdit = document.querySelector("div.errorPriceEdit p")
            errorPriceEdit.innerHTML = "Debes ingresar un precio."

        }

        let country = document.querySelector("#country")

        if (country.value == "") {
            errors.push("Debes seleccionar un país.");
            let errorCountryEdit = document.querySelector("div.errorContryEdit p")
            errorCountryEdit.innerHTML = "Debes seleccionar un país."

        }

        let brand = document.querySelector("#brand")

        if (brand.value == "") {
            errors.push("Debes seleccionar una marca.");
            let errorBrandEdit = document.querySelector("div.errorBrandEdit p")
            errorBrandEdit.innerHTML = "Debes seleccionar una marca."

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
                errors.push("Los formatos válidos son jpeg, jpg, gif, png.");
                let errorPhotoEdit1 = document.querySelector("div.errorPhotoEdit p")
                errorPhotoEdit1.innerHTML = "Los formatos válidos son jpeg, jpg, gif, png."
            }
        }else{

            errors.push("Debe subir una imagen.");
            let errorPhotoEdit2 = document.querySelector("div.errorPhotoEdit p")
            errorPhotoEdit2.innerHTML = "Debe subir una imagen."
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