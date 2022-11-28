import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://iili.io/H2ITmLQ.jpg" className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://iili.io/HKhZgrQ.jpg" className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://iili.io/HKhmFZF.jpg" className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-justify p-10 flex flex-col justify-center items-center'>
                <h3 className='text-5xl mb-2 text-orange-500'>Believe in Us</h3>
                <h3 className='text-lg mb-4 text-green-500 font-serif'>Make your Dream True</h3>
                <p>Used cars are a great way to save money on your vehicle. They can be bought at a lower price and have low mileage. They are also more affordable than new cars in the long run. Used cars have been around for a long time, but they seem to be making a comeback in recent years. There are many benefits of buying used car, but there are some drawbacks as well. <br /> <br />
                    <span className='text-teal-600 font-serif font-semibold'> We have verified sellers, We take the responsibility Of Sellers, Believe in Us!</span>
                </p>
            </div>

        </div>
    );
};

export default Banner;