import React from "react";
import './Products.css'
import Product from "./Product";

function Products({Prods}){

    return(
        <div className="Products">
            {
                Prods.map((Prods) => <Product name={Prods.name} price={Prods.price} desc={Prods.desc} rate={Prods.rate} color={Prods.color} id={Prods.id} img={Prods.img}/>)
            }
        </div>
    )
}

export default Products