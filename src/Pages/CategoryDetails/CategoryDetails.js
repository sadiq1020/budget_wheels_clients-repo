import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const products = useLoaderData();
    const [modalProduct, setModalProduct] = useState(null);



    console.log(products);

    return (
        <section>
            <div className='flex flex-col lg:flex-row justify-evenly my-16'>
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