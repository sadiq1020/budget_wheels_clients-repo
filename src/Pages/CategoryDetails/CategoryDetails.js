import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const products = useLoaderData();
    const [modalProduct, setModalProduct] = useState(null);



    console.log(products);

    return (
        <section className='mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    products.map(product => <CategoryDetail key={product._id} product={product} setModalProduct={setModalProduct}></CategoryDetail>)
                }
            </div>
            {
                modalProduct && <BookingModal modalProduct={modalProduct} setModalProduct={setModalProduct} ></BookingModal>
            }
        </section>
    );
};

export default CategoryDetails;