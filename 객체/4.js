// new 연산자 , 생성자 함수

// 생성자 함수는 첫글자는 대문자로 시작한다.
// 반드시 'new' 연산자를 붙여 실행한다

function User(name) {
    // this = {}; 빈 객체가 암시적으로 만들어짐

    //새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;

    // return this; this가 암시적으로 반환됨
}
let user = new User("보라");
console.log(user)


// new User를 실행하면
// 1. 빈객체를 만들어 this에 할당
// 2. 함수 본문을 실행 , this에 새로운 프로퍼티를 추가해 this를 수정
// 3. this를 반환

