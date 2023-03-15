import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

function Brand({size,color}) {
  return (
      <Link className='w-28' to={'/'}>
        <img className='w-full' src={Logo}/>
      </Link>
  )
}

export default Brand