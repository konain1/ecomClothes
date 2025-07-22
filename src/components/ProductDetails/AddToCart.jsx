import Btn from './Btn'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../store/Features/CartSlice'
import { useState, useEffect } from 'react'

function AddToCart ({ product,disabled }) {
    console.log(product)


  const cartItems = useSelector(state => state.cartStore.items)
  
  const dispatch = useDispatch()

  const isInCart = cartItems.some(item => item.id === product.id)
  const [isToggle,setIsToggle] = useState(isInCart)


  useEffect(()=>{
    console.log(disabled)
  },[disabled])
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function AddToCartHandler () {
    if (!isInCart) {
 // Create a new product object with selectedColor property
    const productWithSelectedColor = {
      ...product,
      selectedColor: product.selectedColor
    }
    dispatch(addToCart(productWithSelectedColor))
    } else {
      dispatch(removeToCart(product.id))
      setIsToggle(false)
    }
  }

return (
    <div className='flex justify-center'>
      {isInCart ? (
        <Btn
          title="Remove"
          onPress={AddToCartHandler}
          style="px-4 rounded-lg md:w-[80%] md:py-2 border bg-red-500 active:scale-95 md:rounded-full hover:bg-red-700 hover:text-white text-white"
        />
      ) : disabled ? (
        <span className="text-gray-500 text-sm">Select color and size first</span>
      ) : (
        <Btn
          title="Add to cart"
          onPress={AddToCartHandler}
          style="px-4 rounded-lg md:w-[80%] md:py-2 border bg-amber-300 active:scale-95 md:rounded-full hover:bg-amber-500 hover:text-white"
        />
      )}
    </div>
  )
}

export default AddToCart
