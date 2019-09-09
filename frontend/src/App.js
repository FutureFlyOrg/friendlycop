import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import {HashRouter , Switch , Route} from  'react-router-dom'

import Routes from './router'
import './scss.scss';

function App() {
  return (
   <HashRouter>
      <div className="display">
        <div className='App'>
     <Switch>
       {
          Routes.map((item , index)=>{
            return <Route key={"route_"+index} 
            path={item.path} 
            component={item.component}
            exact = {item.exact || false}/>
          })
       }
     </Switch>
     </div>
      </div>>
   </HashRouter>
  );
}

export default App;
