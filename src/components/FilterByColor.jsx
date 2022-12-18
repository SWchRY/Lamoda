import React from "react";
import './FilterByColor.css';
import Color from "./Color";

function FilterByColor(props){
    return(
        <div className="FilterByColor">
            <p className="ColorBlock">По цвету</p>
            <div className="Colors">
                {
                    props.Colors.map((Colors) => <Color Color={Colors} Set4={props.Set4}/>)
                }
            </div>
        </div>
    )
}

export default FilterByColor