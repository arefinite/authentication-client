import axios from 'axios'
import { TLoginFormSchema, TRegisterFormSchema } from '../validators/FormSchema'

const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL,
})
//register user
export const register = (user: TRegisterFormSchema) => {
  return api
    .post('/auth/register', user, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

//login user
export const login = (user: TLoginFormSchema) => {
  return api
    .post('/auth/login', user, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

//logout user
export const logout = () => {
  return api
    .post('/auth/logout', null, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

//validate user
export const validateUser = () => {
  return api
    .get('/auth/validate-user', { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}

//get user information
export const userInfo = () => {
  return api.get('/auth/user-info', { withCredentials: true })
  .then(res=>res.data).catch(err=>{throw err})
}