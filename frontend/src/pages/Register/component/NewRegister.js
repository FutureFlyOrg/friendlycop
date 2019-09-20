import React ,{Component} from 'react' 
import Textbox from '../../../components/Textbox'


class NewRegister extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (<div>
            <div item>
                <h4 style={{ color: 'gray', textAlign: 'left' }}>Sign Up to</h4>
                </div>
            <div item >
                <h2 style={{ color: 'white', textAlign: 'left', marginBottom: '20%' }}>Friendly Cop</h2>
            </div>
            <div className='row align-items-center' style={{ borderBottom: '1px solid gray', display: 'flex', marginBottom : '10%' }}>
                <div className='col-2' style={{ color: 'white' }}>
                    <i className="far fa-envelope"></i>
                </div>
                <div className='col '>
                    <Textbox
                        formStyle={{ margin: 0 }}
                        style={{ border: "0px", boxShadow: "none", backgroundColor: 'transparent', color: 'white', borderRadius: 0 }}
                        placeholder={'Enter UserId'}
                        value={this.state.userName}
                        onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                </div>
            </div>
            <div item>
                <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: '20px', width: '100%' }}>Notify me</button>
            </div>


            </div>)
    }
}
export default NewRegister