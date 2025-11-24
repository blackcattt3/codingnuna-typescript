import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './components/Store'
import type { Restaurant } from './model/restaurant'

// 함수 컴포넌트도 타입 설정이 가능하다!
const App = ()=> {

  let data:Restaurant = {
    name:'재희 식당',
    category:'western',
    address:{
      city:'incheon',
      detail:'somewhere',
      zipCode: 123456
    },
    menu:[{name:'rose pasta', price:2000, category:'pasta'},
          {name:'garlic steak', price:3000, category:'steak'}]
  }
  
  // 제네릭 문법 - 타입을 정해놓지 않고 useState를 부르는 순간에 타입을 정해주고싶을때.
  // 이 useState를 선언할 당시에 Restaurant라는 타입을 쓰겠다!
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)

  return (
    <div className='App'>
      <Store info={myRestaurant}/>
    </div>
  )
}

export default App
