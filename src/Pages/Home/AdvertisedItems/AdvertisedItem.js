import React from 'react';

const AdvertisedItem = ({ advertisedProduct }) => {
    const { brandName, price, series, image } = advertisedProduct;
    return (
        <div className="card bg-lime-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brandName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h4 className='text-2xl'>{series}</h4>
                <p>$ {price}</p>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
            </div>
        </div>
    );
};

export default AdvertisedItem;