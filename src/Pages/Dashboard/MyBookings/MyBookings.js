import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

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
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row --> */}
                        {
                            bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td><img className='avatar rounded-xl w-24 h-18' src={booking.picture} alt="" /></td>
                                    <td>{booking.brand} {booking.series}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        <Link to=''><button className='btn btn-primary'>Pay</button></Link>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;