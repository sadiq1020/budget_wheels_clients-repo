import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    // console.log(data);
    const { buyerName, email, brand, series, price, phone, meetingLocation, picture } = data;

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className="card card-compact lg:w-[500px] bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-600">Vehicle Brand: {brand}</h2>
                        <h2 className="text-lg">Vehicle Series: {series}</h2>
                        <p>Price: {price}</p>
                        <h4 className='text-green-600 text-lg'>Buyer's information</h4>
                        <p> <span className='font-semibold'>Name: </span>{buyerName}</p>
                        <p> <span className='font-semibold'>Email: </span>{email}</p>
                        <p> <span className='font-semibold'>Phone number: </span>{phone}</p>
                        <p> <span className='font-semibold'>Meeting Location: </span>{meetingLocation}</p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Payment;