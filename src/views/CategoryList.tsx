import React, { useState } from 'react'
import { trpc } from '../client';

const CategoryList = () => {
  const [num, setNum] = useState<number>(0); 

  return (
    <div>
      <button onClick={() => {setNum((num) => num+1)}} >click me</button>

      <p key={num}>{num}</p>
    </div>
  )
}

export default CategoryList