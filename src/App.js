import React from 'react'
function App() {

  return (
        <div>
          
          <header class='header'>
            <picture>
              <img class="lock" src="/img/lock.png" alt="lock" />
            </picture>
            <div class='sign_div' >
              <button class="button_sign_in">Sign In </button>
              <button class="button_sign_up">Sign Up </button>
            </div>
          </header>
          
          <main class='main'>
            <div class='input_login'>
              
              <div>
                <span>
                  <b class='LogInText'> Login </b>
               </span>
              </div>

              <div class='test'>
                <span class='text'>
                  E-mail
                </span>

                <input class='text_input'>
              
                </input>
              </div>

              <div class='test'>
                <span class='text'>
                  Password
                </span>

                <input class='text_input'>
                
                </input>
              </div>

              <span class='forgot text'>
                <b> Forgot Password? </b>
              </span>
              

              <div class='right-marg text'>
                <span>
                  New Here? <b> Register </b>
                </span>

                <button class='loginbutton'>
                  Sign In
                </button>
              </div>
            </div>
          </main>
          
          <footer class='footer'>
            <span class='develop_span'> This site is under construction</span>
            <span class='my_info'> 
              Created by Baraev Sergey
              baraev.sergey@mail.ru 
            </span>
          </footer>
        </div>
  );
  
}

export default App;