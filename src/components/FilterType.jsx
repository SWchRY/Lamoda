import React from "react";
import './FilterType.css';


function FilterType(props){
    return(
        <button onClick={props.Set1} >
        <div className="FilterType">
            <p className="FilterType_P">{props.name}</p>
        </div>
        </button>
    );
}

export default FilterType