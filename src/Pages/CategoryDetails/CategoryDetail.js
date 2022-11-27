import React from 'react';
import toast from 'react-hot-toast';
import { TiTick } from 'react-icons/ti'

const CategoryDetail = ({ product, setModalProduct }) => {
    const { categoryName, sellersName, series, picture, location, originalPrice, resalePrice, usedYears, model, purchaseYear, productCondition, mobileNumber, description, postingDate } = product;

    console.log(product.isReported);
    // report to admin
    const handleReport = (product) => {
        // add product as "advertised" in products collection
        fetch(`http://localhost:5000/reportproduct/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product successfully reported')
                    // refetch();
                }
            })
    }

    return (
        <div className="card lg:w-[500px] bg-base-200 shadow-xl">
            <figure><img className='lg:h-[370px] lg:w-[500px] rounded-xl' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand Name: {categoryName}</h2>
                <h2 className="text-2xl">Series: {series}</h2>
                <p>{description}</p>
                {
                    product?.status ?
                        <div className="indicator">
                            <span className="indicator-item badge badge-sm bg-white text-lg text-blue-500"><TiTick /></span>
                            <div className="grid place-items-center">
                                <p><span className='font-bold'>Seller Name:</span> {sellersName}</p>
                            </div>
                        </div>
                        :
                        <p><span className='font-bold'>Seller Name:</span> {sellersName}</p>
                }

                <p><span className='font-bold'>Mobile Number:</span> {mobileNumber}</p>
                <p><span className='font-bold'>Series: </span>{series}</p>
                <p><span className='font-bold'>Model: </span>{model}</p>
                <p><span className='font-bold'>Original Price: $</span>{originalPrice}</p>
                <p><span className='font-bold'>Resale Price: $</span>{resalePrice}</p>
                <p><span className='font-bold'>Used Years: </span>{usedYears} years</p>
                <p><span className='font-bold'>Purchase Year: </span>{purchaseYear}</p>
                <p><span className='font-bold'>Location: </span>{location}</p>
                <p><span className='font-bold'>Product Condition: </span>{productCondition}</p>
                <p><span className='font-bold'>Posted </span>{postingDate}</p>
                <div className="card-actions justify-center mt-4">
                    {/* <label disabled={slots.length === 0} onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label> */}

                    <label htmlFor="booking-modal" onClick={() => setModalProduct(product)} className="btn btn-primary text-black">Book now</label>
                    {
                        !product?.isReported ?
                            <button onClick={() => handleReport(product)} className='btn btn-sm mt-3 ml-10'>Report to admin</button> :
                            <button disabled className='btn btn-sm mt-3 ml-10'>Reported</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;