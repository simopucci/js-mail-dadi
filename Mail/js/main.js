const resultElement = document.getElementById('result');
const buttonInput = document.getElementById('button-input');
const mailInput = document.getElementById('user-mail');

const mailArray = ['nomecognome@gmail.com', 'simonepucci@gmail.com', 'nicolagallo@gmail.com', 'jonathanlombardo@gmail.com', 'pippopluto@gmail.com', 'nome123@gmail.com'];

buttonInput.addEventListener('click', function() {
    mailInput.value;

    if (mailArray.includes(mailInput.value)) {
        resultElement.innerHTML = 'Approvato';
        resultElement.classList.add('text-success');
        resultElement.classList.remove('text-danger');

    } else {
        resultElement.innerHTML = 'Rifiutato';
        resultElement.classList.add('text-danger');
        resultElement.classList.remove('text-success');
    }
})
