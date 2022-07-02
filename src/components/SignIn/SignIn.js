import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {

    const { signInwithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    const handleGoogleSignin = () =>{
        signInwithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate(from, {replace:true});
        })};

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <div className='container'>

            <div className='row d-flex align-items-center'>


                <form onSubmit={handleFormSubmit} className='col-12 col-lg-6 order-2 order-lg-1'>
                    <h1 className='text-center mb-3 p-3'>Log in</h1>
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
                    <div className="mb-3 row d-flex justify-content-center">

                        <div className="col-6">

                            <button type='submit' className='btn btn-success w-100'>Log in</button>
                        </div>
                    </div>
                    <p className='text-center'>or</p>
                    <div className="mb-3 row  d-flex justify-content-center">

                        <div className="col-10 col-md-5">

                            <button onClick={handleGoogleSignin} className='btn btn-light px-4 py-2 border'>
                                <span className='row'>
                                    <span className='col-1 mx-0 px-0'><img src="https://www.sipinclusion.org/wp-content/uploads/2020/05/google_icon_2048.png" className='img-fluid' alt="" /></span>
                                    <span className='col-11 mx-0 px-0 text-left'>Sign in with google</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <Link to='/signup'><p className='text-center'>Create Account</p></Link>

                </form>

                <div className='col-12 col-md-6 order-1 order-lg-2'>
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1656569009~exp=1656569609~hmac=bd1146f662b0d4f232227377e07b756fbbf00dcecdef0ace62690dc7af3d6f60&w=826" className='img-fluid' alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignIn;