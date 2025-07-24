import Btn from './Btn'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../store/Features/CartSlice'
import { useState, useEffect } from 'react'
  import { ToastContainer, toast } from 'react-toastify';


function AddToCart ({ product, disabled }) {
  const cartItems = useSelector(state => state.cartStore.items)
  const dispatch = useDispatch()

  const isInCart = cartItems.some(item => item.id === product.id)
  const cartItem = cartItems.find((item)=>item.id === product.id )
  const quantity = cartItem ? cartItem.quantity : 0
  

  useEffect(() => {}, [disabled])

  //   useEffect(() => {
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
  //   }, [cartItems])

  function AddToCartHandler () {
    if (
      !isInCart &&
      product.selectedColor != undefined &&
      product.selectedSize != undefined
    ) {
      // Create a new product object with selectedColor and SelectedSize property
      dispatch(addToCart(product))
      toast.success(`${product.title} added to cart successfully!`,)
    } else {
      dispatch(removeToCart({id:product.id}))
      toast.error(`${product.title} removed from cart`,)
    }
  }

  return (
    <div className='flex justify-center'>
      {isInCart ? (
        <Btn
          title='Remove'
          onPress={AddToCartHandler}
          style='px-4 rounded-lg md:w-[80%] md:py-2 border bg-red-500 active:scale-95 md:rounded-full hover:bg-red-700 hover:text-white text-white'
        />
      ) : disabled ? (
        <span className='text-gray-500 text-sm'>
          Select color and size first
        </span>
      ) : (
        <Btn
          title='Add to cart'
          onPress={AddToCartHandler}
          style='px-4 rounded-lg md:w-[80%] md:py-2 border bg-amber-300 active:scale-95 md:rounded-full hover:bg-amber-500 hover:text-white'
        />
      )}
       <ToastContainer />
    </div>
  )
}

export default AddToCart
