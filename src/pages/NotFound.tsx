const NotFound = () => {
  return (
    <main className='flex h-screen justify-center items-center  font-bold'>
      <div className='text-center space-y-4 text-2xl'>
        <p>404 | Not Found</p>
        <button className='px-3 py-2 bg-green-500 text-lg rounded text-white'>
          Back to Home
        </button>
      </div>
    </main>
  )
}
export default NotFound
