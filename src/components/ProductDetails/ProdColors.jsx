import { useState } from 'react'

function ProdColors ({ colors }) {
  const [activeIdx, setActiveIdx] = useState(null)
  return (
    <div>
      <p className='mb-5'>Colors</p>
      <div className='flex gap-2'>
        {colors.map((color, idx) => (
          <span
            key={idx}
            className={`h-10 w-10  rounded-full cursor-pointer hover:scale-95 ${
              activeIdx === idx ? 'border-2 border-gray-400 scale-105 shadow-xl' : ' h-8 w-8 '
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(idx)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ProdColors
