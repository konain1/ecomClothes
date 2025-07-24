import { useState } from 'react'
import Logo from './navUI/Logo'
import SearchBar from './navUI/SearchBar'
import NavCart from './navUI/NavCart'
import SingIn from './navUI/SingIn'

function Navbar () {
  const [open, setOpen] = useState(false)

  // Only left drawer position and transform
  const drawerPosition = 'fixed top-0 left-0 h-full w-2/3 sm:w-1/2'
  const drawerTransform = open ? 'translate-x-0' : '-translate-x-full'

  return (
    <>
      {/* Hamburger button and Logo for mobile */}
      <div className='md:hidden flex items-center p-4 justify-between w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-30'>
        <button
          className='relative group p-2 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200'
          onClick={() => setOpen(true)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className="block w-5 h-0.5 bg-white rounded-full transform transition-all duration-200 group-hover:w-6"></span>
            <span className="block w-4 h-0.5 bg-white rounded-full transform transition-all duration-200 group-hover:w-6"></span>
            <span className="block w-5 h-0.5 bg-white rounded-full transform transition-all duration-200 group-hover:w-6"></span>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-200"></div>
        </button>
        
        <div className="flex-1 flex justify-center">
          <Logo />
        </div>
        
        {/* Quick access cart for mobile */}
        <div className="p-2">
          <NavCart />
        </div>
      </div>

      {/* Main navbar for md and up */}
      <div className='hidden md:flex sticky top-0 z-30 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm'>
        <div className='flex w-full max-w-7xl mx-auto px-6 py-4 justify-between items-center'>
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Center section with search */}
          <div className='flex-1 max-w-2xl mx-8'>
            <SearchBar />
          </div>
          
          {/* Right section with nav items */}
          <div className='flex items-center space-x-6'>
            <div className="relative group">
              <NavCart />
            </div>
            <div className="relative group">
              <SingIn />
            </div>
          </div>
        </div>
      </div>

      {/* Left Drawer for mobile */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-2xl transition-all duration-500 ease-out flex flex-col z-50 ${drawerPosition} ${drawerTransform}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-pink-50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-gray-800">Menu</span>
          </div>
          
          <button
            className='group p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200'
            onClick={() => setOpen(false)}
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Drawer content */}
        <div className='flex flex-col flex-1 p-6 space-y-6'>
          {/* Search section */}
          {open && (
            <div className='animate-fadeIn'>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Search</h3>
              <div className="bg-gray-50  rounded-xl p-3 ">
                <SearchBar />
              </div>
            </div>
          )}
          
          {/* Navigation items */}
          <div className="space-y-4 flex-1">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Navigation</h3>
            
            <div className="space-y-3">
              <div className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-200 cursor-pointer border border-transparent hover:border-orange-100">
                <NavCart />
              </div>
              
              <div className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-100">
                <SingIn />
              </div>
            </div>
          </div>
          
          {/* Decorative footer */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Overlay when drawer is open */}
      {open && (
        <div
          className='fixed inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40 backdrop-blur-sm z-40 transition-all duration-500 ease-out'
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Navbar