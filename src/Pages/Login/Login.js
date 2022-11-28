import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleSignUp from '../SignUp/GoogleSignUp';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-8'>
                <h2 className='text-3xl font-bold text-center text-green-500'>Log in</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">

                        {/* email */}
                        <label className="label"> <span className="label-text">Email</span></label>

                        <input type="text" {...register("email", { required: "email is required" })} className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">

                        {/* password */}
                        <label className="label"> <span className="label-text">Password</span></label>

                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                        <label className="label"> <span className="label-text">Forget password?</span></label>
                    </div>
                    <input type="submit" className='btn btn-success w-full' value="Login" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Budget Wheels? <Link className='text-green-600' to="/signup">Create new account</Link></p>
                <div className='divider'>OR</div>
                {/* <button className='btn btn-outline w-full'>Continue with GOOGLE</button> */}
                <GoogleSignUp></GoogleSignUp>
            </div>
        </div>
    );
};

export default Login;