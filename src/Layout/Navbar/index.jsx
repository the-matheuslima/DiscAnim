import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index';
import './style.scss'


function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav className='app__nav app__container'>

      <Link to="/"><h2 className='logo'>DiscAnim</h2></Link>

      <form className='app__nav-form'>
        <input type="text" value={search} onChange={handleSearch} placeholder='search anime' />

        <Link to={`/${search}`}>
          <Button text={'ver'} />
        </Link>
      </form>
    </nav>
  )
}

export default Navbar