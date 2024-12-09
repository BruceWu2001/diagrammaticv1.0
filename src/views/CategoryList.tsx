import React, { useState } from 'react'

const CategoryList = () => {
  const [num, setNum] = useState<number>(); 

  return (
    <div>
      <button >click me</button>

      <p key={num}>{num}</p>
    </div>
  )
}

export default CategoryList
