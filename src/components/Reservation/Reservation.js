import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Reservation = () => {
    const{user} = useAuth();
    // const[email, setEmail] = useState('');
    // const[name, setName] = useState('');
    // user.email? setEmail(user.email): setEmail('');
    // user.name? setName(user.displayName): setName('');
    return (
        <div className='container my-5'>

            <div className='grid'>
                <div className="row">
                    <div className='col-12 col-lg-6'>
                        <h1 className='text-center my-5'>Reservation</h1>
                        <h5 className='text-center my-5'>Book your room right now and start your amazing adventure full of discoveries and experiences with sandy bloom</h5>
                        <form >
                            <div className="mb-3 row">
                                
                                <div className="col-12">
                                <label htmlFor="staticEmail" className="form-label">Email</label>
                                    <input type="text" readOnly className="form-control" id="staticEmail" value={user?.email} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                
                                <div className="col-12">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                            </div>
                            <div className="mb-5 row">
                               
                                <div className="col-12">
                                <label htmlFor="inputNumber" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="inputNumber" />
                                </div>
                            </div>
                            <div className="mb-5 row">

                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputCheckin" className=" form-label">Check in</label>
                                    <input type="date" className="form-control" id="inputCheckin" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputCheckout" className=" form-label">Check Out</label>
                                    <input type="date" className="form-control" id="inputCheckout" />
                                </div>
                            </div>
                            <div className="mb-5 row">

                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputAdult" className=" form-label">Adults</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option >Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                        <option value="5">Five</option>
                                        
                                    </select>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputChildren" className=" form-label">Children</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option >Open this select menu</option>
                                        <option value="0">Zero</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                        <option value="5">Five</option>
                                    </select>
                                </div>
                            </div>
                            <button className='btn btn-warning w-100 rounded-pill'>Reserve</button>

                        </form>
                    </div>
                    <div className='col-12 col-lg-6 '>
                        <img src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80" className='img-fluid rounded-top' alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Reservation;