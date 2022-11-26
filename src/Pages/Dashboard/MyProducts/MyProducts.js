import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import MyAdvertisedProducts from './MyAdvertisedProducts';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [advertiseStatus, setAdvertiseStatus] = useState(false)

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const { data: products, refetch, isLoading } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = res.json();
            return data;
        }
    })

    // delete my product
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

        // delete from advertise db
        // fetch(`http://localhost:5000/advertise/${product._id}`, {
        //     method: 'DELETE',
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //     })
    }

    // advertise product
    const handleAdvertise = (product) => {
        const advertisedProduct = {
            email: user.email,
            brandName: product.categoryName,
            series: product.series,
            image: product.picture,
            price: product.resalePrice
        }

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(advertisedProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    setAdvertiseStatus(true);
                }
                toast.success('Successfully Added for advertisement');
            })
    }

    // to prevent ...map error
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='mt-10'>
                <h3 className='text-center text-3xl text-green-500 my-5'>My Products For Sale</h3>
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
                                <th>Advertise</th>
                                {/* <th>Payment Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row --> */}
                            {
                                products.map((product, i) =>
                                    <tr key={product._id}>
                                        <th>{i + 1}</th>
                                        <td><img className='avatar rounded-xl w-24 h-18' src={product.picture} alt="" /></td>
                                        <td>{product.categoryName}</td>
                                        <td>{product.series}</td>
                                        <td>
                                            <Link to=''><button onClick={() => handleDeleteProduct(product)} className='btn btn-danger btn-sm'>Delete</button></Link>
                                        </td>
                                        <td>
                                            {
                                                !advertiseStatus &&
                                                <Link to=''><button onClick={() => handleAdvertise(product)} className='btn btn-success btn-sm'>Advertise</button></Link>
                                            }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <MyAdvertisedProducts></MyAdvertisedProducts>
        </div>
    );
};

export default MyProducts;