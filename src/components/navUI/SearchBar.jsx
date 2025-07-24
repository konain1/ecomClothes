

import React from 'react'

function SearchBar() {

  return (

    <div className='flex justify-center gap-2 items-center '>
      <input placeholder='search...' type='text' className='border border-black rounded-md sm:px-10 '  />
      <span className='flex justify-center text-center px-2 hover:bg-gray-500 active:scale-95 bg-gray-400 py-1 rounded-md text-white'><i className="fa-solid fa-magnifying-glass"></i></span>
    </div>
    
  )
}

export default SearchBar