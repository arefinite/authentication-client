import { Menu, X } from 'lucide-react'
import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useLogout } from '../../services/mutations'

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { mutate: logoutUser } = useLogout()
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleLogout = () => {
    logoutUser()
  }
  return (
    <header className='shadow-lg'>
      <section className='wrapper flex items-center justify-between py-4'>
        <div className='text-2xl lg:text-3xl drop-shadow font-bold'>
          <Link to='/'>Authentication</Link>
        </div>
        <nav className='space-x-6 hidden md:block'>
          {!isLoggedIn && (
            <>
              <NavLink to='register'>Register</NavLink>
              <NavLink to='login'>Login</NavLink>
              <NavLink to='protected-route'>Protected Route</NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              <NavLink to='dashboard'>Dashboard</NavLink>
              <NavLink to='protected-route'>Protected Route</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
        <nav className='md:hidden'>
          <Menu onClick={toggleMenu} />
          {showMenu && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-50  transition-opacity duration-200`}
              onClick={toggleMenu}
            ></div>
          )}
          <div
            className={`fixed  z-50 top-0 right-0 h-screen bg-white w-[250px] pt-4 shadow-md transition-transform duration-200 ease-in-out ${
              showMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between px-4 items-center border-b border-dotted border-lighter pb-3'>
              <div className='text-xl'>Welcome!</div>
              <div className='flex justify-end'>
                <X className='text-black cursor-pointer' onClick={toggleMenu} />
              </div>
            </div>
            <div className='px-4'>
              <ul className='mt-4 flex flex-col gap-3'>
                <li>
                  <NavLink to='/register' onClick={() => setShowMenu(false)}>
                    Register
                  </NavLink>
                </li>

                <li>
                  <NavLink to='/login' onClick={() => setShowMenu(false)}>
                    Login
                  </NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard' onClick={() => setShowMenu(false)}>
                    Dashboard
                  </NavLink>
                </li>
              </ul>
              <button className='bg-dark mt-2 text-white rounded px-3 py-1'>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </section>
    </header>
  )
}
export default Header
