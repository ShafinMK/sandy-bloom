import React from 'react';

const About = () => {
    return (
        <div className='container mt-5'>
            <div className='grid'>
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <img src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600" className='img-fluid ' alt="" />
                    </div>
                    <div className='col-12 col-lg-8 d-flex justify-content-center  align-items-center p-5'>

                        <div>
                            <h1 className='play-ball-font'>Relax in our Hotel Resort</h1>
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ut quis. Impedit ut cupiditate quam repudiandae labore illum consequuntur cum, atque, totam, repellendus voluptas odit ab rem incidunt iusto in.
                                    </p>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <p className=''>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ut quis. Impedit ut cupiditate quam repudiandae labore illum consequuntur cum, atque, totam, repellendus voluptas odit ab rem incidunt iusto in.
                                    </p>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4  d-flex'>
                                    <div className=' w-25'>
                                        <img src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid rounded-circle' alt="" />
                                    </div>
                                    <div className='ms-3'>
                                        <h5 className='text-xs'>Paula Winget</h5>
                                        <h6>Hotel Manager</h6>

                                    </div>
                                </div>
                                <div className='col-12 col-md-4 '>
                                    <img src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png" className='img-fluid w-50' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;