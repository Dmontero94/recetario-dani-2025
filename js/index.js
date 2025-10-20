document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            Swal.fire({
                title: '¡Mensaje Enviado!',
                text: 'Gracias por tu mensaje 💌. Te responderé pronto.',
                icon: 'success',
                confirmButtonText: 'Genial',
                timer: 5000,
                timerProgressBar: true
            }).then(() => {
                form.reset();
            });
        });
    }
});