import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    const { categoryName, description, image } = category;
    const [categoryProducts, setCategoryProducts] = useState([]);

    const handleCategory = categoryName => {
        const url = `http://localhost:5000/categoryProducts?name=${categoryName}`





        // useEffect(() => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             setCategoryProducts(data)
        //         })
        // }, [categoryName])
    }



    return (
        <div className="card w-96 shadow-xl image-full flex justify-between">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-red-600">{categoryName}</h2>
                <p className='text-white'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`category/${categoryName}`}><button onClick={() => handleCategory(categoryName)} className="btn btn-primary">See all in this category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;