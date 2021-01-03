import React from 'react'
import LoginText from './MyComponents/Login'
import InputPassword from './MyComponents/Password'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const imgStyle = {
    margin:'30%',
  };

  return (
        <div class='container-fluid' style={imgStyle}>

          <div class="row" >
            <div class="col-md-6 offset-md-3">
              <LoginText/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 offset-md-3">
              <InputPassword/>
            </div>
          </div>
        </div>
  );
  
}

export default App;