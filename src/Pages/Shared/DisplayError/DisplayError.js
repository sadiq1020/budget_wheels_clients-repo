import React from 'react';
import { useRouteError } from 'react-router-dom';
const DisplayError = () => {
    const error = useRouteError()

    return (
        <div className='flex justify-center items-center flex-col'>
            <div>
                <img src="https://iili.io/HKRzaCx.png" alt="" />
            </div>
            <div>
                <p className='text-red-600 text-2xl'>Something Went Wrong!</p>
                <p className='text-center font-semibold'>Message: {error.statusText || error.message}</p>
            </div>

        </div>
    );
};

export default DisplayError;