import React from 'react'

const Navbar = () => {
  return (
    <div>
<div className='flex justify-around bg-violet-300'>
    <div>
        PW-M
    </div>
    <ul className='flex gap-3 h-10'>
        <a href="/" className='hover:scale-105 hover:font-semibold cursor-pointer'><li>Home</li></a>
        <a href="/" className='hover:scale-105 hover:font-semibold cursor-pointer'><li>About</li></a>
        <a href="/" className='hover:scale-105 hover:font-semibold cursor-pointer'><li>Contact</li></a>
    </ul>
</div>
    </div>
  )
}

export default Navbar
