let colors = getRandomColor(6);

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');

let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function() {
        let changeColor = this.style.backgroundColor;

        if (changeColor === pickedColor) {
            messageDisplay.textContent = 'Correct!!!';
            changedColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
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

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColor(num) {
    let arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var m = "rgb(" + r + ', ' + g + ', ' + b + ")";
    return m;
}