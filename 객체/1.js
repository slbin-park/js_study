//let user = new Object(); // 객체 생성자 문법
let user = {}; // 객체 리터럴 문법

// 중괄호 {} 를 이용해 객체를 선언하는것은 객체 리터럴
// 주로 이방법
user.age = 10
console.log(user)
delete user.age
// delete 를 사용해서 삭제 가능
console.log('delete', user)

let ex = {
    name: '123',
    age: 20,
    "like bird": true,
    // 여러 단어를 사용하려면 따옴표로 묶어줌
}
console.log(ex)

function mkuser(name, age) {
    return {
        name,
        age,
    }
}
let us = mkuser("john", 30)
// 단축 프로퍼티
console.log(us)

// 객체 프로퍼티엔 예약어를 사용 가능함
// "key" in object
console.log('key in object', 'name' in us)

// 객체에서 정수 프로퍼티로 하면
// 자동으로 정렬이된다.