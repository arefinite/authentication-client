import { SubmitHandler, useForm } from 'react-hook-form'
import {
  RegisterFormSchema,
  TRegisterFormSchema,
} from '../validators/FormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '../components/form/TextField'
import { useRegister } from '../services/mutations'

const Register = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const { mutate: registerUser } = useRegister()

  const onSubmit: SubmitHandler<TRegisterFormSchema> = values => {
    registerUser(values)
    reset()
  }

  return (
    <main className='flex justify-center mt-8 '>
      <section className='shadow-lg p-4 w-full md:w-[500px] mx-4 md:mx-0'>
        <h1 className='text-center text-xl md:text-2xl font-bold '>Register</h1>
        <form
          className='mt-4 flex flex-col gap-3 '
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type='text'
            placeholder='Enter your name'
            inputProps={register('name')}
            error={errors.name?.message}
          />
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
          <TextField
            type='password'
            placeholder='Retype your password'
            inputProps={register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <input
            type='submit'
            value='Register'
            className='w-full bg-green-500 text-white rounded py-2 px-3 cursor-pointer'
          />
        </form>
      </section>
    </main>
  )
}
export default Register
