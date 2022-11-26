import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/advertise')
            .then(data => {
                console.log(data.data);
                setAdvertisedProducts(data.data)
            })
    }, [])

    return (
        <div className='my-16 pt-10'>
            <h3 className='text-5xl text-center font-semibold text-orange-500'>Big Dream <span className='text-xl text-black'>but budget low?</span></h3>
            <p className='text-center font-mono mt-3 text-green-600'>Don't worry! We have collections just for you</p>
            <div className='my-14 grid grid-cols-1 lg:grid-cols-2 gap-48'>
                {
                    advertisedProducts.map(advertisedProduct => <AdvertisedItem key={advertisedProduct._Id} advertisedProduct={advertisedProduct}></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;