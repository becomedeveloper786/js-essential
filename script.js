function checkAnswer(element, answer) {
    const resultElement = document.getElementById('result');
    if (answer === 'A') {
        resultElement.textContent = 'Correct answer!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect answer!';
        resultElement.style.color = 'red';
    }

    // Disable all buttons after an answer is selected
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Highlight the selected answer
    element.style.backgroundColor = answer === 'A' ? 'green' : 'red';
    element.style.color = 'white';
}
