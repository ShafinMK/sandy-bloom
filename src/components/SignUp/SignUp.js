import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const SignUp = () => {
    const { signInwithGoogle } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <div className='container'>

        <div className='row d-flex align-items-center'>


            <form onSubmit={handleFormSubmit} className='col-12 col-lg-6 order-2 order-lg-1'>
                <h1 className='text-center mb-3 p-3'>Sign up</h1>
                <div className="mb-3 row">

                    <div className="col-12">
                        <label htmlFor="staticEmail" className="form-label">Email</label>
                        <input type="text" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="mb-3 row">

                    <div className="col-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="mb-3 row">

                    <div className="col-12">
                        <label htmlFor="retypePassword" className="form-label">Re-type Password</label>
                        <input type="password" className="form-control" id="retypePassword" />
                    </div>
                </div>
                <div className="mb-3 row d-flex justify-content-center">

                    <div className="col-6">

                        <button type='submit' className='btn btn-success w-100'>Sign Up</button>
                    </div>
                </div>
                <p className='text-center'>or</p>
                <div className="mb-3 row  d-flex justify-content-center">

                    <div className="col-10 col-md-5">

                        <button onClick={signInwithGoogle} className='btn btn-light px-4 py-2 border'>
                            <span className='row'>
                                <span className='col-1 mx-0 px-0'><img src="https://www.sipinclusion.org/wp-content/uploads/2020/05/google_icon_2048.png" className='img-fluid' alt="" /></span>
                                <span className='col-11 mx-0 px-0 text-left'>Sign up with google</span>
                            </span>
                        </button>
                    </div>
                </div>
                <Link to='/signin'><p className='text-center'>Log in</p></Link>

            </form>

            <div className='col-12 col-md-6 order-1 order-lg-2'>
                <img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-409.jpg?t=st=1656573501~exp=1656574101~hmac=17433d8e96c3762bdac2bf25ed941ba8cd37eb0e0c70801b6f4093fa2de966b3&w=826" className='img-fluid' alt="" />
            </div>
        </div>

    </div>
    );
};

export default SignUp;