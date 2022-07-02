import React from 'react';
import { Link } from 'react-router-dom';

const Location = () => {
    return (
        <div className='container my-5 p-5'>
            <div className='row'>
                <div className="col-12 col-lg-6">
                    <img src="https://images.unsplash.com/photo-1655106023516-0b95bbdf3f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className='img-fluid' alt="" />
                </div>

                <div className='col-12 col-lg-6 ps-5'>
                    <h1 className=''>Our Location and Contacts</h1>
                    <div className="row my-5 ">
                        <div className="col-2 col-md-1"><img src={require('../../images/hotel.png')} className='img-fluid' alt="" /></div>
                        <div className="col-8 ">31 Av. George V, 75008 Paris, France</div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-2 col-md-1"><img src={require('../../images/telephone.png')} className='img-fluid' alt="" /></div>
                        <div className="col-8">+33 1 49 52 70 00, +33 1 50 60 22</div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-2 col-md-1"><img src={require('../../images/email.png')} className='img-fluid' alt="" /></div>
                        <div className="col-8">shafinmuhammad28@gmail.com, sandybloom@gmail.com</div>
                    </div>
                    <div className="row my-5 ">
                        
                        <div className="col-2 col-md-1">
                            
                            <a href="/facebook"><img src={require('../../images/facebook.png')} className='img-fluid' alt="" /></a>
                        </div>
                        <div className="col-2 col-md-1">
                            <a href="/twitter"><img src={require('../../images/twitter.png')} className='img-fluid' alt="" /></a>
                        </div>
                        <div className="col-2 col-md-1">
                            <a href="/instagram"><img src={require('../../images/instagram.png')} className='img-fluid' alt="" /></a>
                        </div>
                        <div className="col-2 col-md-1">
                            <a href="/youtube"><img src={require('../../images/youtube.png')} className='img-fluid' alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;