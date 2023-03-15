import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Auth() {
    const { pathname } = useLocation()

    useEffect(() => {
        if(pathname === '/auth') {
            window.location.href = '/auth/login'
        }
    }, [pathname])

  return (
    <section className='flex-row-start p-[8rem] items-center justify-center'>
        <Outlet/>
    </section>
  )
}

export default Auth