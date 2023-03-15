import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../../data/store';
import Sidebar from '../sidebar/Sidebar';

function Header() {
    const [user, setUser] = useAtom(userAtom)

    const logout = () => {
        setUser({user: null, token: null})
        localStorage.removeItem('Mantra-Admin-User')
    }

  return (
    <div className='flex-row-start border-b items-center font-barlow container py-4'>
        <div className='self-center font-bold text-lg w-24'>
            <img src={Logo}/>
        </div>
        <Sidebar/>
        <div>
            {user?.token === null ? <Link to={'/auth/login'} className='btn-primary'>Login</Link> : 
            <div className='flex-row-start gap-2 items-center justify-end w-max'>
                <FaUserCircle className='text-xl'/>
                <div className='self-center'>Hello, {user?.user?.username || 'Employee'}</div>
                <button onClick={logout} className='btn-primary'>Logout</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Header