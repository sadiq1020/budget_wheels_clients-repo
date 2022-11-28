import React from 'react';

const AdvertisedItem = ({ advertisedProduct }) => {
    const { categoryName, resalePrice, series, picture, _id } = advertisedProduct;
    return (
        <div className="card bg-lime-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {categoryName}
                    <div className="badge badge-secondary">Ad</div>
                </h2>
                <h4 className='text-2xl'>{series}</h4>
                <h4 className='text-2xl'>{_id}</h4>
                <p>$ {resalePrice}</p>
            </div>
        </div>
    );
};

export default AdvertisedItem;