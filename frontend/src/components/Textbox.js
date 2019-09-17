import React, { Component } from 'react'

class Textbox extends Component {
    textbox = ''
    render() {
        let { placeholder = '', value = '', label = '', onChange = () => { }, disabled = false, style, formStyle} = this.props

        return (

            <div className="form-group" style={formStyle}>
              { label  ? <label >{label}</label> : null}
                <input
                    style={style}
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