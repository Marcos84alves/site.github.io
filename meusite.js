document.addEventListener('DOMContentLoaded', function() {
    const contatoSection = document.querySelector('#contato');
    const contatoButton = document.createElement('button');
    contatoButton.textContent = 'Clique para enviar uma mensagem';
    contatoSection.appendChild(contatoButton);

    contatoButton.addEventListener('click', function() {
        alert('Ja disse que eu te amo?');
    });
});
