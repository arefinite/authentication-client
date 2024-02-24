import { z } from 'zod'

//register form schema
export const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name has to be at least 3 characters long' }),
    email: z.string().email({ message: 'Enter a valid email' }),
    password: z
      .string()
      .min(6, { message: 'Password has to be at least 6 characters long' }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm password has to be at least 6 characters long ',
    }),
  })
  .refine(
    form => {
      return form.password === form.confirmPassword
    },
    {
      message: 'Password and confirm password are not matched',
      path: ['confirmPassword'],
    }
  )

export type TRegisterFormSchema = z.infer<typeof RegisterFormSchema>

//login from schema
export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password has to be at least 6 characters long' }),
})

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>
