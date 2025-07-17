import { useState } from 'react'

function ProdSize ({ sizes }) {
  const [activeIdx, setActiveIdx] = useState(null)
  return (
    <>
      <div className=' py-10  '>
        <div className='mb-4'>
          <span className='text-lg'>size</span>
        </div>
        <div className='flex gap-6 '>
          {sizes.map((size, idx) => (
            <div
              key={idx}
              className={`border border-gray-400 rounded-md hover:scale-95 p-2 w-20 text-center bg-white cursor-pointer ${
                activeIdx === idx ? ' shadow-4xl  bg-green-400 text-white border-black' : 'border'
              } `}
              onClick={() => setActiveIdx(idx)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProdSize
