let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let messageDisplay = document.querySelector('#message');

let pickedColor = colors[3];
colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function() {
        let changeColor = this.style.backgroundColor;

        if (changeColor === pickedColor) {
            messageDisplay.textContent = 'Correct!!!';
            changedColor(pickedColor);
        } else {
            messageDisplay.textContent = 'Try Again!';
            this.style.backgroundColor = '#232323';
        }
    });
}

function changedColor(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}