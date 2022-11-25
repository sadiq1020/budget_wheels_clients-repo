import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const GoogleSignUp = () => {
    const { googleSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user.displayName, user.email);

                saveUser(user.displayName, user.email);

                navigate(from, { replace: true })
            })
            .catch(err => console.error(err));
    }

    // save user info to db
    const saveUser = (name, email) => {
        const user = { name, email, role: 'Buyer' };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div>
            <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'>Continue with GOOGLE</button>
        </div>
    );
};

export default GoogleSignUp;