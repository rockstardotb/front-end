import React from "react";

// reactstrap components
// import { Container } from "reactstrap";

// core components

function Navbar() {
  return (
    <>
     {/* <div id="navbar">
        <img src="assets/saints-Logo.png" alt=""/>
        <div className="nav-items">
            <div>
                Our Mission
            </div>
            <div>
                Token Economics
            </div>
            <div>
                Roadmap
            </div>
            <div>
                Team
            </div>
            <div>w
                Contact Us
            </div>
            <button>
                Join Our Telegram
            </button>
        </div>
    </div> */}

        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="assets/saints-Logo.png" alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Our Mission<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;