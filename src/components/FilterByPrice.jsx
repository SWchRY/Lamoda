import React from "react";
import './FilterByPrice.css'

function FilterByPrice(props){
    return(
        <div className="FilterByPrice">
            <p className="PriceBlock">По цене</p>
            <div className="PriceInterval">
                <input id='777' onChange={props.Set3} placeholder="От" className="StartPrice" type='number'></input>
                <input id='888' onChange={props.Set3} placeholder="До" className="EndPrice" type='number'></input>
            </div>
        </div>
    )
}

export default FilterByPrice