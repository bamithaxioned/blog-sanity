import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="wrapper flex items-center justify-between bg-black text-white p-5">
          <Link to={'/'}>
            <h1 className='logo font-bold text-xl md:text-2xl ld:text-3xl'>TeenBlog</h1>
          </Link>
          <nav>
            <ul className='flex'>
              <li className='mr-5 lg:text-lg'>
                <button>
                  <Link to={'/'} >Home</Link>
                </button>
                </li>
              <li className=' lg:text-lg'>
                <button>
                  <Link to={'/blog/'} >Blog</Link>
                </button>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header