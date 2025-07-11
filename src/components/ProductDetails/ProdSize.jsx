import { useState } from "react"

function ProdSize ({ sizes }) {
    const [activeIdx,setActiveIdx] = useState(null)
  return (
    <>
      <div className=" py-10  ">
        <div className="mb-4"><span className="text-lg">size</span></div>
        <div className="flex gap-6 ">
          {sizes.map((size,idx) => (
            <div key={idx} className={`border border-green-400 p-2 w-10 text-center bg-white cursor-pointer ${activeIdx === idx ? "border-4 border-black" : "border"} `}
            onClick={()=>setActiveIdx(idx)}
            >{size}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProdSize
