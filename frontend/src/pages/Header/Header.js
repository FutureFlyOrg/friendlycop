import React, { Component } from 'react'
import logo from './images/fiery_cust.PNG'
import logout from './images/icons8-logout-rounded-up-100.png'

class Header extends Component {

    logout(){
        alert("logged out")
    }
    render() {

        return (
            
                    <div class="card-header Header">
                {/* <div className="logo">
                    <img src={logo} className="images" height={13}/>
                </div> */}
                <div className="Name">
                    <h3>Friendly Cops</h3>
                </div>
                {this.props.logout?<div className="logout" onClick={()=>this.logout()}>
                    <img src={logout} className="logout-img" />
                    {/* <div style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i></div> */}

                </div>:""}
                
            </div>
        )
    }
}
export default Header