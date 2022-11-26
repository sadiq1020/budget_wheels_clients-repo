import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../Pages/Shared/Loading/Loading';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user.email); // 3 change
    const location = useLocation();

    if (loading || isBuyerLoading) { // 1 change
        return <Loading></Loading>
    }

    if (user && isBuyer) {  // 1 change
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;