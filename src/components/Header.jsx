import React, { useEffect, useState } from 'react'
import {  Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import usericon from "../assets/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../Navigation';



const Header = () => {


  const [searchInput, setSearchInput] = useState('');
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      navigate(`/search?q=${searchInput}`);
    }
  };

  
  return (
    <header className='fixed top-0 w-full h-16 bg-black  opacity-80 z-40'>
      <div className="container mx-auto flex px-4 items-center h-full">
        <Link to="/">
          <img src={logo} alt="" width={120}/>
        </Link>
        <nav className='hidden lg:flex items-center gap-2 ml-5'>
          {navigation.map((route) => (
            <NavLink key={route.href} to={route.href} className={({ isActive }) => `px-2 hover:text-neutral-100  ${isActive && 'text-white'}` }>
              {route.label}
            </NavLink>
          ))}
        </nav>
        <div className='ml-auto flex items-center gap-24'>
          <div className='px-3 h-10 rounded-full bg-neutral-700  lg:flex items-center justify-evenly gap-2 hidden'>
            <input type="text" className='outline-none text-neutral-50 ' placeholder='Search for movie...' onChange={handleSearchChange} onKeyDown={handleKeyDown} />
            <div className="text-2xl text-white">
              <IoSearchOutline/>
            </div>
          </div>
          <div className='w-8 h-8 rounded-full overflow-hidden trasform-all active:scale-50 cursor-pointer'>
            <img src={usericon}  alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
