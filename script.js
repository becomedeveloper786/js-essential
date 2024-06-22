let selectedOption = '';

function selectOption(element, answer) {
    selectedOption = answer;

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the selected button
    element.classList.add('active');
}

function submitAnswer() {
    const resultElement = document.getElementById('result');
    if (selectedOption === 'A') {
        resultElement.textContent = 'Correct answer!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect answer!';
        resultElement.style.color = 'red';
    }

    // Disable all buttons after an answer is submitted
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Highlight the selected answer
    const activeButton = document.querySelector('.options .active');
    if (activeButton) {
        activeButton.style.backgroundColor = selectedOption === 'A' ? 'green' : 'red';
        activeButton.style.color = 'white';
    }
}
