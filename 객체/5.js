// 옵셔널 체이닝 ?.
// ?.은 ?. 앞의 평가 대상이 undefined나 null이면 평가를 멈추고
// undefined 를 반환한다.

let user = {
    address: '대연'
}
console.log(user?.address);
console.log(user?.address?.name)

// 1. obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
// 2. obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
// 3. obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함