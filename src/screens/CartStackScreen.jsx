

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart,removeToCart } from "../store/Features/CartSlice"

function CartStackScreen() {
  const selectedItem = useSelector(state => state.cartStore.items)
  const dispatch = useDispatch()

  useEffect(() => {}, [selectedItem])

    const totalCost =   selectedItem.reduce((sum,item)=>(
        sum = sum+ (item.price * (item.quantity || 1))
    ),0)

  function handleDecrease(item){

    if((item.quantity|| 1) > 1){
       dispatch(addToCart({...item,quantity:(item.quantity || 1) -1 }))
    } else{
        dispatch(removeToCart(item.id))
    }
    
  }

  function handleIncrease(item){

    dispatch(addToCart({ ...item, quantity: (item.quantity || 1) + 1 }))
  }

  return (
    <>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        {selectedItem.length === 0 ? (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        ) : (
          <div className="flex flex-col gap-6">
            {selectedItem.map((item, idx) => (
              <div
                key={item.id + (item.selectedColor || '') + (item.selectedSize || '') + idx}
                className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-md border"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <div className="text-gray-600">Price: <span className="font-medium text-black">${item.price}</span></div>
                  {item.selectedColor && (
                    <div className="flex items-center gap-2">
                      <span>Color:</span>
                      <span
                        className="inline-block w-5 h-5 rounded-full border"
                        style={{ backgroundColor: item.selectedColor }}
                      ></span>
                    </div>
                  )}
                  {item.selectedSize && (
                    <div>
                      Size: <span className="font-medium">{item.selectedSize}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded active:scale-95 hover:bg-gray-300" onClick={()=>handleDecrease(item)}>
                        -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded active:scale-95 hover:bg-gray-300" onClick={()=>handleIncrease(item)}>
                        +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8 text-right text-2xl font-bold">
                Total: <span className="text-amber-600">${totalCost}</span>
            </div>
          </div>
          
         
        )}
      </div>
    </>
  )
}

export default CartStackScreen