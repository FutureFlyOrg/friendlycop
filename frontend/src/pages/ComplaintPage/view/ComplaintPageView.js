import React , {Component} from 'react'
import axios from 'axios';
import Button from '../../Register/component/Button';
class ComplaintPageView extends Component{

    state = {
        list : [] 
    }
    componentWillMount(){

    }
    registercomplaint(){
        alert('registercomplaint ')
    }
    render(){
        var list = this.state.list || [] ;
        return (
            <div>
                {
                    list ? list.map((item , index)=>{

                    })  : <Button btnName= 'New Complaint'  onClick={this.registercomplaint}/>
                }
                </div>
               
            
        )
    }
}
export default ComplaintPageView ;