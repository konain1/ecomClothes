

import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavCart() {

  const navigate = useNavigate()
  function handleCart(){
navigate('/cartStack')
  }
  return (
    <div className='flex justify-center items-center'>
      <span onClick={handleCart} className='flex justify-center items-center text-center'><i className="fa-solid fa-cart-shopping"></i></span>
    </div>
  )
}

export default NavCart