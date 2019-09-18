// import { lazy } from 'react'
import Login from '../views/Login';
import Register from '../views/Register';
import Complaints from '../views/Complaints';
import ComplaintsDetails from '../views/ComplaintsDetails';

// const Login = lazy(() => import('../views/Login'))
// const Register = lazy(() => import('../views/Register'))
// const Complaints = lazy(() => import('../views/Complaints'))
// const ComplaintsDetails = lazy(() => import('../views/ComplaintsDetails'))


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