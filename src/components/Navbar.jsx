import { useState } from 'react'
import Logo from './navUI/Logo'
import SearchBar from './navUI/SearchBar'
import NavCart from './navUI/NavCart'
import SingIn from './navUI/SingIn'

function Navbar () {
  const [open, setOpen] = useState(false)

  // Only left drawer position and transform
  const drawerPosition = 'fixed top-0 left-0 h-full w-2/3'
  const drawerTransform = open ? 'translate-x-0' : '-translate-x-full'

  return (
    <>
      {/* Hamburger button and Logo for mobile */}
      <div className='md:hidden flex items-center p-4 justify-between w-full'>
        <button
          className='text-3xl text-orange-400'
          onClick={() => setOpen(true)}
        >
          <i className='fas fa-bars'></i>
        </button>
        <Logo />
      </div>

      {/* Main navbar for md and up */}
      <div className='hidden md:flex text-orange-400 text-2xl p-6 rounded mx-4 justify-between items-center'>
        <Logo />
        <div className='flex w-full justify-around items-center'>
          <SearchBar />
          <NavCart />
          <SingIn />
        </div>
      </div>

      {/* Left Drawer for mobile */}
      <div
        className={`md:hidden bg-white rounded shadow p-4 transition-transform duration-700 ease-in flex flex-col z-50 ${drawerPosition} ${drawerTransform}`}
        style={{}}
      >
        <button
          className='self-end mb-2 text-xl'
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
       <div className='flex flex-col justify-around h-full flex-1 text-4xl cursor-pointer'>
       {
        open && 
        <div className='text-xs'>
         <SearchBar />
        </div>
       }
   
    <NavCart />
    <SingIn />
  </div>
      </div>

      {/* Overlay when drawer is open */}
      {open && (
        <div
          className='fixed inset-0 bg-black bg-opacity-30 z-40'
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
