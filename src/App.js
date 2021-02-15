import React from 'react';
import LogPage from './LogPage';
import RegPage from './RegPage'
export default function App() {
    const [isLoginPage, setisLoginPage] = React.useState (true);
    if (isLoginPage) {
        return(<LogPage setisLoginPage={setisLoginPage}/>)
    }
    else {
        return(<RegPage/>)
    }
}
