import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/'  className="navbar-brand" href="#">BloggerLy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to='/' className="nav-link active mx-5" aria-current="page" href="#">Home</Link>
                            <Link to='login' className="nav-link mx-3" href="#">Login</Link>
                            <Link to="bookmarks" className="nav-link mx-3" href="#">Bookmarks</Link>
                            <Link to="activity" className="nav-link mx-3" href="#" tabIndex="-1" aria-disabled="true">Activity</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;