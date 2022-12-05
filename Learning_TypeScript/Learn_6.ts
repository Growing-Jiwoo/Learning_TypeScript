function examFunc() :never{
    throw new Error()
}

// -------------------------------------- import, export 타입 지정 \\

export type Car = {
    wheel : number,
    model : string
}

export interface Bike {
    wheel : 2,
    model : string
}

// 위에 있는 export 가져오는 법 
// import {Car, Bike} from './"파일이름"'

// let 빠방이 :Car = { wheel : 4, model : 'Sonata' }

// -------------------------------------- 파라미터로 타입을 입력하는 함수 \\
 
function examFunc2<MyType>(x: MyType[]) :MyType {
    return x[0]
}

let a = examFunc2<number>([4,2])
// console.log(a)

let b = examFunc2<string>(['4','2'])
// console.log(b)

// 
function examFunc3<MyType extends number>(x: MyType) {
    return x - 1
}

let c = examFunc3<number>(100)


// 
interface LengthCheck {
    length : number
}

function examFunc4<MyType extends LengthCheck>(x: MyType) {
    return x.length
}

let d = examFunc4<string[]>(['100'])

// 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수 

function inputFunc<MyType extends string[] | string>(x:MyType){
    return x.length
}

console.log(inputFunc<string | string[]>(['12321342142142145']))


// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수

interface Animal {
    name : string;
    age : number 
}
  
let data = '{"name" : "dog", "age" : 1 }'

function convertFunc<Type>(value :string):Type{
    return JSON.parse(value)
}

let result = convertFunc<Animal>(data)

console.log(result)