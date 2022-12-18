import React from "react";
import './Color.css' 

function Color(props){
    return(
        <label>
                <input onChange={props.Set4} type="checkbox"></input>
                <p className="Color">{props.Color}</p>
        </label>
    )
}

export default Color