import React from 'react'

function Navbar() {
  return (
    <>
        <section
            data-bs-version="5.1"
            className="menu menu2 cid-sFCw1qGFAI"
            once="menu"
            id="menu2-23"
        >
            <nav className="navbar navbar-dropdown navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                <span className="navbar-caption-wrap">
                    <a
                    className="navbar-caption text-success text-primary display-5"
                    href="/"
                    >
                    RecoverMe
                    </a>
                </span>
                </div>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-bs-toggle="collapse"
                data-target="#navbarSupportedContent"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <div className="hamburger">
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                </button>
                <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    <li className="nav-item">
                    <a
                        className="nav-link link text-black text-primary display-4"
                        href="/HowitWorks"
                        
                    >
                        How it works
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className="nav-link link text-black display-4"
                        href="/about"
                       
                    >
                        About
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className="nav-link link text-black text-primary display-4"
                        href="/Newsletter"
                    >
                        Newsletter
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className="nav-link link text-black text-primary display-4"
                        href="/FAQ"
                        
                    >
                        FAQ
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className="nav-link link text-black text-primary display-4"
                        href="/Contacts"
                    >
                        Contacts
                    </a>
                    </li>
                </ul>
                <div className="navbar-buttons mbr-section-btn">
                    <a className="btn btn-success display-4" href="_add_login_link_">
                    Get Started
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </section>
    </>
  )
}

export default Navbar
