import React from 'react';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className='pricing-bg my-5 '>


            <div className='container py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className='py-5'>
                            <h6 className='text-center text-light'>OUR ROOM PRICES</h6>
                            <h1 className='text-center text-light'>The Best Prices</h1>
                        </div>
                    </div>
                </div>

                <div className="row g-4 align-items-center">
                    {/* card 1  */}
                    <div className='col-12 col-lg-4 pr-0 '>
                        <div className='p-5 bg-light text-center'>
                            <h2 className='text-center'>Single Room</h2>
                            <p className='text-center fs-1'>$45 <span className='fs-6'>/night</span></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <div className='d-flex justify-content-center'>
                                <button className='btn custom-button bg-brown'>More Info</button>
                            </div>
                        </div>

                    </div>
                    {/* card 2  */}
                    <div className='col-12 col-lg-4 '>
                        <div className='p-5 bg-brown  text-center'>
                            <div className='p-0 p-lg-5'>
                                <h2 className='text-center'>Single Room</h2>
                                <p className='text-center fs-1'>$45 <span className='fs-6'>/night</span></p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn custom-button bg-dark text-white'>More Info</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card 3  */}
                    <div className='col-12 col-lg-4  '>
                        <div className='p-5 bg-light text-center'>
                            <h2 className='text-center'>Single Room</h2>
                            <p className='text-center fs-1'>$45 <span className='fs-6'>/night</span></p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <div className='d-flex justify-content-center'>
                                <button className='btn custom-button bg-brown'>More Info</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>






        </div>
    );
};

export default Pricing;


/*
<div className="row">
                <div className="col-12">
                    <div className='d-flex flex-column flex-lg-row  h-75 justify-content-center align-items-center '>
                        <div className='bg-light p-5  '>
                            <div className='px-5'>
                                <h2 className='text-center'>Single Room</h2>
                                <p className='text-center fs-1'>$45 <span className='fs-6'>/night</span></p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn custom-button bg-brown'>More Info</button>
                                </div>
                            </div>

                        </div>
                        <div className='bg-brown px-5 py-4 '>
                            <div className='p-5'>
                                <h2 className='text-center'>Small Suite</h2>
                                <p className='text-center fs-1'>$55 <span className='fs-6'>/night</span></p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>

                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-dark'>More Info</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-light p-5  '>
                            <div className='px-5'>
                                <h2 className='text-center'>Apartment</h2>
                                <p className='text-center fs-1'>$72 <span className='fs-6'>/night</span></p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>

                                <div className='d-flex justify-content-center'>
                                    <button className='btn custom-button bg-brown'>More Info</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

*/