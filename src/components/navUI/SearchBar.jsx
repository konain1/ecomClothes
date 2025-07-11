

import React from 'react'

function SearchBar() {
  return (
    <div className='flex justify-center items-center'>
      <input placeholder='search...' type='text' className='border border-black rounded-md px-10' />
      <span className='flex justify-center text-center px-2'><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
  )
}

export default SearchBar