import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <h3 className='py-4 text-2xl'>{user.displayName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;