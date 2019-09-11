import React , {Component} from 'react' 
import Button from '../pages/Register/component/Button'

class Footer extends Component{
    render(){
        return (<div className="Footer">
          <div className='row'>
              <div className='col'>
                  <Button 
                  btnName = '<<<' 
                  onClick={()=>{}}/>
                  </div>
                <div className='col'>
                    <Button
                        btnName='>>>'
                        onClick={() => { }} />
                </div>
              </div>
        </div>)
    }
}
export default Footer ; 