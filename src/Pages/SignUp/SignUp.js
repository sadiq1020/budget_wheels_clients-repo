import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleSignUp from './GoogleSignUp';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)

    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = data => {
        console.log(data);
        setSignUPError('');

        // create user
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign up successful')

                // update user info
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error)
                setSignUPError(error.message)
            });
    }

    // save user info to db
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
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
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-3xl font-bold text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">

                        <div className='flex justify-end mt-5'>
                            <select className='w-1/2 my-2 border-2 border-green-500 rounded' {...register("role", { required: true })}>
                                {/* <option value="">Select...</option> */}
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                        </div>

                        {/* name */}
                        <label className="label"> <span className="label-text">Name</span></label>

                        <input type="text" {...register("name", { required: "Name is Required" })} className="input input-bordered w-full max-w-xs" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">

                        {/* email */}
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">

                        {/* password */}
                        <label className="label"> <span className="label-text">Password</span></label>

                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    </div>
                    <input type="submit" className='btn btn-success w-full mt-6' value="Sign Up" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-green-600' to="/login">Log in</Link></p>
                <div className='divider'>OR</div>
                <GoogleSignUp></GoogleSignUp>
            </div>
        </div>
    );
};

export default SignUp;