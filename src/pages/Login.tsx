import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormSchema, TLoginFormSchema } from '../validators/FormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '../components/form/TextField'
import { useLogin } from '../services/mutations'

const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate: loginUser } = useLogin()

  const onSubmit: SubmitHandler<TLoginFormSchema> = values => {
    loginUser(values)
    reset()
  }

  return (
    <main className='flex justify-center mt-8'>
      <section className='shadow-lg p-4 '>
        <h1 className='text-center text-xl md:text-2xl font-bold '>Login</h1>
        <form
          className='mt-4 flex flex-col gap-3 w-[340px] md:w-[500px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type='email'
            placeholder='Enter your email'
            inputProps={register('email')}
            error={errors.email?.message}
          />
          <TextField
            type='password'
            placeholder='Enter your password'
            inputProps={register('password')}
            error={errors.password?.message}
          />

          <input
            type='submit'
            value='Login'
            className='w-full bg-green-500 text-white rounded py-2 px-3 cursor-pointer'
          />
        </form>
      </section>
    </main>
  )
}
export default Login
