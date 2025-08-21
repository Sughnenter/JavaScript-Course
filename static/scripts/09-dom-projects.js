function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    } else { buttonElement.innerHTML = 'Subscribe' };
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    if (cost < 40) {
        cost = cost + 10
    };
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function handleCostkeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal()
    }
}