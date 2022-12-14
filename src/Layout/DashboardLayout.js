import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side mt-10 rounded-xl">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-200 text-center text-green-600 text-xl">
                        {
                            isAdmin &&
                            <>
                                <li className='mt-3'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='mt-3'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='mt-3'><Link to='/dashboard/reportedproducts'>Reported Products</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li className='mt-3'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li className='mt-3'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                <li className='mt-2'><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;