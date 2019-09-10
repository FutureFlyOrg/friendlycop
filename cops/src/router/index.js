import { lazy } from 'react'

const Login = lazy(() => import('../views/Login'))
const Register = lazy(() => import('../views/Register'))
const Complaints = lazy(() => import('../views/Complaints'))


export default [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/complaints',
        component: Complaints,
    },
    
]