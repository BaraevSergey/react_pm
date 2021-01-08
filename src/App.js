import React from 'react'
import LoginText from './MyComponents/Login'
import InputPassword from './MyComponents/Password'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <div>
          <div class="header-page">
            
          </div>
          
          <div class='center-block'>
            <div class="center top-frame-login">
              <div class="row">
                <div class="col">
                  <LoginText/>
                </div>
              </div> 
              <div class="row indent">
                <div class="col">
                  <InputPassword/>
                </div>
              </div>     
            </div>

          </div>
        </div>
  );
  
}

export default App;