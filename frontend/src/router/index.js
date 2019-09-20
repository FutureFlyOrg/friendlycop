import RegisterView from '../pages/Register/view/RegisterView'
import CaptureImageView from '../pages/CaptureImage/view/CaptureImageView';
import ComplaintPageView from '../pages/ComplaintPage/view/ComplaintPageView';
import NewRegister from '../pages/Register/component/NewRegister';
import ImageCapture from '../pages/CaptureImage/component/ImageCapture';


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
    } ,
    {
        path: '/ComplaintPageView',
        component: ComplaintPageView
    } ,
    {
        path: '/NewRegister',
        component: NewRegister
    },
    {
        path: '/ImageCapture',
        component: ImageCapture
    } 


]