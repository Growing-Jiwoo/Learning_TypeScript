let student_data = {student : true, age : 20}
type Student_Type = {student : boolean, age : number}

function DestructuringFunc({student, age}: Student_Type){
    console.log({student, age})
}
 
function FindMaxNum(...input_num: number[]) :number{
    let result = 0;

    input_num.forEach(element => {
        if (result < element){
            result = element
        }
    });

    return result;
}

console.log(FindMaxNum(5,2,5,2,6,66,7,1))

type UserType = {
    user : string;
    comment : number[];
    admin : boolean;
}

function GetUserInfo({user, comment, admin} : UserType){

    console.log(user)
    console.log(comment)
    console.log(admin)

}

GetUserInfo({user : "Kim", comment : [1,2,3], admin : true})
 
type WineType = (number | string | boolean)

function Wine(abc : WineType[]){
    console.log(...abc)
    console.log(abc)
}

Wine([40, 'wine', false])

//------------------- Narrowing 추가 학습

type NarrowType_1 = (string | undefined)
type Fish = { swim : string }
type Bird = { fly : string }

function Narrowing_exam1(num : NarrowType_1){
    if ( typeof num === 'string' ){
        console.log("string")
    } else {
        console.log("undefined")
    }
}

function Narrowing_exam2(animal : (Fish | Bird)){
    if ( 'swim' in animal ){
        console.log(animal.swim)
    }
}

let date = new Date();

if (date instanceof Date){ // date가 Date에 의해서 생성된건지 확인

}

type CarType = {
    wheel : '4개';
    color : string
}

type BikeType = {
    wheel : '2개';
    color : string
}

type RideType = {
    wheel : ('2개' | '4개');
    color : string
}

function Rider(x : (CarType | BikeType)){
    if(x.wheel === '4개') { //car type인지 아닌지
        console.log('car type')
    }
}