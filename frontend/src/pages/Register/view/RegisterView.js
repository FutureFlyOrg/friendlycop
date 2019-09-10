import React , {Component} from 'react'
import Button from '../component/Button';
import Header from '../../Header/Header';
import Textbox from '../../../components/Textbox';
import axios from 'axios';

class RegisterView extends Component{

    state={
        userName : ""
    }
    clicked=()=>{
        alert('Clicked ..')
        var  data = { username : this.state.userName}
        console.log('data ', data)
        axios.post('http://192.168.0.238:1330/checkUsernameAvailability',data).then((Response , err)=>{
            console.log(Response , 'Res')
            if (Response.data.data == 'success'){
                console.log('coming ..' , this.props)
                this.props.history.push('/ComplaintPageView')
            }
        })
    }
    render(){
        
        return ( <div className="Main">
            <Header logout={true}/>
            <div className="MainContent">
            <Textbox 
                    
                    placeholder = {'Enter User Name'} 
                    value={this.state.userName} 
                    onChange={(e) => { this.setState({ userName : e.target.value})}}/>
                <div className="button-botom"><Button btnName="Register" className={"button-register"} onClick={this.clicked} /></div>
                <div className="button-botom"><Button btnName="Login" className={"button-register"} onClick={this.clicked} /></div>
            </div>
        </div> ) 
    }
}
export default RegisterView