import React from 'react';
import './Slider.css';
const Slider = () => {
    return (
        <div className=''>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousal" data-bs-pause="false" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner slider ">
                    <div className="carousel-item active bg-dark position-relative text-center">
                        <img src="https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_960_720.jpg" className="d-block w-100 img-fluid vh-100 vw-100 position-relative  opacity-25" alt="..." />
                        
                        <div className="carousel-caption  d-block position-absolute top-50 start-50 translate-middle">
                            <h1 className='permanent-marker-font'>MAKE YOURSELF AT HOME</h1>
                            <button className='btn bg-transparent text-white border border-light mt-5'>View Our Rooms</button>

                        </div>
                    </div>
                    <div className="carousel-item bg-dark">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 img-fluid vh-100 opacity-25" alt="..." />
                        <div className="carousel-caption d-block position-absolute top-50 start-50 translate-middle">
                            {/* use Different font  */}
                            <h6>STAY WITH US FEEL LIKE HOME</h6>
                            <h1 className='permanent-marker-font'>Redefine your expectations</h1>
                            {/* different font 3rd line */}
                            <h2 className='play-ball-font'>A hotel experience, unlike the rest</h2>
                            <button className='btn bg-transparent text-white border border-light mt-5'>View Our Rooms</button>
                        </div>
                    </div>
                    <div className="carousel-item bg-black">
                        <img src="https://images.unsplash.com/photo-1567062691477-fcbc8bbdf5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="d-block w-100 img-fluid vh-100 opacity-25" alt="..." />
                        <div className="carousel-caption d-block position-absolute top-50 start-50 translate-middle">
                            <h1 className='permanent-marker-font'>Thermal Baths</h1>
                            <button className='btn bg-transparent text-warning border border-warning mt-5'>View Our Rooms</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;