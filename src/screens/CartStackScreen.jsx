import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart,removeToCart } from "../store/Features/CartSlice"
import { compose } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function CartStackScreen() {
  const selectedItem = useSelector(state => state.cartStore.items)
  const isInCart = selectedItem.some((item)=>item.id === selectedItem.id)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
  }, [selectedItem])

    const totalCost =   selectedItem.reduce((sum,item)=>(
        sum = sum+ (item.price * (item.quantity || 1))
    ),0)

  function handleDecrease(item) {
    dispatch(removeToCart(item))
  }

  function handleIncrease(item){
    dispatch(addToCart(item))
  }

  function handleBackToShopping(){
    navigate('/products')
  }

  return (
    <>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        {selectedItem.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 text-center">
            {/* Empty cart icon */}
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                <svg 
                  className="w-12 h-12 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 6h8"
                  />
                </svg>
              </div>
              {/* Floating animation dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* Main message */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Your cart is empty
            </h3>
            
            {/* Subtitle */}
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Looks like you haven't added anything to your cart yet. 
              Discover amazing products and start shopping!
            </p>

            {/* Action button */}
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out"
              onClick={handleBackToShopping}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Start Shopping
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 -top-[2px] -bottom-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
            </button>

            {/* Decorative elements */}
            <div className="mt-8 flex gap-4 opacity-60">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full"></div>
            </div>
          </div>
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
                Total: <span className="text-amber-600">${totalCost.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartStackScreen