import React, { useEffect } from 'react'
import {useNav} from '../../context/NavContext'
import './navMenu.css'
import { useLocation, Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from '../../data/store'

import Sidebar from '../sidebar/Sidebar'

function NavMenu() {
    const {navOpen, toggleNav} = useNav()
    const {pathname} = useLocation()
    const [user, setUser] = useAtom(userAtom)

    useEffect(() => {
        if(navOpen) toggleNav()
    }, [pathname])

    const logout = () => {
      setUser({user: null, token: null})
      localStorage.removeItem('Mantra-Admin-User')
  }


  return (
<>
    <div className={`w-full flex flex-col md:flex-row items-center justify-center font-barlow uppercase md:justify-end gap-8 overflow-auto lg:overflow-visible ${!navOpen ? 'box-height-0' :'box-height-full'}`}>
        <Sidebar/>
    <div>
            {user?.token === null ? <Link to={'/auth/login'} className='btn-primary'>Login</Link> : 
            <div className='flex-col-4 md:flex-row-start gap-2 items-center justify-end md:w-max'>
                <div className='self-center'>Hello, {user?.user?.username || 'Employee'}</div>
                <button onClick={logout} className='btn-primary'>Logout</button>
            </div>
            }
        </div>
    </div>
</>
  )
}

export default NavMenu