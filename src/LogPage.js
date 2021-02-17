import React from 'react'
function LogPage(props) {

  return (
        <div class='app'>
          
          <header class='header'>
            <picture>
              <img class="header__lock" src="/img/lock.png" alt="lock" />
            </picture>
            <div class='header__sign_buttons' >
              <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(true)}>Sign In</button>
              <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(false)}>Sign Up</button>
            </div>
          </header>
          
          <main class='main text'>
            <div class='main__input_login'>
              
              <div class='main__input_login__login-span'>
                  <b> Login </b>
              </div>

              <div class='main__input_login__input'>
                <span>
                  E-mail
                </span>

                <input class='main__input_login__input__input-mail'>
              
                </input>
              </div>

              <div class='main__input_login__input'>
                <span>
                  Password
                </span>

                <input class='main__input_login__input__input-pass'>
                
                </input>
              </div>

              <span class='main__input__forgot'>
                <b> Forgot Password? </b>
              </span>
              

              <div class='main__input__bottom'>
                <span class='main__input__bottom__new-here' onClick={()=>props.setisLoginPage(false)}>
                  New Here? <b> Register </b>
                </span>

                <button class='main__input__bottom__auth'>
                  Sign In
                </button>
              </div>
            </div>
          </main>
          
          <footer class='footer'>
            <span class='footer__constructions'> This site is under construction</span>
            <span class='footer__about-me'> 
              Created by Baraev Sergey
              baraev.sergey@mail.ru 
            </span>
          </footer>
        
        </div>
  );
  
}
export default LogPage;



