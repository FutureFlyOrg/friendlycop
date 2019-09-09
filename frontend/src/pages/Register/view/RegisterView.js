import React , {Component} from 'react'
import Button from '../component/Button';
import Header from '../../Header/Header';

class RegisterView extends Component{

    clicked(){
        alert('Clicked ..')
    }
    render(){
        
        return ( <div>
            <Header logout={false}/>
            <div className="MainContent">
            <Button btnName = "Register" className={"button-register"} onClick={this.clicked}/>
            </div>
        </div> ) 
    }
}
export default RegisterView