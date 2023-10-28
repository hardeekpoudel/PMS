import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async() => {
        const response = await axios.get('https://653d1e60f52310ee6a99e540.mockapi.io/products')
        setProducts(response.data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <>
    <Navbar />
    {
        products.map((product)=>{
            return(
                <div key={product.id} className="card">
                <img src={product.productImage} alt="Product Image" />
                 <div className="product-info">
                <div className="product-name">{product.productName}</div>
                <div className="product-description">{product.productDescription}</div>
                <div className="product-material">{product.productMaterial}</div>
                 </div>
             </div>
            )
        })
    }
    </>
  )
}

export default Home