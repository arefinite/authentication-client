import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { login, logout, register } from './api'
import { TLoginFormSchema, TRegisterFormSchema } from '../validators/FormSchema'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

//register user mutation
export const useRegister = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (user: TRegisterFormSchema) => register(user),
    onSuccess: async data => {
      await queryClient.invalidateQueries(
        'validate-user' as InvalidateQueryFilters
      )
      toast.success(data.message)
      navigate('/')
    },
    onError: error => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    },
  })
}

//login user mutation
export const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (user: TLoginFormSchema) => login(user),
    onSuccess: async data => {
      await queryClient.invalidateQueries('validate-user'as InvalidateQueryFilters)
      toast.success(data.message)
      navigate('/')
    },
    onError: error => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    },
  })
}

//logout user mutation
export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: logout,
    onSuccess: async data => {
      await queryClient.invalidateQueries(
        ['validate-user','user-info'] as InvalidateQueryFilters
      )
      toast.success(data.message)
      navigate('/')
    },
  })
}
