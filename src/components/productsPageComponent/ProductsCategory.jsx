import React from 'react';
import { category } from "../../data/categoryPic";

const ProductsCategory = () => {
    const sixproducts= category.slice(0,6);
    return (
        <>
        <h1 style={{ width: '90%', margin: 'auto' }}>Popular Categories</h1>
        <hr style={{ width: '90%', margin: 'auto', marginBottom: '20px' }} />
        <div className='container d-flex flex-wrap'>
            {sixproducts.map((item) => (
                <div className='col-md-2 col-sm-6 col-6' key={item.id}>
                    <img src={item.pic} alt={item.name} className="img-fluid" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding:'10px'}}/>
                    <h4 className="text-center">{item.name}</h4>
                </div>
            ))}
        </div>
        </>
    );
};

export default ProductsCategory;
