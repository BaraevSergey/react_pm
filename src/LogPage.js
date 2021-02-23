import React from 'react'
import HeadContent from './components/Header_content/Header_content_logpage'
import FootContent from './components/Footer_content/Footer_content'
import Main from './components/Main_content/Main_content_logpage'
function LogPage(props) {
  return (
        <div class='app'>
          {/* <HeadContent/> */}
          <header class='header'>
            <picture>
              <img class="header__lock" src="/img/lock.png" alt="lock" />
            </picture>
            <div class='header__sign_buttons' >
              <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(true)}>Sign In</button>
              <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(false)}>Sign Up</button>
            </div>
          </header>
          

          {/* <Main/> */}
          <main class='main text'>
            <div class='main__input_login'>
              
              <div class='main__input_login__login-span'>
                  <b> Login </b>
              </div>

                
              <form class='main__input_login__input'>
                
                <label>
                  E-mail
                </label>

                <input class='main__input_login__input__mail'>
              
                </input>
              </form>

              <form class='main__input_login__input'>
                <label>
                  Password
                </label>

                <input class='main__input_login__input__pass'>
                
                </input>
              </form>

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
          
          {/* <FootContent/> */}
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



