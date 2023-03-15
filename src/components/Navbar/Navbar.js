import React,{useRef} from 'react'
import Brand from './Brand'
import NavBtn from './NavBtn'
import NavMenu from './NavMenu'
import NavButton from './NavButton'
import { useNav } from '../../context/NavContext'

function Navbar() {
  const nav = useRef()
  const {scrolled,navOpen} = useNav()

  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between w-full transition-colors p-4 md:px-[12rem] py-8  ${scrolled || navOpen ? 'bg-white text-black shadow-sm' : 'bg-transparent text-primary'} transition-colors`} style={{flexBasis: '50%'}}>
        <div className={`flex flex-row items-center justify-between `}>
        <Brand size={2} color={'text-green-600'}/>
        <NavButton/>
        </div>
        <NavMenu/>
    </div>
  )
}

export default Navbar