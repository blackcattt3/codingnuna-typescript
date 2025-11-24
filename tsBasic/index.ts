// number
// string
// boolean
// null
// undefined
// any

let a : number = 5
let b : string = "love"

let c : any = 4
c="모든 타입 입니다."   // 근데 프로젝트에서는 any 잘 안쓴다!

// 숫자, 문자 둘중에 아무거나 올 수 있지만 정확히 뭐가올지 모를 때
// -> 이때도 숫자,문자 동시에 타입 지정해줄 수 있다!
let d: number | string = 'dkfjkd'
d = 3

// 배열 타입
let e : string[] = ['apple', 'mango']
let f : number[] = [3,4]

function addNumber(a:number, b:number):number{
    return a+b
}
addNumber(3,5)