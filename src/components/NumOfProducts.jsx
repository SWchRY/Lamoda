import React from "react";
import './NumOfProducts.css';

function NumOfProducts(props){
    return(
        <div className="NumOfProducts">
            <p>Всего продуктов: {props.num}</p>
        </div>
    )
}

export default NumOfProducts