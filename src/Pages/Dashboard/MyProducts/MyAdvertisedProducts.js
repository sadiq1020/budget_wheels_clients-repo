import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAdvertisedProducts = () => {
    const { user } = useContext(AuthContext);

    // load advertised products for my products (sellers) page
    const url = `http://localhost:5000/advertise?email=${user?.email}`;

    const { data: advertisedProducts, refetch, isLoading } = useQuery({
        queryKey: ['advertise', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    // delete advertised product
    const handleAdvertisedProduct = (advertisedProduct) => {
        console.log(advertisedProduct._id);
        fetch(`http://localhost:5000/advertise/${advertisedProduct._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${advertisedProduct.brandName} deleted successfully!`)
                    refetch();
                }
            })
    }
    /* 
    const handleDeleteProduct = (product) => {
        fetch(`http://localhost:5000/myproducts/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${product.categoryName} ${product.series} deleted successfully!`)
                    refetch();
                }
            })
    */

    // to prevent ...map error
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-16'>
            <h3 className='text-center text-3xl text-green-500 my-5'>My Advertised Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-[90%] mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Series</th>
                            <th>Remove Item</th>
                            {/* <th>Payment Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row --> */}
                        {
                            advertisedProducts.map((advertisedProduct, i) =>
                                <tr key={advertisedProduct._id}>
                                    <th>{i + 1}</th>
                                    <td><img className='avatar rounded-xl w-24 h-18' src={advertisedProduct.image} alt="" /></td>
                                    <td>{advertisedProduct.brandName}</td>
                                    <td>{advertisedProduct.series}</td>
                                    <td>
                                        <Link to=''><button onClick={() => handleAdvertisedProduct(advertisedProduct)} className='btn btn-danger btn-sm'>Delete</button></Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAdvertisedProducts;