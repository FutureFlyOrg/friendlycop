import React , {Component} from 'react'
import axios from 'axios';
import Button from '../../Register/component/Button';
import '../css/scss.scss'
class ComplaintPageView extends Component{

    constructor(props){
        super(props);
        this.state = {
        list : [1 , 2] 
    }
    }
    
    componentWillMount(){
        console.log('coimim ...')
    }
    registercomplaint=()=>{
        console.log(this.props)
        this.props.history.push('/CaptureImageView')
    }
    render(){
        var list = this.state.list || [] ;
        return (
            <div>
                {
                    list.length > 0 ? list.map((item , index)=>{
                       return <div className='row compdisplay'>
                            <div className='col-10  list'>
                                <p>{item}</p>
                                </div>
                            </div>

                    })  : <Button btnName= 'New Complaint'  onClick={this.registercomplaint}/>
                }
                </div>
               
            
        )
    }
}
export default ComplaintPageView ;