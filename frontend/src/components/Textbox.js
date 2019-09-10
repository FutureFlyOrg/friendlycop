import React, { Component } from 'react'

class Textbox extends Component {
    textbox = ''
    render() {
        let { placeholder = '', value = '', label = '', onChange = () => { }, disabled = false } = this.props

        return (

            <div className="form-group">
                <label>{label}</label>
                <input
                    ref={(elm) => this.textbox = elm}
                    type="text"
                    className="form-control "
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />

            </div>
        )
    }
}
export default Textbox 