import {Link} from "react-router-dom";

function Header() {
    return (

        <header>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item active">
                                    <Link to="/" className="text-decoration-none nav-link">

                                        Messages
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/messages-configs" className="text-decoration-none nav-link">

                                        Messages Configs

                                    </Link>
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
