// 참조에 의한 객체 복사
let ms = "hello";
let phrase = ms
// 변수에 객체가 그대로 저장되는것이 아니라
// 객체가 저장되어있는 메모리 주소 인 객체에 대한 참조값이 저장된다.
// ㅇ
console.log(ms)

let user = { name: 'john' };
let admin = user
admin.name = 'pete';
console.log(user)

// 객체 복사 , 병합 Object.assign

