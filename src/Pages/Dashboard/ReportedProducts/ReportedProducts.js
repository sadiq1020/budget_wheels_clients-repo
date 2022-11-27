import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const ReportedProducts = () => {

    // get all reported products
    const url = 'http://localhost:5000/products/reportedproducts';

    const { data: reportedProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['users/buyers'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    // delete reported product
    const handleDeleteProduct = (reportedProduct) => {
        fetch(`http://localhost:5000/products/delete/${reportedProduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${reportedProduct.name} deleted successfully!`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-16'>
            <h3 className='text-center text-3xl text-green-500 my-5'>All Buyers List</h3>
            <div className="overflow-x-auto">
                <table className="table w-[90%] mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Reported Product Name</th>
                            <th>Vehicle Series</th>
                            <th>Seller Email</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row --> */}
                        {
                            reportedProducts.map((reportedProduct, i) =>
                                <tr key={reportedProduct._id}>
                                    <th>{i + 1}</th>
                                    <td>{reportedProduct.categoryName}</td>
                                    <td>{reportedProduct.series}</td>
                                    <td>{reportedProduct.email}</td>
                                    <td>
                                        <Link to=''><button onClick={() => handleDeleteProduct(reportedProduct)} className='btn btn-danger btn-sm'>Delete</button></Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedProducts;