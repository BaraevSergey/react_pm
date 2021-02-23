import React from 'react'
import '../../css/index.css'
import Main from '../Backgrounds/Main_background'
import ButtonSignIn from '../Other_components/ButtonSignIn'
import LabelNewHere from '../Other_components/LabelNewHere'
import LabelForgotPass from '../Other_components/LabelForgotPass'
import FormInpMail from '../Other_components/FormInpMail'
import FormInpPass from '../Other_components/FormInpPass'
import LabelLogin from '../Other_components/LabelLogin'


export default function MainContent() {
    return(
        <Main>
            <div class='main__input_login'>
              
                <LabelLogin/>

                
                <FormInpMail/>

                <FormInpPass/>

                <LabelForgotPass/>
              
                <div class='main__input__bottom'>
                    <LabelNewHere/>
                    <ButtonSignIn/>
                </div>
            </div>
        </Main>
    )
}