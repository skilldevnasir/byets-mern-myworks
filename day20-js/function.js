var input = `5.0
6.0
7.0`;
var lines = input.split('\n');
console.log(lines);

console.log("MEDIA = " + ((parseFloat(lines[0]) + parseFloat(lines[1]) + parseFloat(lines[2]))).toFixed(1));

// 3.
var input = `100.64`;
var lines = input.split('\n');

console.log("A=" + ((parseFloat(3.14159)) * Math.pow((parseFloat(lines[0])), 2)).toFixed(4));

// BeeCrowd 1564:-
var input = `0
1
0
2
100
0`;
var lines = input.split('\n');

const no = 'vai ter copa!';
const yo = 'vai ter duas!';

lines.forEach(n => {
    if (parseInt(n) === 0) {
        console.log(no);
    }
    else {
        console.log(yo);
    }
});

// // Beecrowd 1003:-
// var lines = [[30, 10], [-30, 10], [0, 0]];
// var join1 = lines.join(' ');
// var join2 = join1.split(' ');
// console.log(join1);
// console.log(join2);
// // lines.forEach(n => {
// //     // if (parseInt(n) === 0) {
// //     //     console.log(no);
// //     // }
// //     // else {
// //     //     console.log(yo);
// //     // }

// // });

// beecrowd | 1010 | Simple Calculate:-
var input = `12 1 5.30
16 2 5.10`;
var lines = input.split('\n');
// console.log(lines);
var lines1 = lines[0].split(' ');
// console.log(lines1);
var lines2 = lines[1].split(' ');
// console.log(lines2);
console.log("VALOR A PAGAR: R$ " + ((parseFloat(lines1[1]) * parseFloat(lines1[2])) + (parseFloat(lines2[1]) * parseFloat(lines2[2]))).toFixed(2));

// beecrowd | 1001 | Extremely Basic
var input = `10
9`;

var lines = input.split('\n');

console.log("X = " + (parseInt(lines[0]) + parseInt(lines[1])));


// beecrowd | 1002 | Area of a Circle
