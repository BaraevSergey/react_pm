import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function InputPassword(){
    return(
            <input
                class="form-control form-control-lg"
                type="password" 
                id="inputPassword" 
                placeholder="Enter Password">
            </input>
    )
}