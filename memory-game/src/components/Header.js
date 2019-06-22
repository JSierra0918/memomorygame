import React from 'react';

function Header(props){
    
    return (
    <div>
        <header className="header"> 
            <h1>Future Logo</h1>
            {/* <h1>Welcome to the Memory Game!</h1> */}
            <h1>Score: {props.score} | Top Score: {props.topScore} </h1>
        </header>
    </div>
    )
}

export default Header;