import React from "react";
import FilterType from "./FilterType";
import './StartFilter.css'

function StartFilter(props){
    return (
        <div className='StartFilter'>
            <FilterType name='Сначала дешевые' Set1={props.Set1} info={props.info}/>
            <FilterType name='Сначала дорогие' Set1={props.Set1} info={props.info}/>
            <FilterType name='Сначала популярные' Set1={props.Set1} info={props.info}/>
        </div>
    )
}

export default StartFilter