import React from 'react'


const ProductCard = ({description , title ,image }) => {
   
  return (
    <>
       <div className='container'>
       <div className='left-box'>
            <img className='image' width={120} height={120} src={image} alt=""/>
       </div>
        <div className='right-box'>
        <h2>{title}</h2>
        <p> {description}</p>
        <button  className='button'>
            Add to cart
        </button>
        </div>
       </div>
    </>
  )
}

export default ProductCard
