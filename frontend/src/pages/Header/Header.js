import React, { Component } from 'react'
import logo from './images/fiery_cust.PNG'
import logout from './images/icons8-logout-rounded-up-50.png'

class Header extends Component {

    logout(){
        alert("logged out")
    }
    render() {

        return (
            <div className="Header">
                <div className="logo">
                    <img src={logo} className="images" height={13}/>
                </div>
                <div className="Name">
                    <h3>Friendly Cops</h3>
                </div>
                {this.props.logout?<div className="logout" onClick={()=>this.logout()}>
                    <img src={logout} className="logout-img" />
                </div>:""}
            </div>
        )
    }
}
export default Header