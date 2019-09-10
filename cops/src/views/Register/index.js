import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../utils/ApiService';

const Login = props => {
    const [state, setState] = useState({
        inProgress: false,
        error: '',
        isExisting: true
    })
    let { inProgress, error,isExisting } = state;
    const onRegister = e => {
        e.preventDefault();
        let { username, password } = e.target;
        let registerBody = {
            username: username.value,
            password: password.value
        }
        if (registerBody.username === '' || registerBody.password === '') {
            setState({
                ...state,
                error: 'Enter Username and Password'
            })
            return
        }
        if(isExisting) {
            setState({
                ...state,
                isExisting: true,
                error:'Not Available'
            })
            return
        }
        setState({
            ...state,
            inProgress: true
        })
        auth.register(registerBody).then(res => {
            setState({
                ...state,
                inProgress: false
            })
            if(res.message === 'Success') {
                props.history.push('/complaints')
            }
        })
        
    }
    const checkUserAvailable = e => {
        let { value:username } = e.target;
        auth.checkUser({username}).then(res => {
            setState({
                ...state,
                isExisting: res.data === "Not Available",
                error: res.data === "Not Available" ? res.data : ''
            })
        })
    }
    const clearError = () => setState({
        ...state,
        error: ''
    })
    return (
        <div className="login-wrapper">
            <form onSubmit={onRegister} autoComplete="off">
                <div className="logo">
                    <img src="/assets/images/logo.svg" className="img-fluid" alt="" />
                </div>
                <div className="text-group border-primary">
                    <h2><b>Wellcome,</b></h2>
                    <h3 className="text-secondary mb-5">Create account a new to continue</h3>
                </div>
                <div className="form-group">
                    <input type="name" name="username" className="form-control form-control-lg" placeholder="Username" onBlur={checkUserAvailable} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control form-control-lg" placeholder="Password" />
                </div>
                {
                    error !== '' && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                            <button className="close" onClick={clearError}>
                                <span>&times;</span>
                            </button>
                        </div>
                    )
                }
                <button type="submit" className="btn btn-primary btn-block btn-lg">{inProgress ? <> <i className="fas fa-spinner fa-spin mr-2"></i>Please wait..</> : 'Create Account'}</button>
                <Link to="/login" className="btn btn-outline-primary btn-lg btn-block mb-3">Login</Link>
            </form>

        </div>
    )
}

export default Login;