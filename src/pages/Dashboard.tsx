import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useGetUserInfo } from '../services/queries'

const Dashboard = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { data, isFetching } = useGetUserInfo()

  if (isFetching) {
    return <p className='wrapper mt-8'>Loading...</p>
  }

  const name = data?.user?.name
    .split(' ')
    .map((s: string) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(' ')
  const email = data?.user?.email
  return (
    <main className='wrapper mt-8'>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>
          Welcome {isLoggedIn ? `${name}` : 'Guest'}
        </h1>
        {isLoggedIn ? (
          <>
            <p>Name: {name} </p>
            <p>Email: {email} </p>
          </>
        ) : (
          <p>Please login/register to see your information</p>
        )}
      </div>
    </main>
  )
}
export default Dashboard
