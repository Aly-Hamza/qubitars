import React from 'react';
import { useNavigate } from 'react-router-dom';
import productData from '../../data/productsData';

const Products = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  return (
    <div className='products-container all-products-container' style={{border:'1px solid red'}}>
      <h1>Accessories</h1>
      <hr className='products-hr' />
      <div className="products">
        {productData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic} alt={product.name} height={130} width={40} className='image-gallery' />
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold'}}>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="buy-button" onClick={() => handleBuyNowClick(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
