import React from 'react'
import type { Restaurant } from '../model/restaurant'

// props의 타입을 지정해줘야한다.
// 1. interface 사용    2. type 사용

// interface
interface OwnProps{
    info:Restaurant
}

const Store = () => {
  return (
    <div>
      Store
    </div>
  )
}

export default Store
