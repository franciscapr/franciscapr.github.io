(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


//  Función Botón cookies
function eliminar_cookies() {
    let pie_de_pagina = document.querySelector(".cookies");
    pie_de_pagina.remove(); //Elmina el elemento
}


// Función para cambiar el color del fondo del full stack
$(document).ready(function () {
    $('.container-one-right').hover(
        function () {
            $(this).css('background-color', 'black');
        },
        function () {
            $(this).css('background-color', '#d9c0a0');
        }
    );
});


// Funcionalidad para los botones de contact
$(document).ready(function() {

    $(".nav-link").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".btn-contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    });
});
