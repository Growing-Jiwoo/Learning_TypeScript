let student_data = { student: true, age: 20 };
function DestructuringFunc({ student, age }) {
    console.log({ student, age });
}
function FindMaxNum(...input_num) {
    let result = 0;
    input_num.forEach(element => {
        if (result < element) {
            result = element;
        }
    });
    return result;
}
console.log(FindMaxNum(5, 2, 5, 2, 6, 66, 7, 1));
function GetUserInfo({ user, comment, admin }) {
    console.log(user);
    console.log(comment);
    console.log(admin);
}
GetUserInfo({ user: "Kim", comment: [1, 2, 3], admin: true });
function Wine(abc) {
    console.log(...abc);
    console.log(abc);
}
Wine([40, 'wine', false]);
function Narrowing_exam1(num) {
    if (typeof num === 'string') {
        console.log("string");
    }
    else {
        console.log("undefined");
    }
}
function Narrowing_exam2(animal) {
    if ('swim' in animal) {
        console.log(animal.swim);
    }
}
let date = new Date();
if (date instanceof Date) { // date가 Date에 의해서 생성된건지 확인
}
function Rider(x) {
    if (x.wheel === '4개') { //car type인지 아닌지
        console.log('car type');
    }
}
