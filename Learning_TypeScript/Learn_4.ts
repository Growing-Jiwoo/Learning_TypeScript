// ---------------- 클래스 타입 지정
class Person {
    data :number = 0;
    name :string;
    constructor(a:string){
        this.name = a;
        console.log(a)
    }

    function (name :string) {
        console.log(`HI ${name}`)
    }

}

let person_1 = new Person('kim');
let person_2 = new Person('park');

person_1.function("JiWoo")

class Car {
    model :string;
    price :number;
    constructor(a :string, b :number){
      this.model = a;
      this.price = b;
    }
  
    tax() :number{
      return this.price * 0.1
    }
  }
  
  let car1 = new Car('소나타', 3000)
  console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
  console.log(car1.tax()) //콘솔창 출력결과는 300

  //----------------------- object 타입 지정 (interface)
  type BoxType = {
    color :string, 
    width :number
   }

   interface BoxInterface {
    color :string, 
    width :number
   }

    let box :BoxType = {color : 'red', width : 100};

   interface Student {
    name :string;
   }

   interface Student {
    score :number;
   }


   interface Teacher extends Student {
    age :number // Teacher Type => name :string (extends), age :number
   }

   type StudentType = {name :string}
   type TeacherType = {age :number} & StudentType // 위의 interface와 기능은 동일

   interface ProductInterface {
    brand :string;
    serialNumber :number;
    model :string[];
   }

   let product :ProductInterface = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

   interface CartInterface {
    product :string;
    price :number;
   }

   interface CartInterfaceAddType extends CartInterface{
    card :boolean;
   }
   
   let cart :CartInterface[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
   let cart2 :CartInterfaceAddType[] = [ { product : '청소기', price : 7000, card : true}, { product : '삼다수', price : 800, card : false } ] 

   interface MathObjType {
    plus : (a :number, b:number) => number,
    minus : (a :number, b:number) => number
   }

   let math :MathObjType = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  } 

  
