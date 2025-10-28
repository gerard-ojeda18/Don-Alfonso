function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            // Ocultar automáticamente después de 5 segundos
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
            showNotification();
            this.reset();
        });