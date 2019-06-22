import React from 'react';
import Logo from '../logo.svg'

function Header(props){
    
    return (
    <div>
        <header className="header"> 
            <img src={Logo} alt="react logo" className="App-logo"/>
            {/* <h1>Welcome to the Memory Game!</h1> */}
            <h1>Score: {props.score} | Top Score: <span className="topScore"> {props.topScore} </span></h1>
        </header>
    </div>
    )
}

export default Header;