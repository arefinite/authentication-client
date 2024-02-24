import { useQuery } from '@tanstack/react-query'
import { userInfo, validateUser } from './api'

//validate user query
export const useValidateUser = () => {
  return useQuery({
    queryKey: ['validate-user'],
    queryFn: validateUser,
  })
}

//get user information
export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['user-info'],
    queryFn: userInfo,
  })
}

