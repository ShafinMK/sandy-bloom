import React from 'react';

const Rooms = () => {
    const rooms = [
        {
            roomImg: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",


        }
    ];
    return (
        <div className='container'>
            <div className='m-1 m-md-4 m-lg-5'>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'>Double Room</span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>2 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 23 feet</span>
                            </div>

                        </div>


                    </div>
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'>Deluxe Room</span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>2 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 50 feet</span>
                            </div>

                        </div>


                    </div>
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'>Cabana</span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>2 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 50 feet</span>
                            </div>

                        </div>


                    </div>
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'>Apartment-style Room</span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>5 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 70 feet</span>
                            </div>

                        </div>


                    </div>
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'> Executive Suite </span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>4 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 60 feet</span>
                            </div>

                        </div>


                    </div>
                    <div className="col">
                        <div className="card ">
                            <img src="https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                            <div className='position-absolute top-0 end-0 text-light pt-1 pt-md-4'><h6 className='bg-success px-2 py-1 px-md-4 py-md-1'>From $25</h6></div>
                            <div className='position-absolute bottom-0 start-0 text-light p-3'>
                                {/* <p className=''>Double Room</p> */}
                                <span className='fs-3'>Small Room</span>
                                <br />
                                <span><i className="fa-regular fa-user me-1 me-lg-2"></i>1 guests</span>
                                <span className='ms-3'><i className="fa-brands fa-buromobelexperte me-1 me-lg-2"></i> 15 feet</span>
                            </div>

                        </div>


                    </div>



                </div>

            </div>
        </div>
    );
};

export default Rooms;