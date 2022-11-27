import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

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
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${product.categoryName} ${product.series} deleted successfully!`)
                    refetch();
                }
            })

    }

    // advertise product
    const handleAdvertise = (product) => {

        // add product as "advertised" in products collection
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product successfully advertised')
                    refetch();
                }
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
                                <th>Advertisement</th>
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
                                                product.isAdvertised ?
                                                    <button disabled className='btn btn-success btn-sm'>Advertised</button>
                                                    :
                                                    <button onClick={() => handleAdvertise(product)} className='btn btn-success btn-sm'>Advertise</button>
                                            }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;