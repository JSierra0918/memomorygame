import React from 'react';

function  Grid (props) {
    return (
       <div className="img-wrapper" ><img src={props.image} alt="" className="grid-image" onClick={props.wasClicked} /> </div>
    );
}

export default Grid;
