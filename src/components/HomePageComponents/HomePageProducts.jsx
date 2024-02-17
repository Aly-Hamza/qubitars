import React, { useState } from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { category } from '../../data/categoryPic';

const Products = () => {
  const navigate = useNavigate();
  const handleSeeAllClick = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };
  const first8Products = productData.slice(0, 8);
  const first4Products = category.slice(0, 8);

  const [selectedCategory, setSelectedCategory] = useState('New Arrival');

  const categoryData = {
    'New Arrival': first8Products,
    'Featured': first4Products,
    'Top Selling': first8Products,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleBuyNowClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  return (
    <div className='products-container'>
      <div className="list-items">
        <ul className='d-flex list-styling'>
          <div className='text-left d-flex'>
          <li onClick={() => handleCategoryClick('New Arrival')}>New Arrival</li>
          </div>
          <li onClick={() => handleSeeAllClick()} className='see-all'>See all<IoIosArrowRoundForward/></li>
        </ul>
      </div>
      <hr className='products-hr' />
      <div className="products">
        {categoryData[selectedCategory].map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic} alt='dull' height={130} width={40} className='image-gallery'/>
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold' }}>{product.name}</h3>
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

