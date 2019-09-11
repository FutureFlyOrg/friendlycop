import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import {HashRouter , Switch , Route} from  'react-router-dom'

import Routes from './router'
import './scss.scss';
import Header from './pages/Header/Header';
import Footer from './components/Footer';

function App() {
  return (
   <HashRouter>
      
      <div className="display">
        <div className='App'>
          <Header logout={true} />
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

          <Footer />
     </div>
      </div>>
   </HashRouter>
  );
}

export default App;
