import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
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
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-justify p-10 flex flex-col justify-center items-center'>
                <h3 className='text-5xl mb-2 text-orange-500'>Believe in Us</h3>
                <h3 className='text-lg mb-4 text-green-500'>Make your Dream True</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur cupiditate sint molestiae voluptatem sed doloribus esse molestias quia, quasi rerum dicta aperiam rem. Laborum, cupiditate? Beatae quia consectetur excepturi dolor repellendus sapiente, eius laboriosam accusantium dolorum. Dolorum ratione quam minus consectetur corrupti sunt tempora quas quasi, hic possimus delectus!</p>
            </div>

        </div>
    );
};

export default Banner;