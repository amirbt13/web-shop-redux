import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { CartContext } from '../contexts/CartContextProvider'


import logo from '../icons/png-logo-web.png'
import burgerMenu from '../icons/ham-menu.svg'
import cross from '../icons/cross.svg'

const Header = () => {
  const location = useLocation()

  const {state} = useContext(CartContext)

  const [isBurgerShow, setIsBurgerShow] = useState(false)

  return (
    <div 
    className={`${location.pathname === "/" && "bg-gradient-to-r from-cyan-500 to-indigo-700" } w-full flex justify-between sticky top-0 ${location.pathname === "/cart" ? "bg-slate-100 backdrop-blur" : "bg-[#f8fafc7c] backdrop-blur"} items-center`} style={{padding: "0 16px"}}>
      <div>
        <img className='w-12 rounded-full ' src={logo} alt="logo"/>
      </div>
      <div className='hidden sm:block text-2xl'>
        <ul className='flex flex-row space-x-6'>
          <li className='hover:tracking-widest transition-all font-light'>
            <Link to='/cart'>

            <span 
            className={`px-[4px] relative bottom-3 ${location.pathname === "/" ? "bg-white text-black border-black border-[1px]" : "bg-gradient-to-r from-cyan-500 to-indigo-700 text-white"} rounded-full text-sm`}
            >{state.itemsCount}
            </span>
            CART</Link>

          </li>

          <li className='hover:tracking-widest transition-all font-light'><Link to='/contact'>CONTACT</Link></li>
          <li className='hover:tracking-widest transition-all font-light'><Link to='/store'>SHOP</Link></li>
          <li className='hover:tracking-widest transition-all font-light'><Link to='/'>HOME</Link></li>

        </ul>
      </div>
      <div className='sm:hidden' onClick={() => setIsBurgerShow(true)}>
        <img className='w-8' src={burgerMenu} alt='menu'/>
      </div>

      <div className={` transition ease-in-out ${isBurgerShow ? "translate-y-[25px]" : "-translate-y-[100px]"} bg-white absolute right-0 w-screen flex justify-between border-b-2 px-4`}>

        <div>
          <img onClick={() => setIsBurgerShow(false)}
          className='relative top-2 left-2 w-4' src={cross} alt="cross"
          />
        </div>

        <div>
          <ul onClick={() => setIsBurgerShow(false)}
          className='text-right mr-1'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/store'>SHOP</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/cart'><span 
            className={`px-[4px] relative bottom-[2px] right-1 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white rounded-full text-xs`}
            >{state.itemsCount}
            </span>CART</Link></li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Header