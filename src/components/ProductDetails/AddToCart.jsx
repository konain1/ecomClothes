import Btn from './Btn'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../store/Features/CartSlice'
import { useState, useEffect } from 'react'

function AddToCart ({ product }) {
  const cartItems = useSelector(state => state.cartStore.items)
  const dispatch = useDispatch()

  const isInCart = cartItems.some(item => item.id === product.id)

  const [cartToggle, setCartToggle] = useState(isInCart)

  useEffect(() => {
    setCartToggle(cartItems.some(item => item.id === product.id))
  }, [cartItems, product])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function AddToCartHandler (productId) {
    if (!isInCart) {
      dispatch(addToCart(product))
      setCartToggle(true)
    } else {
      dispatch(removeToCart(product.id))
      setCartToggle(false)
    }
  }

  return (
    <>
      <div className=' flex justify-center '>
        <Btn
          title={cartToggle ? 'Added' : 'Add to cart'}
          onPress={AddToCartHandler}
          style={
            ' px-4 rounded-lg md:w-[80%] md:py-2 border bg-transparent bg-amber-300 active:scale-95  md:rounded-full hover:bg-amber-500 hover:text-white'
          }
        />
      </div>
    </>
  )
}

export default AddToCart
