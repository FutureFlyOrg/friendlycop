import React , {Component} from 'react'
import axios from 'axios';
import Button from '../../Register/component/Button';
import '../css/scss.scss';
import img from  '../../../bg2.jpg' 

class ComplaintPageView extends Component{

    constructor(props){
        super(props);
        this.state = {
        list : [1 , 2] 
    }
    }
    
    componentWillMount(){
        var data = {"username" :localStorage.getItem("username")}

        axios.post('https://backend.futureflyorg.now.sh/getCompliantsByUsername', data).then((res , err)=>{
            if(res.data.data){
                var ss = res.data.data.details
                this.setState({ list : ss})
            }
        })
    }
    registercomplaint=()=>{
        console.log(this.props)
        this.props.history.push('/CaptureImageView')
    }
    render(){
        var list = this.state.list || [] ;
        return (
            <div  style={{display : 'flex' , flexDirection : 'column' , height : '450px'}}>
                {/* {
                    list.length > 0 ? list.map((item , index)=>{
                       return <div className='row compdisplay'>
                            <div className='col-10  list'>
                                <p>{item}</p>
                                </div>
                            </div>

                    })  : <Button btnName= 'New Complaint'  onClick={this.registercomplaint}/>
                } */}
                <div className='row align-items-center' style={{marginBottom : '10%'}}>
                    <div className='col-2' style={{ color: 'white'  ,fontSize : '26px'}}>
                        <i class="fas fa-id-card-alt"></i>
                        </div>
                    <div className='col' style={{color : 'white'}}>
                        <h4>Ram R Prakash</h4>
                    </div>
                    </div>

                <div className='row' style={{ height: '100%', margin: '10px -20px 10px 10px' , overflow : 'hidden'}}> 
                    <div className='row' style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
                        <div className='row' style={{ height: '105px'}}> 
                    <div className='col' >
                        <img src={img} style={{width : '90%' , height : '75px' }}></img>
                      </div>
                    <div className='col'>
                        <div style={{display : 'flex' , flexDirection : 'column'}}>
                            <div style={{color : 'white'}}>
                                hi
                                </div>
                            <div style={{ color: 'white' }}>
                                hi
                                </div>
                            <div style={{ color: 'white' }}>
                                hi
                                </div>
                            </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div style={{  width : '100%' , height : 50}}>
                    <div className='row align-items-end'>
                        <div className = 'col' style={{color : 'white'}}>
                            <i class="fas fa-user-circle"></i>
                            </div>
                        <div className='col' onClick={this.registercomplaint} style={{ color: 'white' }}>
                            <i class="fas fa-plus-square"></i>
                        </div>
                        <div className='col' style={{ color: 'white' }}>
                            <i class="fas fa-bell"></i>
                        </div>
                        </div>
                </div>
                </div>
               
            
        )
    }
}
export default ComplaintPageView ;