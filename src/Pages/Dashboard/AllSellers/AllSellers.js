import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllSellers = () => {
    // get all sellers
    const url = 'http://localhost:5000/users/sellers';

    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['users/buyers'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    // delete buyer
    const handleDeleteSeller = (seller) => {
        fetch(`http://localhost:5000/users/sellers/${seller._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${seller.name} deleted successfully!`)
                    refetch();
                }
            })
    }

    return (
        <div>
            <div className='mt-16'>
                <h3 className='text-center text-3xl text-green-500 my-5'>All Buyers List</h3>
                <div className="overflow-x-auto">
                    <table className="table w-[90%] mx-auto">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Remove Buyer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row --> */}
                            {
                                sellers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th>{i + 1}</th>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>
                                            <Link to=''><button onClick={() => handleDeleteSeller(seller)} className='btn btn-danger btn-sm'>Delete</button></Link>
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

export default AllSellers;