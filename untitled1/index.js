console.log('Happy developing ✨')
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Invalid Expression');
        resultField.value = '';
    }
}
