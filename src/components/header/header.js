import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { counterContext } from './../../contexts/counter';
const Header = () => {

    const language = useSelector((state) => state.language.lang)
    const { counter } = useContext(counterContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">AbdelRahman</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactUs">contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/counter">counter</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutUs"><a className="nav-link">About us</a></Link>    
                            </li>

                            <li className="nav-item">
                                {
                                    language == "en"?  <a className="nav-link" >Language Is English</a> : <a className="nav-link" >اللغة عربي</a>
                                }

                            </li>
                            <li className="nav-item ms-4">
                            <Link to="/counter"><a className="nav-link">{counter}</a></Link>    
                            </li>

                        </ul>
                    </div>
                </div>
            </nav></>
    );
}

export default Header;
