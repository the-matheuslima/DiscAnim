import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import './Navbar.scss'


function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <nav className='app__nav app__container'>
      <h2 className='logo'><Link to="/">DiscAnim</Link></h2>

      {/* <ul className='app__nav-items'>
        <li className='app__nav-item'><Link to='/detalins'>gener</Link></li>
        <li className='app__nav-item'>Trending</li>
      </ul> */}

      <form className='app__nav-form'>
        <input type="text" value={search} onChange={handleSearch} />

        <Link to={`/${search}`}>
          <button className='app__nav-btn'>ver</button>
        </Link>
      </form>
    </nav>
  )
}

export default Navbar