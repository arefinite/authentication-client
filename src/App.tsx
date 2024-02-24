import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/AuthContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={appRouter} />
          <ReactQueryDevtools />
          <Toaster />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}
export default App
