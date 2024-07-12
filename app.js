function generateCards() {
    const container = document.querySelector("section")

    for (let i = 0; i < 16; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = i;
        container.appendChild(card);
    }
}

function paidedCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('cardSelected');

            let cardSelected = document.querySelectorAll('.cardSelected');

            // Verificar si se han seleccionado exactamente dos cartas y tienen data-id
            if (cardSelected.length === 2 && cardSelected[0].hasAttribute('data-id') && cardSelected[1].hasAttribute('data-id')) {
                setTimeout(() => {
                    verifyCards();
                }, 1000);
            }
        });
    });
}

function dificulty(){

}

function mixCardS(){

}

function resetGame(){

}

function saveFinded(cardsFounded){
    localStorage.setItem("cardsFounded", cardsFounded);
    cardsFounded.classList.remove("selected")
    cardsFounded.classList.add("found")
}

function verifyCards() {
    const cardSelected = document.querySelectorAll('.cardSelected');

    // Aquí implementa la lógica para verificar si las dos cartas seleccionadas son iguales
    // Por ejemplo:
    if (cardSelected.length === 2) {
        const dataId1 = cardSelected[0].getAttribute('data-id');
        const dataId2 = cardSelected[1].getAttribute('data-id');

        if (dataId1 === dataId2) {
            // Las cartas son iguales, realiza alguna acción (por ejemplo, eliminarlas)
            console.log('Las cartas son iguales!');
            saveFinded(cardSelected[0])
            saveFinded(cardSelected[1])
            
            // Aquí podrías implementar el código para eliminar las cartas o marcarlas como emparejadas
        } else {
            // Las cartas no son iguales, deseleccionarlas (por ejemplo, removiendo la clase 'cardSelected')
            console.log('Las cartas no son iguales, deseleccionando...');
            cardSelected.forEach(card => {
                card.classList.remove('cardSelected');
            });
        }
    }
}

function starGame(){

}