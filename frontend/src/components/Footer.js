import React, { Component } from 'react'
import Button from '../pages/Register/component/Button'

class Footer extends Component {
    render() {
        return (<div className="card-footer Footer">
            <div className="container">
                
                    <Button
                    className="btn btn-primary float-left"
                        btnName='<<<'
                        onClick={() => { }} />
                
                    <Button className="btn btn-primary float-right"
                        btnName='>>>'
                        onClick={() => { }} />
                
            </div>
        </div>)
    }
}
export default Footer; 