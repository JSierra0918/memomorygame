import React from 'react';

function  Main (props){
    
    return (
        <main className="main-area">
         {props.children}          
        </main>
    );
}

export default Main;
