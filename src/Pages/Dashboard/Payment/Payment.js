import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // console.log(data);
    const { buyerName, email, brand, series, price, phone, meetingLocation, picture } = booking;

    return (
        <div className='my-12 lg:ml-10 py-5 '>
            <h2 className='text-3xl text-green-600 text-center'>Pay to Confirm Your Order</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div className="card card-compact lg:w-[500px] bg-base-100 shadow-xl my-10">
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

                <div className='w-96 mt-10 lg:mt-80'>
                    <p className='my-3 font-semibold text-cyan-500'>Provide Your Card information below <br /> and press pay</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;