document.getElementById('calculator-btn').addEventListener('click', function (e) {
    const clicked = e.target.innerText;
    const displayField = document.getElementById('display');
    const previousDisplay = displayField.value;

    if (isNaN(clicked)) {
        if (clicked === 'C') {
            displayField.value = '';
        } else if (clicked === '<') {
            const clickedNumbers = previousDisplay.split('');
            clickedNumbers.pop();
            displayField.value = clickedNumbers.join('');
        }
    } else {
        const newDisplay = previousDisplay + clicked;
        displayField.value = newDisplay;

    }
})

// submit button 
document.getElementById('submit-btn').addEventListener('click', function () {
    const generatedPin = document.getElementById('pin-generate-field').value;
    const typedPin = document.getElementById('display').value;
    if (generatedPin == typedPin) {
        alert('ok');
    } else {
        alert('wrong! please try again');
    }
})