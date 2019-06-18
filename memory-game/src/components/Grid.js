import React from 'react';

function  Grid (props) {
    return (
         <li className = "grid-li"> <img src={props.image} alt="" className="grid-image" /></li>
    );
}

export default Grid;
