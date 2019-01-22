/*
let a: any;
let b: boolean;
let c: string;
let d: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}

let backgroundColor = Color.Red;

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let endsWithCalt = (message as string).endsWith('c');

let log = function(message) {
    console.log(message);
};

let doLog = message => {
    console.log(message);
};
*/

import { Point } from './point';

let point = new Point(1, 2);
let x = point.x;

point.draw();
