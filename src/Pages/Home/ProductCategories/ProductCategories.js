import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)
            })
    }, [])

    return (
        <div>
            <h3 className='text-4xl text-center text-lime-600 my-10'>Choose Your Category</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category => <ProductCategory key={category._id} category={category}></ProductCategory>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;