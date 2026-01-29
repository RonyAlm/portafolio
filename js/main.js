(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "NpAxBpo-OCe28oFsg",
    });
})();

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');
    const btnSubmit = document.getElementById('sendBtn');
    const formError = document.querySelector('.form__error');

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message || email.indexOf('@') === -1) {
            messageError('Por favor, completá todos los campos.');
            return;
        }

        btnSubmit.textContent = 'Enviando...';

        emailjs.sendForm('service_t4ajffw', 'template_ohghvs8', form)
            .then((res) => {
                if (res.status === 200) {
                    btnSubmit.innerHTML = 'Mensaje enviado correctamente <img src="./assets/icon/check-circle.svg" alt="Send icon">';
                    form.reset();
                    setTimeout(() => {
                        btnSubmit.innerHTML = 'Enviar <img src="./assets/icon/send.svg" alt="Send icon">';
                    }, 3000);
                }
            }, (error) => {
                messageError('Ocurrió un error al enviar el mensaje');
                btnSubmit.innerHTML = 'Enviar <img src="./assets/icon/send.svg" alt="Send icon">';
                form.reset();
            });

    });

    function messageError(texto) {
        formError.style.display = 'flex';
        formError.querySelector('p').textContent = texto;
        setTimeout(() => {
            formError.style.display = 'none';
        }, 4000);
    }

});