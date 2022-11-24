import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className='flex flex-col lg:flex-row justify-evenly my-16'>
            {
                products.map(product => <CategoryDetail key={product._id} product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default CategoryDetails;