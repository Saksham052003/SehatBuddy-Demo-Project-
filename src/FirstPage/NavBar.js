import React from "react";
import logo from './images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="d-flex flex-column align-items-start">
                <span className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="city-select d-flex flex-column align-items-start">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <p className="address text-success mb-0">
                                    Your City & Address
                                </p>
                            </li>
                            <li className="nav-item">
                                <form>
                                    <select className="custom-select">
                                        <option value="#delhi">Delhi</option>
                                        <option value="#City">City</option>
                                    </select>
                                </form>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
            <div className="navbar-content d-flex align-items-center">
                <i className="fas fa-phone"></i>
                <div className="customer-support d-flex flex-column align-items-start">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="address text-success mb-0">
                                Customer Support
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="contact-no mb-0">
                                1800-572-0005/999-888-000-5
                            </p>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <button className="btn btn-outline-primary" type="submit">Login / Sign Up</button>
                </form>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <hr className="navbar-divider" />
            <div className="navbar-links d-flex flex-column align-items-start">
                <ul className="navbar-Nav">
                    <li className="nav-item">
                        <a href="#home" className="nav-link"><i className="fa-solid fa-house"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#product" className="nav-link">
                            <form>
                                <select className="custom-select">
                                    <option value="#delhi">Blood Test</option>
                                    <option value="#City">Options.....</option>
                                </select>
                            </form>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#product" className="nav-link">
                            <form>
                                <select className="custom-select">
                                    <option value="#delhi">X-rays & Scans</option>
                                    <option value="#City">Options.....</option>
                                </select>
                            </form>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Genetic Testing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#product" className="nav-link">
                            <form>
                                <select className="custom-select">
                                    <option value="#delhi">Doctor Consultation</option>
                                    <option value="#City">Options.....</option>
                                </select>
                            </form>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#product" className="nav-link">
                            <form>
                                <select className="custom-select">
                                    <option value="#delhi">Supplements</option>
                                    <option value="#City">Options.....</option>
                                </select>
                            </form>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#product" className="nav-link">
                            <form>
                                <select className="custom-select">
                                    <option value="#delhi">Health Tips</option>
                                    <option value="#City">Options.....</option>
                                </select>
                            </form>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Offers</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
