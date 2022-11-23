import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const [signUpError, setSignUPError] = useState(''); use after implement firebase

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-xl font-bold text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">

                        <select className='w-1/2 my-2 bordered border-cyan-600' {...register("category", { required: true })}>
                            {/* <option value="">Select...</option> */}
                            <option value="A">Buyer</option>
                            <option value="B">Seller</option>
                        </select>

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
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
                <p>Already have an account? <Link className='text-green-600' to="/login">Log in</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue with GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;