// Menú hamburguesa
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Formulario
        const form = document.getElementById('contactForm');
        const notification = document.getElementById('notification');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification();
            form.reset();
        });

        function showNotification() {
            notification.classList.add('show');
            setTimeout(() => {
                hideNotification();
            }, 4000);
        }

        function hideNotification() {
            notification.classList.remove('show');
        }
        

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

 
 
 /*function showNotification() {
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
        */