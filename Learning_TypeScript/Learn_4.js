// ---------------- 클래스 타입 지정
class Person {
    constructor(a) {
        this.data = 0;
        this.name = a;
        console.log(a);
    }
    function(name) {
        console.log(`HI ${name}`);
    }
}
let person_1 = new Person('kim');
let person_2 = new Person('park');
person_1.function("JiWoo");
class Car {
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
let box = { color: 'red', width: 100 };
let product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let cart = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
let cart2 = [{ product: '청소기', price: 7000, card: true }, { product: '삼다수', price: 800, card: false }];
let math = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};
