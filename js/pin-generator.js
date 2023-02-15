document.getElementById('pin-generate-btn').addEventListener('click', function () {
    const newPin = generatePin();
    const pinDisplayField = document.getElementById('pin-generate-field');
    pinDisplayField.value = newPin;
})

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    const pinString = randomPin + '';
    if (pinString.length === 4) {
        return randomPin;
    }
    else {
        console.log('pin is not 4 digit');
        return generatePin();
    }
}