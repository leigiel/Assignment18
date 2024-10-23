document.getElementById('submit').addEventListener('click', function() {
    const firstNum = parseFloat(document.getElementById('firstNum').value);
    const secondNum = parseFloat(document.getElementById('secondNum').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(firstNum) || isNaN(secondNum)) {
        result = "Invalid input";
    } else {
        switch (operation) {
            case 'add':
                result = firstNum + secondNum;
                break;
            case 'subtract':
                result = firstNum - secondNum;
                break;
            case 'multiply':
                result = firstNum * secondNum;
                break;
            case 'divide':
                result = secondNum !== 0 ? firstNum / secondNum : "Cannot divide by zero";
                break;
            default:
                result = "Unknown operation";
        }
    }

    document.getElementById('result').innerText = result;
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('firstNum').value = '';
    document.getElementById('secondNum').value = '';
    document.getElementById('result').innerText = 0;
});
