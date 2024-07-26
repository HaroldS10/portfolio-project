let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades =document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("illustrator");
        habilidades[6].classList.add("photoshop");

        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proyect");
        habilidades[12].classList.add("adaptacion");
        habilidades[13].classList.add("aprendizaje");
    }
}



//detectar el scrolling para aplicar la animación
window.onscroll = function(){
    efectoHabilidades();
}

//Enviar correo desde SECCION CONTACTO

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtén los datos del formulario
    var formData = {
        from_name: document.getElementById('from_name').value,
        telefono: document.getElementById('telefono').value,
        email_id: document.getElementById('email_id').value,
        tema: document.getElementById('tema').value,
        message: document.getElementById('message').value
    };

    // Envía el correo utilizando EmailJS
    emailjs.send('default_service', 'template_da0932h', formData)
        .then(function(response) {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            alert('Correo enviado exitosamente!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('Error al enviar el correo:', error);
            alert('Error al enviar el correo. Por favor, intenta de nuevo.');
        });
});
