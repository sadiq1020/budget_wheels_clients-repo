import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ modalProduct, setModalProduct }) => {
    const { user } = useContext(AuthContext);
    const { categoryName, sellersName, series, picture, location, originalPrice, resalePrice, usedYears, model, purchaseYear, productCondition, mobileNumber, description } = modalProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const buyerName = form.name.value;
        const email = form.email.value;
        const brand = form.brand.value;
        const series = form.series.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const picture = form.picture.value;

        console.log(buyerName, email, brand, series, price, phone, meetingLocation);

        const booking = {
            buyerName, email, brand, series, price, phone, meetingLocation, picture
        }

        // save booking info to db
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setModalProduct(null);
                    toast.success('Booking Successful!')
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Fill up the form</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" value={date} disabled className="input w-full input-bordered" /> */}

                        <p className='ml-5 text-green-600'>Name</p>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input w-full input-bordered" />

                        <p className='ml-5 text-green-500 mt-3'>Email</p>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email address" className="input w-full input-bordered" />


                        <p className='ml-5 text-green-500 mt-3'>Vehicle Brand</p>
                        <input name="brand" type="text" defaultValue={categoryName} disabled className="input w-full input-bordered" />

                        <p className='ml-5 text-green-500 mt-3'>Series</p>
                        <input name="series" type="text" defaultValue={series} disabled className="input w-full input-bordered" />

                        <p className='ml-5 text-green-500 mt-3'>Price in $</p>
                        <input name="price" type="text" defaultValue={resalePrice} disabled className="input w-full input-bordered" />

                        <p className='ml-5 text-green-500 mt-3'>Mobile</p>
                        <input name="phone" type="number" placeholder="Phone number" required className="input w-full input-bordered" />

                        <p className='ml-5 text-green-500 mt-3'>Meeting Location</p>
                        <input name="meetingLocation" type="text" placeholder='Where do you want to meet' required className="input w-full input-bordered" />

                        {/* img url  */}
                        <input name="picture" type="text" hidden defaultValue={picture} className="input w-full input-bordered" />

                        <br />
                        <input className='btn btn-accent w-1/2 ml-[25%]' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;