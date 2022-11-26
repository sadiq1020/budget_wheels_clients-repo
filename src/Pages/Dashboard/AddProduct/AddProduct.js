import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    // image key
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        const picture = data.picture[0];
        const formData = new FormData();
        formData.append('image', picture)

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    //--------Date/time----------------
                    const currentdate = new Date();
                    const datetime = "Date:" + currentdate.getDate() + "/"
                        + (currentdate.getMonth() + 1) + "/"
                        + currentdate.getFullYear() + " time:"
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":"
                        + currentdate.getSeconds();
                    //----------------------------------

                    const product = {
                        categoryName: data.categoryName,
                        sellersName: data.sellersName,
                        email: data.email,
                        series: data.series,
                        picture: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        usedYears: data.usedYears,
                        purchaseYear: data.purchaseYear,
                        productCondition: data.productCondition,
                        mobileNumber: data.mobileNumber,
                        description: data.description,
                        model: data.model,
                        postingDate: datetime
                    }
                    // console.log(product);

                    // save new products info to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Successfully Added');
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }



    return (
        <div>
            <h3 className='text-3xl text-success mt-16'>Please Fill up the Form</h3>
            <div className='flex justify-start mx-2 my-10'>

                <form onSubmit={handleSubmit(handleAddProduct)}>

                    {/* category */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Select Your Vehicle Category</span></label>
                        <select {...register('categoryName')} className="select select-bordered w-full max-w-xs">
                            <option value="Toyota">Toyota</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Honda">Honda</option>
                        </select>
                    </div>

                    {/* seller name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Name</span></label>

                        <input type="text" {...register("sellersName")} defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Email</span></label>

                        <input type="email" {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* series */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Vehicle Series</span></label>
                        <input type="text" {...register("series", { required: "series is required" })} placeholder='Ex. Premio' className="input input-bordered w-full max-w-xs" />
                        {errors.series && <p className='text-red-600'>{errors.series.message}</p>}
                    </div>



                    {/* picture upload */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Picture</span></label>
                        <input type="file" {...register("picture", { required: "picture is Required" })} className="input w-full max-w-xs" />

                        {errors.picture && <p className='text-red-600'>{errors.picture.message}</p>}
                    </div>

                    {/* location */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Location</span></label>
                        <input type="text" {...register("location", { required: "Location name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                    </div>

                    {/* resale price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Resale price in $</span></label>
                        <input type="number" {...register("resalePrice", { required: "Resale price is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                    </div>

                    {/* Original price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Original price in $</span></label>
                        <input type="number" {...register("originalPrice", { required: "Original price is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                    </div>

                    {/* Used Years */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Used year/s in $</span></label>
                        <input type="number" {...register("usedYears", { required: "Used year/s is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.usedYears && <p className='text-red-600'>{errors.usedYears.message}</p>}
                    </div>

                    {/* purchase Year */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Purchase Year</span></label>
                        <input type="number" {...register("purchaseYear", { required: "purchase Year is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.purchaseYear && <p className='text-red-600'>{errors.purchaseYear.message}</p>}
                    </div>

                    {/* product condition*/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Select Your Vehicle Condition</span></label>
                        <select {...register('productCondition')} className="select select-bordered w-full max-w-xs">
                            <option value="Toyota">Fair</option>
                            <option value="Nissan">Good</option>
                            <option value="Honda">Excellent</option>
                        </select>
                    </div>


                    {/* mobile number */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Mobile Number</span></label>
                        <input type="number" {...register("mobileNumber", { required: "mobile number is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber.message}</p>}
                    </div>

                    {/* description*/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Product Description</span></label>
                        <textarea type="text" {...register("description", { required: "description is required" })} className="input input-bordered w-full max-w-xs h-32" />
                        {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                    </div>

                    {/* vehicle model */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold text-green-600">Model</span></label>
                        <input type="number" {...register("model", { required: "mobile number is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.model && <p className='text-red-600'>{errors.model.message}</p>}
                    </div>

                    <input type="submit" className='btn btn-accent mt-6 ml-[25%]' value="Submit" />
                </form>
            </div >
        </div>
    );
};

export default AddProduct;