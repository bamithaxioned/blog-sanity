import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="wrapper flex items-center justify-center text-center h-screen flex-col">
          <h2 className='uppercase font-bold text4xl tracking-wide mb-5 md:text-6xl lg:text-8xl'>Teen Blog</h2>
          <Link to={'/blog'} className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>Visit Blog Page</Link>
        </div>
      </section>
    </>
  )
}

export default Homepage