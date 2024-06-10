import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeDark } from '../../Theme/Theme'
export default function Header() {
    let { darkthemfun, setdarkthemfun, changeTheme } = useContext(ThemeDark)


    return (
        <>
            <nav className={`navbar navbar-expand-lg ${darkthemfun ? `bg_dark text-white` : `bg_gray`}`}>
                <div className="container-fluid px-5 ">
                    <a className={`navbar-brand d-flex align-items-center ${darkthemfun ? `text-white` : ``} `}>
                        <img src={` ${darkthemfun ? require('../../Assits/Untitled_design-removebg-preview.png') : require('../../Assits/logo.png')}`} alt="" style={{ width: "35px" }} />
                        <span className="fw-bolder">FOODIE </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav m-auto mb-2 mb-lg-0 `}>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${darkthemfun ? `text-white` : ``}`} aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${darkthemfun ? `text-white` : ``}`} to="menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${darkthemfun ? `text-white` : ``}`} to="Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${darkthemfun ? `text-white` : ``}`} to="Shop">Shop</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className={`${darkthemfun ? `bg_search_dark text-white` : `bg_cart`} bg_search form-control me-0 `} type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="   bg_cartp-1 ms-0 pading position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className=" bi bi-cart3 " viewBox="0 0 20 20">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <span className=' position-absolute top-0 edit'>2</span>
                        </div>
                        <div className=" bg_cartp-1 ms-0 pading border-one" onClick={changeTheme} >
                            {darkthemfun ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                            </svg>}

                        </div>
                    </div>
                </div>
            </nav>
            <div className={`${darkthemfun ? `card_dark` : `bg-wit`} offcanvas offcanvas-end`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className={`${darkthemfun ? `text-white` : ``} offcanvas-title`} id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="text-orange btn-close text-orange" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </>
    )
}
