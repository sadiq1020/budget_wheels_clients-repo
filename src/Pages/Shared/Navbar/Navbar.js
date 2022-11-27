import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems =
        <>
            <li className='font-medium'><Link to='/'>Home</Link></li>
            <li className='font-medium'><Link to='/blog'>Blog</Link></li>
            {
                user?.uid && <li className='font-medium'><Link to='/dashboard'>Dashboard</Link></li>
            }
        </>

    return (
        <div className="navbar bg-green-200 rounded-b-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='hidden lg:block w-16 ml-3' src="https://iili.io/HKVP7x2.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Budget<span className='text-sm ml-1 mt-1 lg:text-lg lg:mt-0'>Wheels</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>  <p className='mr-3 hidden lg:block text-green-600 font-semibold'>{user.displayName}</p>
                            <Link to='/login'><button onClick={handleLogOut} className='btn btn-sm btn-success py-1 mr-3'>Sign out</button></Link>
                        </>
                        :
                        <Link to='/login'><button className='btn btn-success py-1'>Log in</button></Link>
                }
                {/* <a className="btn">Get started</a> */}
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;