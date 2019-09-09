import React , {Component} from 'react'
import Button from '../component/Button';

class RegisterView extends Component{

    clicked(){
        alert('Clicked ..')
    }
    render(){
        
        return ( <div>
            <Button btnName = "Register" onClick={this.clicked}/>
            
        </div> ) 
    }
}
export default RegisterView