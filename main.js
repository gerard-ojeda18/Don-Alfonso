 function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            setTimeout(() => {
                hideNotification();
            }, 5000);
        }

        function hideNotification() {
            const notification = document.getElementById('notification');
            notification.classList.remove('show');
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Número de WhatsApp (reemplaza con tu número, incluye código de país sin +)
            // Ejemplo: Argentina 54, seguido del número sin 0 ni 15
            const numeroWhatsApp = '5491136207025'; // CAMBIA ESTE NÚMERO
            
            // Crear el mensaje
            const mensajeWhatsApp = `*Nuevo contacto desde la web*%0A%0A` +
                                   `*Nombre:* ${nombre}%0A` +
                                   `*Email:* ${correo}%0A` +
                                   `*Teléfono:* ${telefono}%0A` +
                                   `*Mensaje:* ${mensaje}`;
            
            // Abrir WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
            window.open(urlWhatsApp, '_blank');
            
            // Mostrar notificación
            showNotification();
            this.reset();
        });

        // Smooth scroll para los enlaces del menú
        document.querySelectorAll('.navbar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId !== '' && targetId !== '#inicio') {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            });
        });