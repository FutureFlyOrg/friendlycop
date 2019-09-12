import React , {Component} from 'react'

class Button extends Component{
    render(){
        let {onClick=()=>{} , className = '' ,btnName = ''} = this.props ;
        return (
            <button 
            type="button" 
            class={className?className:"btn btn-primary"} 
            onClick={onClick}>
            {btnName}
            </button>
        )
    }
}
export default Button ;