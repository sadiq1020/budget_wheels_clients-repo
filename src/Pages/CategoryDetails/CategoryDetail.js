import React from 'react';

const CategoryDetail = ({ product }) => {
    const { categoryName, sellersName, series, picture, location, originalPrice, resalePrice, usedYears, model, purchaseYear, productCondition, mobileNumber, description } = product;

    return (
        <div className="card lg:w-[500px] bg-base-200 shadow-xl">
            <figure><img className='lg:h-[370px] lg:w-[500px] rounded-xl' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand Name: {categoryName}</h2>
                <h2 className="text-2xl">Series: {series}</h2>
                <p>{description}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellersName}</p>
                <p><span className='font-bold'>Mobile Number:</span> {mobileNumber}</p>
                <p><span className='font-bold'>Series: </span>{series}</p>
                <p><span className='font-bold'>Model: </span>{model}</p>
                <p><span className='font-bold'>Original Price: $</span>{originalPrice}</p>
                <p><span className='font-bold'>Resale Price: $</span>{resalePrice}</p>
                <p><span className='font-bold'>Used Years: </span>{usedYears} years</p>
                <p><span className='font-bold'>Purchase Year: </span>{purchaseYear}</p>
                <p><span className='font-bold'>Location: </span>{location}</p>
                <p><span className='font-bold'>Product Condition: </span>{productCondition}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;