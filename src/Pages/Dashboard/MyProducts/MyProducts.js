import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = res.json();
            return data;
        }
    })

    // delete my product
    const handleDeleteProduct = (id) => {

    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-3xl text-green-500 my-5'>My Bookings</h3>
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
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><img className='avatar rounded-xl w-24 h-18' src={product.picture} alt="" /></td>
                                    <td>{product.brand} {product.series}</td>
                                    <td>{product.series}</td>
                                    <td>
                                        <Link to=''><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-danger btn-sm'>Delete</button></Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;