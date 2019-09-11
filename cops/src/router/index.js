import { lazy } from 'react'

const Login = lazy(() => import('../views/Login'))
const Register = lazy(() => import('../views/Register'))
const Complaints = lazy(() => import('../views/Complaints'))
const ComplaintsDetails = lazy(() => import('../views/ComplaintsDetails'))


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
    {
        path: '/complaints-details',
        component: ComplaintsDetails,
    },
    
]