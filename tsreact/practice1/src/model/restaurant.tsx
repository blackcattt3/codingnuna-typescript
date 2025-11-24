// let data = {
//     name:'재희 식당',
//     category:'western',
//     address:{
//       city:'incheon',
//       detail:'somewhere',
//       zipCode:'123456'
//     },
//     menu:[{name:'rose pasta', price:2000, category:'pasta'},
//           {name:'garlic steak', price:3000, category:'steak'}]
// }

// type 만드는 두가지 방식
// 1. interface
// 2. type
// 둘이 큰 차이는 없지만 사용가능한 메서드와 syntax가 다르다.

export type Restaurant = {
    name: string,
    category: string,
    address:Address;
    menu: Menu[]
    // menu가 “이 형태의 객체들이 들어있는 배열” 이라는 의미
}

export type Address = {
    city: string;
    detail:string;
    zipCode:number;
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}