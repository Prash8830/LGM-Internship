import React from 'react'
import {
    Link
} from "react-router-dom";
const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="favicon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <Link className="navbar-brand" to="/">NEWSTROM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/003-home.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/002-bar-chart.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/004-video.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/005-atom.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/001-running.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Sports</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link active" aria-current="page" to="/technology"><img src="https://raw.githubusercontent.com/Prash8830/NEWSTROM/main/Images/png/006-chip.png" alt="Logo" width="20" height="20" className="d-inline-block align-text-top" /> Technology</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
