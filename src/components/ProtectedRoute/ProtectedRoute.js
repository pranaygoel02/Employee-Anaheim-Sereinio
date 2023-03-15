import { useAtom } from 'jotai'
import { userAtom } from '../../data/store'
import { useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const [user, setUser] = useAtom(userAtom)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  
  if (user?.token === null) {
    navigate('/auth/login')
  }

  if(pathname.includes('admins') && user?.user?.permissions[0].superAdmin === false) {
    navigate('/')
  }

  return (
    children
  )
}

export default ProtectedRoute