import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {


        console.log(data);
    }

    return (
        <div className='flex justify-start mx-2'>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                {/* category */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Select Your Vehicle Category</span></label>
                    <select {...register('categoryName')} className="select select-bordered w-full max-w-xs">
                        <option value="Toyota">Toyota</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Honda">Honda</option>
                    </select>
                </div>

                {/* seller name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>

                    <input type="text" {...register("sellersName")} defaultValue={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                </div>

                {/* email */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>

                    <input type="email" {...register("email")} defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                </div>

                {/* series */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Vehicle Series</span></label>
                    <input type="text" {...register("series", { required: "series is required" })} placeholder='Ex. Premio' className="input input-bordered w-full max-w-xs" />
                    {errors.series && <p className='text-red-600'>{errors.series.message}</p>}
                </div>



                {/* photo upload */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", { required: "Photo is Required" })} className="input w-full max-w-xs" />

                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>

                {/* location */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", { required: "Location name is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                </div>

                {/* resale price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale price in $</span></label>
                    <input type="number" {...register("resalePrice", { required: "Resale price is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                </div>

                {/* Original price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original price in $</span></label>
                    <input type="number" {...register("originalPrice", { required: "Original price is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                </div>

                {/* Used Years */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Used year/s in $</span></label>
                    <input type="number" {...register("originalPrice", { required: "Used year/s is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.usedYears && <p className='text-red-600'>{errors.usedYears.message}</p>}
                </div>

                {/* purchase Year */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Purchase Year</span></label>
                    <input type="text" {...register("purchaseYear", { required: "purchase Year is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchaseYear && <p className='text-red-600'>{errors.purchaseYear.message}</p>}
                </div>

                {/* product condition*/}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Select Your Vehicle Condition</span></label>
                    <select {...register('productCondition')} className="select select-bordered w-full max-w-xs">
                        <option value="Toyota">Fair</option>
                        <option value="Nissan">Good</option>
                        <option value="Honda">Excellent</option>
                    </select>
                </div>


                {/* mobile number */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="number" {...register("mobileNumber", { required: "mobile number is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber.message}</p>}
                </div>

                {/* description*/}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Description</span></label>

                    {/* <textarea className="textarea textarea-accent" placeholder="Decription"></textarea> */}

                    <textarea type="text" {...register("description", { required: "description is required" })} className="input input-bordered w-full max-w-xs h-32" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>

                {/* vehicle model */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Model</span></label>
                    <input type="number" {...register("model", { required: "mobile number is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.model && <p className='text-red-600'>{errors.model.message}</p>}
                </div>

                <input type="submit" className='btn btn-accent mt-6 ml-[25%]' value="Submit" />
            </form>




            {/* <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>

                <p className='ml-5 text-green-600 font-bold'>Category</p>
                <select name='categoryName' className="select select-bordered w-full max-w-xs">
                    <option value="Toyota">Toyota</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Honda">Honda</option>
                </select>

                <p className='ml-5 text-green-600 font-bold'>Name</p>
                <input name="sellersName" type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input w-full input-bordered" />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Email</p>
                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email address" className="input w-full input-bordered" />


                <p className='ml-5 text-green-600 mt-3 font-bold'>Vehicle Series</p>
                <input name="series" type="text" disabled className="input w-full input-bordered" required />

                Pic  
                <p className='ml-5 text-green-600 mt-3 font-bold'>Upload Your Vehicle Image</p>
                <input name="picture" type="file" className="input w-full max-w-xs" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Seller's Location</p>
                <input name="location" type="text" className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Resale Price in $</p>
                <input name="resalePrice" type="text" placeholder="Resale Price" className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Original Price in $</p>
                <input name="originalPrice" type="number" placeholder="Original Price" className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Used year/s</p>
                <input name="usedYears" type="number" className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Purchase Year</p>
                <input name="purchaseYear" type="number" className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Select Your Product Condition</p>
                <select name='productCondition' className="select select-bordered w-full max-w-xs">
                    <option value="Toyota">Fair</option>
                    <option value="Nissan">Good</option>
                    <option value="Honda">Excellent</option>
                </select>

                <p className='ml-5 text-green-600 mt-3 font-bold'>Mobile Number</p>
                <input name="mobileNumber" type="number" placeholder='Your mobile number' className="input w-full input-bordered" required />

                <p className='ml-5 text-green-600 mt-3 font-bold'>Model</p>
                <input name="model" type="number" placeholder='Your mobile number' className="input w-full input-bordered" required />

                <br />
                <input className='btn btn-accent w-1/2 ml-[25%]' type="submit" value="Book" />
            </form> */}
        </div >
    );
};

export default AddProduct;