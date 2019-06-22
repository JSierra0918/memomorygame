import React from 'react';

function  Grid (props) {
    function turnClick() {
       return props.dataId = true;
    }
    return (
       <div className="img-wrapper" ><img src={props.image} alt="" className="grid-image" onClick={()=> props.onClick(props.dataId)} data-id={props.dataId} data-click={props.dataClick} /> </div>
    );
}

export default Grid;
