import React from "react"
import { Link } from "react-router-dom"
import useCurrentUser from "../../store/hooks/useCurrentUser"
import "./NavBar.css"

const NavBar = () => {
  const LoggedInUser = useCurrentUser()

  return (
    <div className="sticky-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            BloggerLy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto d-flex align-items-center">
              <Link
                to="/"
                className="nav-link active mx-5"
                aria-current="page"
                href="#"
              >
                Home
              </Link>

              <Link to="bookmarks" className="nav-link mx-3" href="#">
                Bookmarks
              </Link>
              {!LoggedInUser && (
                <Link to="login" className="nav-link mx-3" href="#">
                  Login
                </Link>
              )}

              {LoggedInUser && (
                <Link
                  className="nav-link mx-3"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img
                    style={{ width: "40px", borderRadius: "50px", marginRight: "7px" }}
                    src={LoggedInUser.photoURL}
                    alt={LoggedInUser.name}
                  />{" "}
                  {LoggedInUser.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
