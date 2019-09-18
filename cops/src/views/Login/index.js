import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/ApiService';



const Login = props => {
    const [state, setState] = useState({
        inProgress: false,
        error: ''
    })
    const onLogin = e => {
        e.preventDefault();
        let { username, password } = e.target;
        let loginBody = {
            username: username.value,
            password: password.value
        }
        if(loginBody.username ==='' || loginBody.password === '') {
            setState({
                ...state,
                error:'Enter Username and Password'
            })
            return
        }
        setState({
            ...state,
            inProgress: true
        })
        auth.login(loginBody).then(res => {
            setState({
                ...state,
                inProgress: false
            })
            if (res.status === 'success') {
                localStorage.setItem('id',res.data.id);
                props.history.push('/complaints');
            }
            else {
                setState({
                    ...state,
                    error: res.data
                })
            }
        })
    }
    const clearError = () => setState({
        ...state,
        error:''
    })
    let { inProgress, error } = state;
    return (
        <div className="login-wrapper">
            <form onSubmit={onLogin}>
                <div className="logo">
                    <img src="/assets/images/logo.svg" className="img-fluid" alt="" />
                </div>
                <div className="text-group border-primary">
                    <h2><b>Wellcome,</b></h2>
                    <h3 className="text-secondary mb-5">Login to continue</h3>
                </div>
                <div className="form-group">
                    <input type="text" name="username" className="form-control form-control-lg" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control form-control-lg" placeholder="Password" />
                </div>
                {
                    error !== '' && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                            <button  className="close" onClick={clearError}>
                                <span>&times;</span>
                            </button>
                        </div>
                    )
                }
                <button type="submit" className="btn btn-primary btn-lg btn-block mb-3"> {inProgress ? <> <i className="fas fa-spinner fa-spin mr-2"></i>Please wait..</> : 'Login'} </button>
                <Link to="/register" className="btn btn-outline-primary btn-block btn-lg">Create Account</Link>
            </form>

        </div>
    )
}

export default Login;