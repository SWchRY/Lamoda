import React from 'react'
import './Search.css'
import Lupa from './../assets/imgs/lupa.jpg'

function Search(props){
    return (
    <div className='Search'>
        <input onChange={props.Set2} name='search'type='search' placeholder='Поиск' className='Input_Search'></input>
        <img className='img_lupa' src={Lupa}/>
    </div>
    )
}

export default Search