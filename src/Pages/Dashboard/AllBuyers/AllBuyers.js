import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllBuyers = () => {

    // get all buyers
    const url = 'http://localhost:5000/users/buyers';

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['users/buyers'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    // delete buyer
    const handleDeleteBuyer = (buyer) => {
        fetch(`http://localhost:5000/users/buyers/${buyer._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${buyer.name} deleted successfully!`)
                    refetch();
                }
            })
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
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Remove Buyer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row --> */}
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <Link to=''><button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-danger btn-sm'>Delete</button></Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;