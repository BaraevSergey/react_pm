import React from 'react'
import '../../css/index.css'
import Header from '../Backgrounds/Header_background'
import Lock from '../Other_components/Lock'
import ButtonPurple from '../Other_components/ButtonPurple' 
export default function HeadContent(){ 
    return ( 
    <Header>
        <Lock/>
        <div class='header__sign_buttons' >
            <ButtonPurple/>
            <ButtonPurple/>
            {/* <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(true)}>Sign In</button>
            <button class="header__sign_buttons__button" onClick={()=>props.setisLoginPage(false)}>Sign Up</button> */}
        </div>
    </Header> 
    )
}
