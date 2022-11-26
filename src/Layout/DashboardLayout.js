import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                    {/* <!-- Page content here --> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mt-2'><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li className='mt-3'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li className='mt-3'><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li className='mt-3'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li className='mt-3'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;