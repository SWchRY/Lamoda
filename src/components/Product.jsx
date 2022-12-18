import React from "react";
import './Product.css'

function Product(props){
    return(
        <div className="Product">
            <div className="ProductImg">
                <img src={props.img}></img>
            </div>
            <div className="ProductDesc">
                <h2>{props.name}</h2>
                {/*<p>{id}</p>*/}
                <p className="DescOfCar">{props.desc}</p>
                <p>Цвет: {props.color}</p>
                <p>Цена: {props.price}$</p>
                <p>Рейтинг: {props.rate}</p>
            </div>
        </div>
    )
}

export default Product