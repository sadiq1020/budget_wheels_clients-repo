import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    const { categoryName, description } = category;

    return (
        <div className="card w-96 shadow-xl image-full flex justify-between">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-red-600">{categoryName}</h2>
                <p className='text-white'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`category/${categoryName}`}><button className="btn btn-primary">See all in this category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;