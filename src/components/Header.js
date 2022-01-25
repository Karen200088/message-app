import { NavLink } from "react-router-dom";

function Header() {
    return (

        <header>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">React</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item active">
                                    <NavLink to="/" className="text-decoration-none nav-link">

                                        Messages
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="messages-configs" className="text-decoration-none nav-link">

                                        Messages Configs

                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>


        </header>


    )

}


export default Header;
