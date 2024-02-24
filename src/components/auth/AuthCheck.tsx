import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

interface IProps {
  children: React.ReactNode
  isProtected?: boolean
}

const AuthCheck = ({ children, isProtected }: IProps) => {
  const { isLoggedIn } = useContext(AuthContext)
  const { pathname } = useLocation()
  if (isProtected && !isLoggedIn) {
    return <Navigate to='/login' />
  }
  if (isLoggedIn && (pathname === '/login' || pathname === '/register')) {
    return <Navigate to='/' />
  }
  return children
}
export default AuthCheck
