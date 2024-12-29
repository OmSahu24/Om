// Calculator Script
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttonsContainer = document.getElementById('buttons-container');

    // Button labels and types
    const buttonData = [
        { label: 'shift', type: 'sign' },
        { label: 'Clear', type: 'sign' },
        { label: '%', type: 'sign' },
        { label: 'CE', type: 'sign' },
        { label: 'sin', type: 'sign' },
        { label: 'cos', type: 'sign' },
        { label: 'tan', type: 'sign' },
        { label: 'log', type: 'sign' },
        { label: '/', type: 'op' },
        { label: ')', type: 'op' },
        { label: '(', type: 'op' },
        { label: '!', type: 'sign' },
        { label: '1', type: 'num' },
        { label: '2', type: 'num' },
        { label: '3', type: 'num' },
        { label: '+', type: 'op' },
        { label: '4', type: 'num' },
        { label: '5', type: 'num' },
        { label: '6', type: 'num' },
        { label: '-', type: 'op' },
        { label: '7', type: 'num' },
        { label: '8', type: 'num' },
        { label: '9', type: 'num' },
        { label: '*', type: 'op' },
        { label: '0', type: 'num' },
        { label: '00', type: 'num' },
        { label: '.', type: 'num' },
        { label: '=', type: 'op' }
    ];

    // Dynamically create buttons
    buttonData.forEach(({ label, type }) => {
        const button = document.createElement('button');
        button.textContent = label;
        button.classList.add(`${type}-buttons`);
        button.dataset.type = type; // Store button type for behavior
        buttonsContainer.appendChild(button);
    });

    // Handle button clicks
    buttonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') return;
        const button = e.target;
        const value = button.textContent;
        const type = button.dataset.type;

        if (type === 'num') {
            display.textContent += value;
        } else if (type === 'op') {
            if (value === '=') {
                try {
                    display.textContent = eval(display.textContent); // Basic evaluation (avoid eval in production)
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                display.textContent += value;
            }
        } else if (type === 'sign') {
            if (value === 'Clear') {
                display.textContent = '';
            }
            // Add logic for other special functions like sin, cos, etc.
        }
    });
});
