"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function examFunc() {
    throw new Error();
}
// 위에 있는 export 가져오는 법 
// import {Car, Bike} from './"파일이름"'
// let 빠방이 :Car = { wheel : 4, model : 'Sonata' }
// -------------------------------------- 파라미터로 타입을 입력하는 함수 \\
function examFunc2(x) {
    return x[0];
}
let a = examFunc2([4, 2]);
// console.log(a)
let b = examFunc2(['4', '2']);
// console.log(b)
// 
function examFunc3(x) {
    return x - 1;
}
let c = examFunc3(100);
function examFunc4(x) {
    return x.length;
}
let d = examFunc4(['100']);
// 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수 
function inputFunc(x) {
    return x.length;
}
console.log(inputFunc(['12321342142142145']));
let data = '{"name" : "dog", "age" : 1 }';
function convertFunc(value) {
    return JSON.parse(value);
}
let result = convertFunc(data);
console.log(result);
