import { NavLink } from "react-router-dom";
import React from "react";
import { useUserData } from "../../contexts/userNameContext";
import { BsMessenger } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";




const Header = () => {

const [userName] = useUserData();


    return (

    <header className="sticky-top">
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
                        <NavLink className='nav-link' to=''>
                            <BsMessenger/>    Messages
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='configs'>
                            <AiFillSetting style={{marginRight: "3px"}}/>Configs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link justify-content-end' to='login'>
                            <BiUserCircle style={{marginRight: "3px"}}/>
                            {
                                userName !== null ? userName : "Log in"
                            }
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

)
}

export default Header
