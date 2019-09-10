import RegisterView from '../pages/Register/view/RegisterView'
import CaptureImageView from '../pages/CaptureImage/view/CaptureImageView';


export default [
    {
        path : '/',
        component : RegisterView ,
        exact : true
    } ,
    {
        path: '/RegisterView',
        component: RegisterView
    },
    {
        path: '/CaptureImageView',
        component: CaptureImageView
    } 

]