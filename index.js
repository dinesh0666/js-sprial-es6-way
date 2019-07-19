// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS "spiral" es6 way</h1>`;

var matrix = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];


function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...matrix.pop().reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}

console.log(spiral(matrix));