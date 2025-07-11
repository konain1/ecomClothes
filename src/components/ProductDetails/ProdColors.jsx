import { useState } from "react"

function ProdColors({ colors }) {
    const [activeIdx,setActiveIdx]=useState(null)
    return (
        <div>
            <p className="mb-5">Colors</p>
            <div className="flex gap-2">
                {colors.map((color, idx) => (
                    
                    <span
                        key={idx}
                        className={`h-10 w-10  rounded-full cursor-pointer ${activeIdx === idx ? "border-4 border-black" : "border"}`}
                        style={{ backgroundColor: color }}
                        onClick={()=>setActiveIdx(idx)}
                    >
                      
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProdColors