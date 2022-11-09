let animal;
let animal_obj;
let position = { x: 10, y: 10 };
function Position(a) {
    console.log(a);
}
Position({ x: 10, y: 10 });
// ---------------- Literal
let name_literal;
console.log(name_literal = "JiWoo");
function literalName(game) {
    console.log(game);
    return ["보"];
}
literalName("가위");
// literalName("JiWoo1") //error
var data = {
    name: "kim"
};
function dataFunc(a) {
    return console.log(a);
}
dataFunc(data.name);
let greeting;
let literlName = function (a) {
    return 1;
};
function Func1() {
}
function Func2() {
}
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function RemoveAndCut_2(p_num, func1, func2) {
    let result = func1(p_num);
    let result_2 = func2(result);
    console.log(result_2);
    console.log(result_2 + result_2);
}
RemoveAndCut_2('010-0204-9185', cutZero, removeDash);
