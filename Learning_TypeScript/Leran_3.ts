

type Animal = string | number | undefined;

let animal :Animal;

type AnimalObject = { name : string , age : number}

let animal_obj :AnimalObject;

type PositionX = { x : number};
type PositionY = { y : number};

type NewPosition = PositionX & PositionY;

let position :NewPosition = { x : 10, y : 10};

function Position(a:NewPosition){
    console.log(a)
}

Position({x:10, y:10})

// ---------------- Literal

let name_literal :"JiWoo" | "Jihyun";

console.log(name_literal = "JiWoo")

function literalName(game: "가위"|"바위"|"보"):("가위"|"바위"|"보")[]{
    console.log(game)
    return ["보"]
}

literalName("가위")
// literalName("JiWoo1") //error

var data = {
    name : "kim"
} as const

function dataFunc( a : "kim"){
    return console.log(a)
}

dataFunc(data.name)

type Name = "JiWoo"
type FirstGreeting = `hello ${Name}`

type Name1 = "JiWoo" | "JiHyun"
type Name2 = "JiWoong" | "JiHyung"
type HelloPerson =  `Kim ${Name1 | Name2}`;

let greeting :HelloPerson;

// ---------------- type alias

type FuncTypealias = (a :string) => number

let literlName :FuncTypealias = function (a) {
    return 1
}

function Func1(){

}

function Func2(){

}

type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
  }

  type CutType = (x :string) => string


function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
// cutZero("0120-50-23-05")

// removeDash("2235-15-2535-2")

// function RemoveAndCut(p_num:string){
//     console.log(cutZero(p_num))
// }

// RemoveAndCut("0120-50-23-05")

type Func1 = (p_num :string) => string
type Func2 = (p_num :string) => number

function RemoveAndCut_2(p_num :string, func1:Func1, func2:Func2){
    let result = func1(p_num);
    let result_2 = func2(result);
    console.log(result_2)
    console.log(result_2 + result_2)
}

RemoveAndCut_2('010-0204-9185', cutZero, removeDash)
