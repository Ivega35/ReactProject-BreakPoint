
import React, { useState } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'

const ItemDetail = ( {id, price, title, description, pictureUrl, stock} ) => { 
  const [cart, setCart]= useState([]);
   
  const cartItem={
    title: {title}, 
    price: {price}, 
    img: {pictureUrl}, 
    id: {id}, 
  }

  const onAdd= () =>{
    if(stock !== 0){ 

      setCart([...cart , cartItem]);
    }else{
      alert("el producto se encuentra agotado")
    }
      
      
    
}
  
const isInCart = cart.includes(cartItem.id)
  
return (
    
  <div className="detailCard">
    <div className="row g-0 py-3">
      <div className="col-md-4 text-center">
        <img src={pictureUrl} className="img-fluid" alt={title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title text-light text-center">{title}</h1>
          <p className="card-text text-light text-center px-5 py-4">{description}</p>
          <p className="card-text text-light fs-5 text-center"> <strong> Precio: ${price} </strong> </p>
          <p className="card-text text-light text-center">Stock: {stock}</p>
          
          <ItemCounter onAdd={onAdd} isInCart={isInCart} stock= {stock}/>
        
        </div>
      </div>
    </div>
  </div>

  )
}


export default ItemDetail;

