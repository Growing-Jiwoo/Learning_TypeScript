let person_name_str :string = "KimJiWoo"; // 문자열

let person_name_array :string[] = ["KimJiWoo"]; // 문자열로 이루어진 array

let person_name_union_array :(string | number)[]= ["KimJiWoo", 12, "HI"]; // 문자열과 숫자로 이루어진 array

let person_name_obj :{name : string} = {name : "KimJiWoo"}; // 문자열로 이루어진 object

let person_name_union_obj_str :{name : string | number} = {name : "KimJiWoo"}; // 문자열과 숫자로 이루어진 object
let person_name_union_obj_num :{name : string | number} = {name : 123}; // 문자열과 숫자로 이루어진 object

let person_name_obj_2 :{name? : string, age : number} = {age : 27} // name 속성이 안들어올수도 있다는 object

let person_name_str_num :string | number = "KimJiWoo"; // 문자열과 숫자

let person_name_any :any = "Kim"+23 // 모든 타입 가능

type str_or_num = string | number;

let person_name :str_or_num = "KimJiWoo"

function typeFunc(value : number){
    return value * 5
}

function typeFunc_2(value : number) :number { //매개변수에 지정
    return value * 5
}

type member = [string, boolean];

let jiwoo_info: member = ["jiwoo", true]

type object_example = {
    [key :string] : string
}

let obj_example :object_example = {"name" : "JiWoo", "age" : "27"}

type project_type_example = {
    member: string[],
    days: number,
    started: boolean
}

let project_example :project_type_example = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
  

