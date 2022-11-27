import React from 'react';

const Subscribe = () => {
    return (
        <div className="hero bg-base-300 rounded-lg mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Subscribe Us!</h1>
                    <p className="py-6 text-green-600"><span className='font-semibold'>Subscribe Now</span> to Get Regular Updates of New Cars Added.</p>
                </div>
                <div className="card w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div> */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;