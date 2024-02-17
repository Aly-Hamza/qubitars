import React from 'react';
import '../../styles/FeatureCategories.css'
import { products } from '../../data/FeatureProductData';
import SaleImage from '../../images/Sale.jpg'

const Products = () => {
    return (
        <>
        <h3 style={{marginTop:'40px'}}>Featured Categories</h3>
        <hr className='FCHR'/>
        <div className='product-main-section'>
            {products.map((products, index) => (
                <div className='product-card' key={index}>
                    <h4>{products.category}</h4>
                    <div className='images'>
                        <img src={products.pic1}  alt='dull' style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding:'10px'}}/>
                        <img src={products.pic2} alt='dull'style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding:'10px'}}/>
                        <img src={products.pic3} alt='dull' style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding:'10px'}} />
                    </div>
                </div>
            ))}
        </div>
        <img src={SaleImage} alt="" className='saleImage'/>
        </>
    );
};

export default Products;