const ProtectedRoute = () => {
  return (
    <div className="wrapper mt-8 space-y-2">
      <h1 className="text-xl font-bold">Protected Route</h1>
      <p>This is protected route. If you are seeing content of here that is mean you are authenticated.</p>
    </div>
  )
}
export default ProtectedRoute