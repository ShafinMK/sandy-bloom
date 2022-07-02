import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const {logOut, user} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container d-flex justify-content-between">
                    {/* <a className="navbar-brand" href="#">Sandy Bloom</a> */}
                    <Link to='/'><h1 className='navbar-brand pacifico-font'>
                        <img src={require('../../images/resort.png')} alt="" width="40" height="40" class="d-inline-block align-text-top" />
                        Sandy Bloom
                        </h1></Link>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li className="nav-item">
                                   
                                    
                                    <Link to='/home'><span className='mx-2'>Home</span></Link>
                                   
                                </li>
                                <li className="nav-item">
                                    
                                    <Link to='/reservation'><span className='mx-2'>Reservation</span></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/location'><span className='mx-2'>Location</span></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/booking'><span className='mx-2'>Booking</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Features
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item'>
                                    <img src={user?.photoURL} className='img-fluid rounded-circle w-50' alt="" />
                                </li>
                                <li className="nav-item">
                                    
                                    {
                                        user?.email? <button onClick={logOut} className="btn btn-danger">Log out</button> : <Link to='/signin'><button className='btn btn-warning'>Sign up</button></Link>
                                    }
                                    
                                    
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;