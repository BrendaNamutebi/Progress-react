import React from 'react'
import ProductCard from './components/ProductCard'


const App = () => {
  return (
    <div>
       <ProductCard image='./images/chicken.jpg' title="chicken" description="spiced grilled chicken with salads"/>
       <ProductCard image='./images/chips.jpg' title="Masala chips" description="spiced grilled chicken with salads"/>
       <ProductCard image='./images/burger.jpg' title="chicken burger" description="spiced grilled chicken with salads"/>
       <ProductCard image='./images/rice.jpg' title="Vegetable rice" description="spiced grilled chicken with salads"/>
       
    </div>
  )
}

export default App
