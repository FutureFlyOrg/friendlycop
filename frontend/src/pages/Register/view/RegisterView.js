import React, { Component } from 'react'
import Button from '../component/Button';
import Header from '../../Header/Header';
import Textbox from '../../../components/Textbox';
import axios from 'axios';

class RegisterView extends Component {

    state = {
        userName: ""
    }
    clicked = () => {
        alert('Clicked ..')
        var data = { username: this.state.userName }
        console.log('data ', data)
        axios.post('https://backend.futureflyorg.now.sh/checkUsernameAvailability', data).then((Response, err) => {
            console.log(Response, 'Res')
            if (Response.data.data == 'success') {
                console.log('coming ..', this.props)
                localStorage.setItem('username', Response.data.id)
                this.props.history.push('/ComplaintPageView')
            }
        })
    }
    render() {

        return (
            //      <div className="Main">
            //     {/* <Header logout={true}/> */}
            //     <div className="MainContent">
            //     <Textbox 

            //             placeholder = {'Enter User Name'} 
            //             value={this.state.userName} 
            //             onChange={(e) => { this.setState({ userName : e.target.value})}}/>
            //         <div className="button-botom"><Button btnName="Register" className={"button-register"} onClick={this.clicked} /></div>
            //         <div className="button-botom"><Button btnName="Login" className={"button-register"} onClick={this.clicked} /></div>
            //     </div>
            // </div> 
            <div>
                <div item >
                    <h4 style={{ color: 'gray', textAlign: 'left' }}>Welcome to</h4>
                </div>
                <div item >
                    <h2 style={{ color: 'white', textAlign: 'left', marginBottom: '20%' }}>Friendly Cop</h2>
                </div>
                <div className='row align-items-center' style={{ borderBottom: '1px solid GRAY', display: 'flex',  marginBottom: '20px' }}>
                    <div className='col-2' style={{ color: 'white' }}>
                        <i className="fas fa-user-tie"></i>
                    </div>
                    <div className='col '>
                        <Textbox
                            formStyle={{ margin: 0 }}
                            style={{ border: "0px", boxShadow: "none", backgroundColor: 'transparent', color: 'white', borderRadius: 0 }}
                            placeholder={'Enter User Name'}
                            value={this.state.userName}
                            onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                    </div>
                </div>
                <div className='row align-items-center' style={{ borderBottom: '1px solid gray', display: 'flex',}}>
                    <div className='col-2' style={{ color: 'white' }}>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className='col '>
                        <Textbox
                            formStyle={{ margin: 0 }}
                            style={{ border: "0px", boxShadow: "none", backgroundColor: 'transparent', color: 'white', borderRadius: 0 }}
                            placeholder={'Enter Password'}
                            value={this.state.userName}
                            onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                    </div>

                </div>
                <div item >
                    <h6 style={{ color: 'gray', textAlign: 'right' , fontSize : 12 , marginBottom : '20%' }}>Forget password ? </h6>
                </div>
                <div item>
                    <button type="button" className="btn btn-outline-primary btn-lg" style={{borderRadius : '20px' , width : '100%'}} onClick={
                        this.clicked
                    }>Login</button>
                    </div>
                <div item>
                   <h6 style={{color : 'white'}}> -OR </h6>
                </div>
                <div item>
                    <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: '20px', width: '100%' }}>Sign Up</button>
                </div>


            </div>

        )
    }
}
export default RegisterView