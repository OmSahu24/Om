// Select the display element
const display = document.querySelector('.display');

// Select all buttons
const buttons = document.querySelectorAll('button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // Get the text value of the button clicked

        if (value === 'CE') {
            // Clear the display
            display.textContent = '';
        } else if (value === '=') {
            // Evaluate the expression
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error'; // Handle invalid expressions
            }
        } else if (value === 'Clear') {
            // Remove the last character
            display.textContent = display.textContent.slice(0, -1);
        } else if (value === 'shift' || value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === '!') {
            // Handle advanced operations (e.g., sin, cos, etc.)
            handleAdvancedOperations(value);
        } else {
            // Append the value to the display
            display.textContent += value;
        }
    });
});

// Handle advanced operations like sin, cos, etc.
function handleAdvancedOperations(operation) {
    try {
        const expression = display.textContent;

        switch (operation) {
            case 'sin':
                display.textContent = Math.sin(toRadians(expression));
                break;
            case 'cos':
                display.textContent = Math.cos(toRadians(expression));
                break;
            case 'tan':
                display.textContent = Math.tan(toRadians(expression));
                break;
            case 'log':
                display.textContent = Math.log10(expression);
                break;
            case '!':
                display.textContent = factorial(expression);
                break;
            default:
                break;
        }
    } catch {
        display.textContent = 'Error';
    }
}

// Convert degrees to radians (for sin, cos, tan)
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Factorial function
function factorial(n) {
    n = parseInt(n);
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

