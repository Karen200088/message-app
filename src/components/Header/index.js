import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <>

        <header>
                <nav className="navbar navbar-expand-lg bg-dark  p-3">
                    <a className="navbar-brand" href="/">Messages App</a>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon ">
                </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className='nav-link' to=''>Messages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='configs'>Configs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link justify-content-end' to='login'>Log in</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        </header>
    </>
)


export default Header
